import React, { Suspense, useEffect, useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";
import Search from './Search';
import { MENU } from '../../../constant/Menu';
import ModalCustom from './PopupInscri';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { ALoginuser, ALoginusersuccess, Apostuser } from '../../../Redux/Account_User/action';
import AccountDropDown from './AccountDropDown';
import NotifDropDown from './NotifDropDown';
import { ApiCore } from '../../../ApiCore/ApiCore';

const RightsideSubnav = () => {

  const api = new ApiCore()
  useEffect(()=>{
    if(api.isUserAuthenticated()){
      dispatch(ALoginusersuccess(api.getLoggedInUser()))
    }
  },[])

  const [show, setShow] = useState(false);
  const [showSignup, setshowSignup] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSignup = () => setshowSignup(false);

  //--------------------------------------------------//

  const dispatch = useDispatch()

  const { Account_user } = useSelector((state: any) => ({
    Account_user: state.AccountReducer
  }))

  //--------------------------------------------------//

  const GetUserData = (data: any) => {
    dispatch(Apostuser(data))
    setShow(true)
  }


  const GetUserDataLogin = (data: any) => {
    if (data) {
      if (data === true) {
        setshowSignup(data)
        setShow(false)
      } else {
        dispatch(ALoginuser(data))
      }
    }
  }
  
  const Loading = () => <div>Loading ...</div>
  const user = api.getLoggedInUser();

  return (
    <>
      <ul>
        <li>
          {user || Account_user.loginuser ?
            <Suspense fallback={Loading()}>
              <AccountDropDown />
            </Suspense>
            :
            <MdAccountCircle onClick={handleShow} className='Icons' />
          }
        </li>

        <li >
          <NotifDropDown />
        </li>
        <li>
          <Search />
        </li>
      </ul>
      <ModalCustom show={show} handleClose={handleClose} postdata={GetUserDataLogin} Login={true} />
      <ModalCustom show={showSignup} handleClose={handleCloseSignup} postdata={GetUserData} Signup={true} />
    </>
  );
}

const NavElementLink = ({ data }: any) => {

  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.pathname);

    const allElements = document.querySelectorAll(".leftlisubnav");

    allElements.forEach((elem) => {
      if (elem instanceof HTMLElement) {
        elem.style.borderBottom = "none";
        elem.style.color = "rgb(173, 173, 173)";
      }
    })

    if (element) {
      element.style.borderBottom = "3px solid green";
      element.style.color = 'white';
    }

  }, [location])

  return (
    <>
      {(data || []).map((item: any) => (
        <Link key={item.label} to={item.path}>
          <li className='leftlisubnav' id={item.path}>
            {item.label}
          </li>
        </Link>

      ))}
    </>
  );
};

const LeftsideSubnav = () => {


  return (
    <>
      <ul className='leftulsubnav'>
        <NavElementLink data={MENU} />
      </ul>
    </>
  );
}

const Subnav = () => {
  return (
    <>
      <nav className='Subnav'>
        <LeftsideSubnav />
        <RightsideSubnav />
      </nav>
    </>
  );
}

const TopNav = () => {
  return (
    <>
      <nav className='TopBar'>
        <div className='TopnavContent'>
          <h1>GYM</h1>
          <GiMuscleUp className='IconLogo' />
        </div>
      </nav>
    </>
  );
}


function NavBar() {
  return (
    <div className='NavBar'>
      <div className="navcontent">
        <TopNav />
        <Subnav />
      </div>
    </div>
  )
}

export default NavBar