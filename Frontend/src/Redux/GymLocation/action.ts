export const POSTGYMLOCATION = "POSTGYMLOCATION";
export const POSTGYMLOCATIONSUCCESS = "POSTGYMLOCATIONSUCCESS";
export const POSTGYMLOCATIONFAILED = "POSTGYMLOCATIONFAILED";


export const ApostGym=(data : any)=>({
    type:POSTGYMLOCATION,
    payload : data
})

export const ApostGymsuccess=(data : any)=>({
    type : POSTGYMLOCATIONSUCCESS,
    payload : data
})

export const ApostGymfailed=(data : any)=>({
    type : POSTGYMLOCATIONFAILED,
    payload : data
})
