import { ApiCore } from "./ApiCore";


const Api = new ApiCore()

function FetchSportLocal(data : any){
    const baseUrl = "https://google.serper.dev/places";
    const myHeaders = {
        'X-API-KEY': '032677f37505865b8e8b7972372e8a561238d6be',
        'Content-Type': 'application/json',
        'Authorization' : null
      };
    const requestData = {
        q: data,
        gl: 'tn'
      };
    return Api.specefiquePost(baseUrl,requestData,myHeaders)    
}

export {FetchSportLocal}