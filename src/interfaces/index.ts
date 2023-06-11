export interface ILoginRequest {
    email: string;
    password: string;
}

export interface IRegisterRequest extends ILoginRequest {
    firstName: string;
    lastName: string;
}

export interface IRefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}

export interface IImage {
    id: number;
    url: string;
    isThumbnail: boolean;
}

export interface IProduct {
    id: number;
    categoryId: number;
    name: string;
    description: string;
    price: number;
    isLiked: number;
    images: IImage[];
}

export interface ICombineProductResponse {
    data: {
        featureProducts: IProduct[];
        latestProducts: IProduct[];
        trendingProducts: IProduct[];
    };
}

export interface ISearchProductParams {
    limit: number;
    page: number;
    search: string;
    order: string;
}

export interface ISearchProductResponse {
    data: IProduct[];
    pages: number;
    total: number;
    currentPage: number;
}
