import React, { Suspense, useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom';
import LayoutDefault from '../layout/AcceuilLayout';
import Route from './Route';
import ProtectedRoutes from './ProtectedRoutes';
import DashboardLayout from '../layout/DashboardLayout/DashboardLayout';


//Dashboard
const Dashboard = React.lazy(() => import("../pages/dashboard/index"));

//pages
const HomePage = React.lazy(() => import("../pages/Home/index"));
const test = React.lazy(() => import("../pages/GymLoco/Test"));


const Loading = () => <div>Loading ...</div>

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>
}

const LoadComponent = ({ component: Component }: LoadComponentProps) => {
    return (
        <Suspense fallback={Loading()}>
            <Component />
        </Suspense>
    );
}

const AllRoutes = () => {

    return useRoutes([
        {path:'/', element: <Route/>},
        
        { path: '/',
          element: <LayoutDefault/>,
            children: [
              {path:'/Home' , element:<LoadComponent component={HomePage}/>},
              {path:'/ProgSport' , element:<LoadComponent component={HomePage}/>},
              {path:'/HealthyFood' , element:<LoadComponent component={HomePage}/>},
              {path:'/Protaine' , element:<LoadComponent component={HomePage}/>},
          ]
        },
        
        {
            path: '/Dashboard',
            element: <ProtectedRoutes component={DashboardLayout}/>,
            children: [
                { path: '', element: <LoadComponent component={Dashboard} /> },
                { path: '/Dashboard/GymsPlaces', element: <LoadComponent component={test} /> },
            ],
        }
    ]);
}
export { AllRoutes }