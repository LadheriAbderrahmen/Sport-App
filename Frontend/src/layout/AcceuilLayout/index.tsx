import React, { Suspense, useEffect } from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import NavBar from './TopBar/Index'
import Footer from './Footer/Index'

const loading =()=> <div>Loading ...</div>

function LayoutDefault() {
  const location = useLocation();

  useEffect(()=>{
    const element = document.querySelector('.NavBar');

    if(element instanceof HTMLElement){
      element.style.position="";
      element.style.top="";
    }

    if(location.pathname ==='/Home'){
      const element = document.querySelector('.NavBar');
      if(element instanceof HTMLElement){
        element.style.position="absolute";
        element.style.top="5px";
      }
    }
  },[location])
  
  return (
    <>
    <Suspense fallback={loading()}>
        <NavBar/>
    </Suspense>
    <Suspense fallback={loading()}>
        <Outlet/>
    </Suspense>
    <Suspense fallback={loading()}>
        <Footer/>
    </Suspense>
    </>
  )
}

export default LayoutDefault