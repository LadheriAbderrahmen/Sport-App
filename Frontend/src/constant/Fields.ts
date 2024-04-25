export const LoginFields : any[]=[
    {
        label : 'E-mail',
        type : 'text',
        name : 'email',
    },
    {
        label : 'Password',
        type : 'password',
        name : 'password',
        validation : { required: "password required", maxLength: {
            value : 20,
            message : "Long password "
        } }
    }
]
export const LoginFields0 : any[]=[
    {
        label : 'Username',
        type : 'Username',
        name : 'username',
        validation : { required: "Username required"  }
    },
    {
        label : 'Lastname',
        type : 'Lastname',
        name : 'lastname',
        validation : { required: "Lastname required"}
    }
]
export const SingupFields1 : any[]=[
    {
        label : 'place',
        type : 'place',
        name : 'place',
        validation : { required : "Required place"}
    },
    {
        label : 'Genre',
        type : 'Genre',
        name : 'genre',
        validation : { required : "Required Genre"}
    },
    {
        label : 'age',
        type : 'age',
        name : 'age',
        validation : { required : "Required age"}
    },
]
export const SingupFields2 : any[]=[
    {
        label : 'phone',
        type : 'phone',
        name : 'phone',
        validation : { required : "Required phone" , Length: {
            value : 8,
            message : "phone number incorrect "
        } }
    },
    {
        label : 'name_gym',
        type : 'name_gym',
        name : 'name_gym',
        validation : { required : "Required name_gym"}
    }
]
export const Gym : any[]=[
    {
        label : 'place',
        type : 'place',
        name : 'place',
        validation : { required : "Required place"}
    },
    
]

export const ObjectifFields : any[]=[
    {
        label : "Poid Actuel",
        type : "number",
        name : "Poid",
        validation : {required : "Required Poid"}
    },
    {
        label : "Poid Objectif",
        type : "number",
        name : "poidObj",
        validation : {required : "required field"}
    }
    
]