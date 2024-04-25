export const POSTUSERACCOUNT = "POSTUSERACCOUNT";
export const POSTUSERACCOUNTSUCCESS = "POSTUSERACCOUNTSUCCESS";
export const POSTUSERACCOUNTFAILED = "POSTUSERACCOUNTFAILED";



export const NAVI = "NAVI";

export const Anavi=(nav : any)=>({
    type:NAVI,
    payload : nav

})

export const Apostuser=(data : any)=>({
    type:POSTUSERACCOUNT,
    payload : data
})

export const ApostUsersuccess=(data : any)=>({
    type : POSTUSERACCOUNTSUCCESS,
    payload : data
})

export const ApostUserfailed=(data : any)=>({
    type : POSTUSERACCOUNTFAILED,
    payload : data
})

export const LOGINUSER = "LOGINUSER";
export const LOGINUSERSUCCESS = "LOGINUSERSUCCESS";
export const LOGINUSERFAILED = "LOGINUSERFAILED";

export const ALoginuser=(data : any)=>({
    type:LOGINUSER,
    payload : data
})

export const ALoginusersuccess=(data : any)=>({
    type : LOGINUSERSUCCESS,
    payload : data
})

export const ALoginuserfailed=(data : any)=>({
    type : LOGINUSERFAILED,
    payload : data
})

export const REFRESHTOKEN = "REFRESHTOKEN";
export const REFRESHTOKENSUCCESS = "REFRESHTOKENSUCCESS";
export const REFRESHTOKENFAILED = "REFRESHTOKENFAILED";

export const ArefreshToken=(data : any)=>({
    type:REFRESHTOKEN,
    payload : data
})

export const ARefreshTokensuccess=(data : any)=>({
    type : REFRESHTOKENSUCCESS,
    payload : data
})

export const ARefreshTokenfailed=(data : any)=>({
    type : REFRESHTOKENFAILED,
    payload : data
})