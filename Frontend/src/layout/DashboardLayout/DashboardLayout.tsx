import React, { Suspense, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import NavBar from './TopNavDashBoard/NavBar'
import LeftNav from './Left_Navbar/LeftNav'
import { posttest } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'

const Loading = () => <div>Loading ...</div>

function DashboardLayout() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(posttest("Dashboard")) 
  },[])
  
  return (
    <div className='wrapper'>
      <Suspense fallback={Loading()}>
        <NavBar />
      </Suspense>
      <Suspense fallback={Loading()}>
        <LeftNav />
      </Suspense>
      <div className="content">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  )
}

export default DashboardLayout