import { ApiCore } from "./ApiCore";


const api = new ApiCore()

const PostUser=(data : any)=>{
    const baseUrl = "http://localhost:8080/api/Account_User/Signup"
    return api.post(baseUrl , data)
}
const LoginUser=(data : any)=>{
    const baseUrl = "http://localhost:8080/api/Account_User/Login"
    return api.post(baseUrl , data)
}
const RefreshToken=(RefreshToken : any)=>{
    const baseUrl = "http://localhost:8080/api/Account_User/auth/RefreshToken"
    return api.post(baseUrl , RefreshToken)
}
export {PostUser , LoginUser , RefreshToken}