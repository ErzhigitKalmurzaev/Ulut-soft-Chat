import { SignUp } from "@/types/auth/auth";
import { axiosInstance } from "./axios";

const AUTH_URL = `v1/catalogs/`;

class AuthService {

    async signUp() {
        return await axiosInstance
                        .post<SignUp>(`${AUTH_URL}`)
                        .then(res => res.data)
    }
}

const authService = new AuthService();

export default authService