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
    },
    {
        path: path.productDetail,
        element: ProductDetail,
    },
    {
        path: path.login,
        element: Login,
    },
    {
        path: path.register,
        element: Register,
    },
    {
        path: path.searchResult,
        element: SearchResult,
    },
    {
        path: path.cart,
        element: Cart,
    },
    {
        path: path.payment,
        element: Payment,
    },
    {
        path: path.orderCompleted,
        element: OrderCompleted,
    },
    {
        path: path.aboutUs,
        element: AboutUs,
    },
    {
        path: "*",
        element: NotFound,
    },
];

export default routes;
