import React, {useState} from 'react';
import style from "./SigninCSS.module.css";
import {useNavigate} from "react-router-dom";
import {UserAuth} from "../Auth";

function Signin(props) {
  const {signIn} = UserAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
      await signIn(email, password);
      alert("You have been signed in successfully!");
      props.setUserIsSignedIn(true);
      navigate("/profile");
    }catch(e)
    {
      setError(e.message);
      console.log(e.message);
    }
  }

  return (
    <div className={style.container}>
      <h1>
        Sign-in to your account!
      </h1>
      <form id="signupForm" onSubmit={handleSubmit}>
        <label>
          Email:
        </label>
        <br/>
        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="Email..."/>
        <br/>
        <label>
          Password:
        </label>
        <br/>
        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="Password..."/>
        <br/>
        <button className={style.button} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signin;