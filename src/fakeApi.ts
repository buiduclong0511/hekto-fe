export interface IProduct {
    id: number;
    name: string;
    price: number;
}

const products: IProduct[] = [
    {
        id: 1,
        name: "TV",
        price: 3000,
    },
    {
        id: 2,
        name: "Tủ lạnh",
        price: 4000,
    },
];

const fakeApi = (id: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(({ id: productId }) => productId === id);

            resolve({
                data: product,
            });
        }, 2000);
    });
};

export default fakeApi;
