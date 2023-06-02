import { Routes, Route } from "react-router-dom";

import routes from "./routes";

function App() {
    return (
        <div>
            <Routes>
                {routes.map(({ path, element: Element }, index) => {
                    return <Route key={index} path={path} element={<Element />} />;
                })}
            </Routes>
        </div>
    );
}

export default App;
