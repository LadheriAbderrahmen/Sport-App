import React from 'react'
import {AllRoutes} from '.'
import { BrowserRouter } from 'react-router-dom'

function Routes() {
  return (
    <BrowserRouter>
        <AllRoutes/>
    </BrowserRouter>
  )
}

export default Routes