import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {singInUseingGoogle, singInUseingGithub, error} = useAuth();



    return (
        <div className="container my-5 py-5 d-flex justify-content-center">
           
           <div className="">

           <p className="text-danger">{error}</p>
           <br /> 

           <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control w-100" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link className="text-bold ms-4" to='/singup'>New user</Link>
  <br /> <br /><br />

</form>                                                                     

      
   <button onClick={singInUseingGoogle} className="bg-dark rounded p-1 px-3 me-4 btn"><i className="fab fa-google text-warning fs-3"></i></button>

<button onClick={singInUseingGithub} className="bg-dark rounded p-1 px-3 me-4 btn"><i className="fab fa-github-square text-warning fs-3"></i></button>

<button className="bg-dark rounded p-1 px-3 me-4 btn"><i className="fab fa-facebook text-warning fs-3"></i></button>



           </div>

<br /><br /><br />
        </div>
    );
};

export default Login;