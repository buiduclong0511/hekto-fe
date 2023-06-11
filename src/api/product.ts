import axiosClient from ".";
import { ICombineProductResponse, ISearchProductParams, ISearchProductResponse } from "../interfaces";

const productApi = {
    search(params: ISearchProductParams): Promise<ISearchProductResponse> {
        return axiosClient.get("/products", {
            params,
        });
    },
    getCombineProducts(): Promise<ICombineProductResponse> {
        return axiosClient.get("/products/combine-products");
    },
};

export default productApi;
