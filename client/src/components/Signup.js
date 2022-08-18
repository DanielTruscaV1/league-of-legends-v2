import React, {useState} from 'react';
import style from "./SignupCSS.module.css";
import {UserAuth} from "../Auth";
import {useNavigate} from "react-router-dom";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const {createUser} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
      await createUser(email, password);
      alert("You have been successfully signed up!");
      props.setUserIsSignedIn(true);
      navigate("/profile");
    }catch(e){
      setError(e.message);
      console.log(e.message);
    }
  }

  return (
    <div className={style.container}>
      <h1>
        Sign-up today and become a pro!
      </h1>
      <form id="signupForm" onSubmit={handleSubmit}>
        <label>
          Username:
        </label>
        <br/>
        <input required type="text" name="username" id="username" placeholder="Username..."/>
        <br/>
        <label>
          Password:
        </label>
        <br/>
        <input required type="password" name="password" id="password" placeholder="Password..."/>
        <br/>
        <label>
          Confirm password:
        </label>
        <br/>
        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password..."/>
        <br/>
        <label>
          Email:
        </label>
        <br/>
        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="Email" />
        <br/>
        <button className={style.button} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup;