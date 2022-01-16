import React from 'react';
import { useState } from 'react';

//style
import './signUp.css';

//components
import FormInput from '../sign-in-and-sign-up/SignInAndUp';
import CustomButton from '../../custom-button/CustomButton';

//database
import { auth,createUserProfileDocument } from '../../../firebase/firebase.utils';

function SignUp() {

     const[user,setUser] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''

    })

  const handleChange = (event) =>{
    const {name,value} = event.target;
    //console.log(name,value);
    setUser((prev) => {
      return{
        ...prev,
        [name]:value
      }
    })
  }

    async function submit(event) {
         const userDetail={
               "displayName":user.displayName,
              "email":user.email,
              "password":user.password,
             "confirmPassword":user.confirmPassword,
           }
      
      event.preventDefault();

      if(user.password!==user.confirmPassword){
        alert("passwords don't match");
           return;
      }
      try{
        const { user } = await auth.createUserWithEmailAndPassword( userDetail.email, userDetail.password);
        await createUserProfileDocument(user);

      }catch(error){
        console.log(error);
      }
     
    }
      
    
     
    return (
        
        <>
        
        <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form'>
          <FormInput
            type='text'
            name ="displayName"
            value={user.displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name="email"
            value={user.email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name = "password"
            value={user.password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit' onClick={submit} >SIGN UP</CustomButton>
        </form>
      </div>
            
        </>
    )
}

export default SignUp
