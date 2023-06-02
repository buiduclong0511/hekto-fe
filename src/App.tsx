import { Routes, Route } from "react-router-dom";

import routes from "./routes";

function App() {
    return (
        <div>
            <Routes>
                {routes.map(({ path, element: Element, layout: Layout }, index) => {
                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Layout>
                                    <Element />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
