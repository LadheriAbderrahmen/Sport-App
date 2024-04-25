import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { posttest } from '../../Redux/Actions'
import { ApostGym } from '../../Redux/GymLocation/action'
import Cardcomp from '../../constant/Cardcomp'
import { Button, Col, Row } from 'react-bootstrap'
import gym from "../../asset/images/header.jpg"
function Test() {
  const dispatch = useDispatch()
  const [gymLoco, setgymloco] = useState<any>([])
  useEffect(() => {
    dispatch(posttest("Gyms in your region"))
  }, [])
  const getallgyms = (data : string) => {
    dispatch(ApostGym("Gym "+data))
  console.log("Gym"+data)


  }
  const { location } = useSelector((state: any) => ({
    location: state.GymLocationReducer.gym_loco
  }))
  useEffect(() => {
    
    if( location && location.places){
      setgymloco(location.places)
    }
  }, [location])

  const[userdata , setuserdata]=useState<any>()
  const { Account_user } = useSelector((state: any) => ({
    Account_user: state.AccountReducer
  }))
  useEffect(()=>{
    if(Account_user && Account_user.loginuser){
      setuserdata(Account_user.loginuser)
    }
  },[Account_user])
  return (
    <div className="mainContent">
      <div className="ContentHeader" >
      <h3> {userdata && userdata.place} Gyms</h3>
      <Button onClick={()=>getallgyms(userdata && userdata.place)}>See Gyms</Button>
      </div>
      <Row>
      {(gymLoco || []).map((item: any) => (
        <Col style={{margin:'10px'}}>
        <Cardcomp Title={item.title} Description={item.address} imgUrl={gym} website={item.website} />
        </Col>
      ))}
      </Row>
    </div>
  )
}

export default Test