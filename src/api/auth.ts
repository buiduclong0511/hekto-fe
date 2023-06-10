import axiosClient from ".";
import { ILogin, IRegister } from "../interfaces";

const authApi = {
    register(body: IRegister) {
        return axiosClient.post("/auth/register", body);
    },
    login(body: ILogin) {
        return axiosClient.post("/auth/login", body);
    },
    getCurrentUser() {
        return axiosClient.get("/auth/current-user");
    },
};

export default authApi;
