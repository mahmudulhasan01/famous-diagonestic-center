import React from 'react';  
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';


const Navbar = () => {
  const {id} = useParams();
   
  
    const {user, logOut} = useAuth()
    return (
      <div className="d-flex py-3 justify-content-around bg-dark">
        <div className="">
          <h3 className="costom-text-color">FAMOUS DAIGONOSTIC CENTER</h3>
        </div>
        <div className="">
          <Link className="text-decoration-none pe-2 text-light btn" to="/home">Home</Link>

          {/* <a as={HashLink}   className="text-decoration-none pe-2 text-light btn" to="/home#services">Service</a> */}

          

          <Link className="text-decoration-none pe-2 text-light btn" to="/appointment">My Appoinment</Link>

          
          <Link className="text-decoration-none pe-2 text-light btn" to={`/report`}>My Report</Link>

          {user?.email ?
            <Link className="text-decoration-none pe-2 text-light btn" to={`/billing`}>My Bill</Link>
            :
            <Link className="text-decoration-none pe-2 text-light btn" to="/appointment">About us</Link>
          }
          
          
          {user?.email?
                    <button onClick={logOut} className=" text-light btn">LogOut</button>
                    

                   :
                   <Link className="text-decoration-none pe-2 text-light btn" to="/login">Login</Link>
          }
         
          
          {user?.email &&
            <span className="text-light"><img width="35px" className="rounded-circle" src={user?.photoURL} alt="" /> {user.displayName}</span>}
        </div>
      </div>
    );
};

export default Navbar;