export const POSTSUCCESS = "POSTSUCCESS";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";

export const posttest =(data : any)=>({
    type:POSTSUCCESS,
    payload : data
})
