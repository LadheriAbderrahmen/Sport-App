import React, { useEffect, useState } from 'react'
import header1 from '../../../asset/images/header1.jpg'
import { MENU_dashboard } from '../../../constant/Menu';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { posttest } from '../../../Redux/Actions';

const UserImage = () => {
  const[userdata , setuserdata]=useState<any>()
  const { Account_user } = useSelector((state: any) => ({
    Account_user: state.AccountReducer
  }))
  useEffect(()=>{
    if(Account_user && Account_user.loginuser){
      setuserdata(Account_user.loginuser)
    }
  },[Account_user])
  console.log(userdata)
  return (
    <>
      <div className="Picture">
        <img src={header1} width='70' height='70' />
        <h5>{userdata && userdata.username} {userdata && userdata.lastname}</h5>
      </div>
    </>
  );
}



const Navbar_li = ({ data }: any) => {
  const dispatch = useDispatch()
  const title_fnc=(data : any)=>{
    dispatch(posttest(data))
  }
  

  return (
    <>
      {(data || []).map((item: any) => (

        <Link key={item.label} to={item.path} onClick={()=>title_fnc(item.label)}>
          <li className='leftlisubnav' id={item.path}>
            <div className="contentli d-flex ">
              <span className="icon-container" >
                {item.icon && React.createElement(item.icon , { size: 19 })}
              </span>
              {item.label}
            </div>
          </li>
        </Link>
      ))}
    </>
  );
}
const Navbar_ul = ({ Menudata }: any) => {
  return (
    <ul>
      <Navbar_li data={Menudata} />
    </ul>
  );
}

function LeftNav() {
  return (

    <div className='LeftNav'>
      <div className="pic">
        <UserImage />
      </div>
      <nav>
        <Navbar_ul Menudata={MENU_dashboard} />
      </nav>
    </div>
  )
}

export default LeftNav