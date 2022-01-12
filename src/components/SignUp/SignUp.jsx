import React from 'react';
import { useState } from 'react';

//style
import './signUp.css';

//components
import FormInput from '../sign-in-and-sign-up.jsx/SignInAndUp';
import CustomButton from '../custom-button/CustomButton';

//database
import { auth,createUserProfileDocument } from '../../firebase/firebase.utils';

function SignUp() {

    // const[user,setUser] = useState({
    //     displayName:'',
    //     email:'',
    //     password:'',
    //     confirmPassword:''
    // })
    // console.log(user);
    const [displayName, setDisplayName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");

  
    async function UserPost(event) {
      const userDetail={
          "displayName":displayName,
         "email":email,
         "password":password,
         "confirmPassword":confirmPassword,
      }


      console.log(userDetail);
      event.preventDefault();

      if(password!==confirmPassword){
        alert("passwords don't match");
           return;
      }
      try{
        const { user } = await auth.createUserWithEmailAndPassword( email, password);
        await createUserProfileDocument(user, { displayName });

      }catch(error){
        console.log(error);
      }
     
    }
      


  

    // const handleSubmit = async event => {
    //     event.preventDefault();
    
    //     const { displayName, email, password, confirmPassword } = setUser;
    
    //     if (password !== confirmPassword) {
    //       alert("passwords don't match");
    //       return;
    //     }
    
    //     try {
    //       const { user } = await auth.createUserWithEmailAndPassword(
    //         email,
    //         password
    //       );
    
    //       await createUserProfileDocument(user, { displayName });
    
    //       setUser({
    //         displayName: '',
    //         email: '',
    //         password: '',
    //         confirmPassword: ''
    //       });
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    
    
     
    return (
        
        <>
        
        <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form'>
          <FormInput
            type='text'
            
            value={displayName}
            onChange={(e)=>setDisplayName(e.target.value)}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            label='Email'
            required
          />
          <FormInput
            type='password'
            
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            label='Password'
            required
          />
          <FormInput
            type='password'
            
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit' onClick={UserPost}>SIGN UP</CustomButton>
        </form>
      </div>
            
        </>
    )
}

export default SignUp
