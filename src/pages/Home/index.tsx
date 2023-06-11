import { useState, useEffect } from "react";

import { IProduct } from "../../interfaces";
import productApi from "../../api/product";

const Home: React.FC = () => {
    const [featureProducts, setFeatureProducts] = useState<IProduct[]>([]);
    const [latestProducts, setLatestProducts] = useState<IProduct[]>([]);
    const [trendingProducts, setTrendingProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        productApi.getCombineProducts().then((res) => {
            setFeatureProducts(res.data.featureProducts);
            setLatestProducts(res.data.latestProducts);
            setTrendingProducts(res.data.trendingProducts);
        });
    }, []);

    return (
        <div>
            <h1>Home page</h1>
        </div>
    );
};

export default Home;
