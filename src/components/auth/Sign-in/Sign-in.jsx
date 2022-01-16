import React from "react";
import { useState } from "react";

//style
import "./signIn.style.css";

//components

import FormInput from '../sign-in-and-sign-up/SignInAndUp'
import CustomButton from "../../custom-button/CustomButton";

//Google auth
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";

function Signin(props) {


  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) =>{
    const {name,value} = event.target;
   // console.log(name,value);
    setLoginUser((prev) => {
      return{
        ...prev,
        [name]:value
      }
    })
  }

  const submit = async (event) => {
    const userDetail = {
      email: loginUser.email,
      password: loginUser.password,
    };
    //console.log(userDetail);
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(userDetail.email, userDetail.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <label>Email</label>
        <FormInput
          name="email"
          type="email"
          value={loginUser.email}
          onChange={handleChange}
        />

        <label>password</label>
        <FormInput
          name="password"
          type="password"
          value={loginUser.password}
          onChange={handleChange}
        />

        <div className="btn">
          <CustomButton type="submit" value="submit from" onClick={submit}>
            {" "}
            SIGN IN
          </CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            {" "}
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default Signin;
