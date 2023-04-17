import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { config } from "./config";
import "./App.css";
function Userview() {
  const params = useParams();
 const [userData,setUserData]=useState({})
 
useEffect(()=>{
    loadUser()
  },[])
let loadUser =async()=>{
  try{
    let user = await axios.get(
      `${config.api}/users/${params.id}`
    );

setUserData(user.data)
}
  catch(error){

  }
}
  return (
  
  <>
  <h2 >{userData.name}</h2>
  <h3>{userData.position}</h3>
  <h4>{userData.office}</h4>
  <h3>{userData.age}</h3>
  <h3>{userData.startdate}</h3>
  <h3>{userData.salary}</h3>
  
  </>
)
  
  
  }

export default Userview; 