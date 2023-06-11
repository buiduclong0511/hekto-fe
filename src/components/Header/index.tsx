import styled from "styled-components";
import { useState, useEffect } from "react";

import Input from "../Form/Input";
import { IProduct } from "../../interfaces";
import productApi from "../../api/product";
import useDebouncedEffect from "../../hooks/useDebounceEffect";

function Header() {
    const [isShowSearchResult, setIsShowSearchResult] = useState<boolean>(true);
    const [keyword, setKeyword] = useState<string>("");
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value.trim());
    };

    const handleFocus = () => {
        setIsFocus(true);
    };

    const handleBlur = () => {
        setIsFocus(false);
    };

    useEffect(() => {
        if (isFocus && keyword) {
            setIsShowSearchResult(true);
        } else if (!isFocus) {
            setIsShowSearchResult(false);
        }
    }, [isFocus, keyword]);

    useEffect(() => {
        if (keyword) {
            setIsSearching(true);
        } else {
            setProducts([]);
            setIsShowSearchResult(false);
            setIsSearching(false);
        }
    }, [keyword]);

    useDebouncedEffect(
        () => {
            if (keyword) {
                productApi
                    .search({ limit: 3, page: 1, order: "createdAt:desc,id:desc", search: keyword })
                    .then((res) => setProducts(res.data))
                    .finally(() => setIsSearching(false));
            }
        },
        [keyword],
        800
    );

    return (
        <div>
            <SearchBox>
                <Input
                    className="input"
                    value={keyword}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                {isShowSearchResult && (
                    <SearchResult>
                        {isSearching ? (
                            <p>Searching...</p>
                        ) : (
                            <>
                                {products.length ? (
                                    products.map((product) => (
                                        <ResultItem key={product.id}>
                                            <img
                                                src={product.images[0].url}
                                                alt={product.name}
                                                className="product-img"
                                            />
                                            <div className="product-info">
                                                <h3 className="product-name">{product.name}</h3>
                                                <div className="product-price">${product.price}</div>
                                            </div>
                                        </ResultItem>
                                    ))
                                ) : (
                                    <p>
                                        Không có kết quả nào cho <strong>{keyword}</strong>
                                    </p>
                                )}
                            </>
                        )}
                    </SearchResult>
                )}
            </SearchBox>
        </div>
    );
}

const SearchBox = styled.div`
    width: 200px;
    position: relative;

    .input {
        width: 200px;
    }
`;

const SearchResult = styled.ul`
    position: absolute;
    top: calc(100% + 4px);
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    background-color: #fff;
    width: 100%;
`;

const ResultItem = styled.li`
    display: flex;
    gap: 10px;
    padding: 8px;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        background-color: #eee;
    }

    .product-img {
        width: 60px;
        height: 60px;
        object-fit: cover;
    }

    .product-name {
        font-weight: bold;
        margin-bottom: 8px;
    }
`;

export default Header;
