import { useDispatch, useSelector } from 'react-redux'
import { posttest } from '../../Redux/Actions';
import NavBar from '../../layout/AcceuilLayout/TopBar/Index';
import { useEffect } from 'react';
import { Anavi } from '../../Redux/Account_User/action';

function Index() {
  const dispatch = useDispatch()

  const { Account_user } = useSelector((state: any) => ({
    Account_user: state.AccountReducer
  }))
  
  useEffect(()=>{
    dispatch(Anavi(false))
    console.log(Account_user.loginuser)
  },[])

  return (
    <div style={{textAlign:'center'}}>
     <h1>Wellcom to Your DashBoard</h1>
    </div>
  )
}

export default Index