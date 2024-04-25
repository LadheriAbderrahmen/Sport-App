import React, { useEffect, useState } from 'react'
import { GiMuscleUp } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux';

const TitleDashboard = () => {
  const [Title, settitle] = useState<string>()


  const { current_title } = useSelector((state: any) => ({
    current_title: state.FirstReducer.Title
  }))
  useEffect(() => {
    settitle(current_title)
  }, [current_title])

  return (
    <>
      <h6>{Title && Title}</h6>

    </>
  );
}

function NavBar() {

  return (
    <div className='Nav'>
      <div className="nav_content d-flex">
        <div className='TopnavContent'>
          <h1>GYM</h1>
          <GiMuscleUp className='IconLogo' />
        </div>
        <div className="Title_Zone">
          <TitleDashboard />
        </div>
      </div>
    </div>
  )
}

export default NavBar