import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthMiddleware from "./components/AuthMiddleware";
import routes from "./routes";

import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div>
            <Routes>
                {routes.map(({ path, element: Element, layout: Layout, isPrivate }, index) => {
                    const Middleware = isPrivate ? AuthMiddleware : Fragment;

                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Middleware>
                                    <Layout>
                                        <Element />
                                    </Layout>
                                </Middleware>
                            }
                        />
                    );
                })}
            </Routes>

            {/* Toast container */}
            <ToastContainer />
        </div>
    );
}

export default App;
