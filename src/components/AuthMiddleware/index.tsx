import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { STORAGE_KEYS } from "../../constants";
import storage from "../../helpers/storage";
import path from "../../routes/path";

const AuthMiddleware: React.FC<React.PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const accessToken = storage.get(STORAGE_KEYS.ACCESS_TOKEN);
        if (!accessToken) {
            navigate(path.login + "?continue_url=" + encodeURIComponent(location.pathname));
        }
    }, [location.pathname, navigate]);
    return <>{children}</>;
};

export default AuthMiddleware;
