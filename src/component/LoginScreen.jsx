import React, { useState } from "react";
import logo from "../assets/map-logo.png"
import logo1 from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const LoginScreen = () => {
const navigate = useNavigate()
    const [user , setUser] = useState("")
    const [password , setPassword] = useState("")
const onChange = (e) => {
    setUser(e.target.value)
}
const onPasswordChange = (e) => {
    setPassword(e.target.value)
}
const onSubmit = (e) => {
    e.preventDefault()
if(user === "OSOCON2022" && password=== "Osocon@2022"){
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);
    navigate("/event")
}else {
    toast.error("Incorrect credential")
}
}
  return (
    <>
    <div className="background">
    <div className="login-container">
   
      <div className="login-card">
      <center><img className="map-logo" src={logo} alt="logo" /></center> 
      <center><img className="logo" src={logo1} alt="logo" /></center> 
        <form className="m-3" onSubmit={onSubmit}>
        
          <div className="form-group border-bottom">
            <label for="email">Email :</label>
            <input value={user} onChange={onChange}  id="email" type="text"></input>
          </div>
          <div className="form-group mt-3 border-bottom">
            <label for="pass">password :</label>
            <input value={password} onChange={onPasswordChange} id="pass" type="text"></input>
          </div>
          <center>
            <button className="btn btn-dark mt-3 login-button">Login</button>
          </center>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default LoginScreen;
