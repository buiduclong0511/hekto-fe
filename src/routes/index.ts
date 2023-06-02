import DefaultLayout from "../layouts/DefaultLayout";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import OrderCompleted from "../pages/OrderCompleted";
import Payment from "../pages/Payment";
import ProductDetail from "../pages/ProductDetail";
import Register from "../pages/Register";
import SearchResult from "../pages/SearchResult";

interface IRoute {
    path: string;
    element: React.FC;
    layout: React.FC<React.PropsWithChildren>;
}

export const path = {
    home: "/",
    login: "/login",
    register: "/register",
    searchResult: "/search",
    productDetail: "/product/:id",
    cart: "/cart",
    payment: "/payment",
    orderCompleted: "/order-completed",
    aboutUs: "/about-us",
};

const routes: IRoute[] = [
    {
        path: path.home,
        element: Home,
        layout: DefaultLayout,
    },
    {
        path: path.productDetail,
        element: ProductDetail,
        layout: DefaultLayout,
    },
    {
        path: path.login,
        element: Login,
        layout: DefaultLayout,
    },
    {
        path: path.register,
        element: Register,
        layout: DefaultLayout,
    },
    {
        path: path.searchResult,
        element: SearchResult,
        layout: DefaultLayout,
    },
    {
        path: path.cart,
        element: Cart,
        layout: DefaultLayout,
    },
    {
        path: path.payment,
        element: Payment,
        layout: DefaultLayout,
    },
    {
        path: path.orderCompleted,
        element: OrderCompleted,
        layout: DefaultLayout,
    },
    {
        path: path.aboutUs,
        element: AboutUs,
        layout: DefaultLayout,
    },
    {
        path: "*",
        element: NotFound,
        layout: DefaultLayout,
    },
];

export default routes;
