import React from 'react';
import { useState } from 'react';

//style
import './signIn.style.css'


//components
import FormInput from '../sign-in-and-sign-up.jsx/SignInAndUp';
import CustomButton from '../custom-button/CustomButton';

//Google auth
import { auth,signInWithGoogle } from '../../firebase/firebase.utils';


function Signin(props) {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");



    async function UserPost(event) {
        const userDetail={
            "email":email,
           "password":password,
          
        }
        console.log(userDetail);
        event.preventDefault();
  
        try{
           await auth.signInWithEmailAndPassword( email, password);         
        }catch(error){
          console.log(error);
        }
       
      }
    
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <label>Email</label>
                <FormInput 
                
                type='email'
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} />

                <label>password</label>
                <FormInput 
                
                type='password'   
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                />
                
                <div className='btn'>
                    <CustomButton type="submit" value="submit from" onClick={UserPost}> SIGN IN</CustomButton>
                    <CustomButton onClick ={signInWithGoogle} isGoogleSignIn > SIGN IN WITH GOOGLE</CustomButton>
                </div>
               
            </form>
        </div>
    )
}

export default Signin;
