import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SingUp = () => {
    const {EmailAndPasswordLogin, user} = useAuth()
    console.log(user)


    // const [email, setEmail] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const handelEmailChange = e =>{
    //     setEmail(e.target.value);
    // }
    const handelEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handelPasswordChange = e =>{
        setPassword(e.target.value);
    }

    const handelRegistration = e =>{
        EmailAndPasswordLogin(email, password);
        
        e.preventDefault();
    }

    return (
        <div className="">
            <h1 className="text-center">Create Your Account</h1>

            
        <div className="container my-5 py-5 d-flex justify-content-center">
           
           <div className="">

           <form onSubmit={handelRegistration}>
  <div className="mb-3">
  <label htmlFor="exampleInputname1" className="form-label">Your name</label>
  <input type="text" class="form-control" placeholder="Your name" aria-label="First name"/>
  <br />

    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onBlur={handelEmailChange} type="email" className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" required/>

    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onBlur={handelPasswordChange} type="password" className="form-control w-100" id="exampleInputPassword1" required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link className="text-bold ms-4" to='/login'>Already Have an Account???</Link>
  <br /> <br /><br />

</form>       
           </div>
        </div>

           
        </div>
    );
};

export default SingUp;