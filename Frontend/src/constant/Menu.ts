import { MdDashboard } from "react-icons/md"
import { GrMapLocation } from "react-icons/gr"
import { IoFastFoodOutline } from "react-icons/io5"
import { CgGym } from "react-icons/cg"

export const MENU : any []=[
    {
        label:'Home',
        path : '/Home'
    },
    {
        label:'Prog Sport',
        path : '/ProgSport'
    },
    {
        label:'Healthy Food',
        path : '/HealthyFood'
    },
    {
        label:'Protaine',
        path : '/Protaine'
    }
]
export const MENU_dashboard : any []=[
    {
        label:'Dashboard',
        path : '/Dashboard',
        icon : MdDashboard 
    },
    {
        label:'Gyms in your region',
        path : '/Dashboard/GymsPlaces',
        icon : GrMapLocation  

    },
    {
        label:'List Healthy Food',
        path : '/ListHealthyFood',
        icon : IoFastFoodOutline 

    },
    {
        label:'List Exercices',
        path : '/ListExercices',
        icon : CgGym  

    }
]