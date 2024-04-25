import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { ApiCore } from '../ApiCore/ApiCore'
import { ALoginusersuccess, ArefreshToken } from '../Redux/Actions'

type PropsProtected = {
   component: React.ComponentType
}

function ProtectedRoutes({ component: RouteComponent }: PropsProtected) {
   const dispatch = useDispatch()

   const api = new ApiCore()

   const user = api.getLoggedInUser();
   console.log("api.isUserAuthenticated",api.isUserAuthenticated())
   if (api.isUserAuthenticated() === false) {
      if (api.isRefreshToken() === true) {
         dispatch(ArefreshToken(user.refreshToken))
      }else{
         dispatch(ALoginusersuccess(null))
         return <Navigate to={{ pathname: '/' }} />
      }
   }

   // if (api.isUserAuthenticated() === false) {
   //       dispatch(ALoginusersuccess(null))
   //       return <Navigate to={{ pathname: '/' }} />
   //    }
  

   return <RouteComponent />


}

export default ProtectedRoutes