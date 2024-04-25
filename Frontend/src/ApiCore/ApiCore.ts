import axios from "axios"
import { jwtDecode } from "jwt-decode";

const setAuthorization = (token: string | null) => {
    if (token){
        axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
        console.log("Token in Header : ",axios.defaults.headers.common['Authorization'])
    }else{
         delete axios.defaults.headers.common['Authorization']
        console.log("Token not Header : ",axios.defaults.headers.common['Authorization'])
    };
};

const AUTH_SESSION_KEY = 'Sport_App';

const getUserFromCookie = () => {
    console.log("getUserFromCookie");
    const user = sessionStorage.getItem(AUTH_SESSION_KEY);
    return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
};

class ApiCore{
    
    get =(url : string)=>{
        return axios.get(url)

    }

    specefiquePost=(url : any ,requestData : any, header : any)=>{
        return axios.post(url , requestData ,{headers : header})
    }

    getbyid=()=>{

    }

    post=( url : any, data : any)=>{
        return axios.post(url , data)
    }

    delete=()=>{

    }

    update=()=>{

    }

    setLoggedInUser = (session: any) => {
        if (session) sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
    };

    setrefreshtoken(refreshtoken : any){
        const user = getUserFromCookie()
        if(user){
            user.token = refreshtoken;
            sessionStorage.setItem("Sport_App" , JSON.stringify(user))
        }
    }
 
    getLoggedInUser(){
        console.log("getLoggedInUser");
        return getUserFromCookie();
    };

    isRefreshToken = () => {
        const user = getUserFromCookie();

        if (!user) {
            return false;
        }
        
        const decoded: any = jwtDecode(user.refreshToken);
        console.log(decoded.exp)
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            return false;
        } else {
            return true;
        }
    };
    
    isUserAuthenticated = () => {
        console.log("isUserAuthenticated");
        const user = this.getLoggedInUser();
        if (!user) {
            return false;
        }
        const decoded: any = jwtDecode(user.token);
        console.log("current user token : " , user.token)
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            setAuthorization(null);
            return false;
        } else {
            return true;
        }
    };
    
  
}
console.log("token from apicore ")

let user = getUserFromCookie();

if (user) {
    console.log("if (user)")

    const { token } = user;
    if (token) {
        console.log("setAuthorization(token)")
        setAuthorization(token);
    }
}

export {ApiCore , setAuthorization}