import React from 'react';  
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import LoadData from '../../hooks/LoadData';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';


const Navbar = () => {
  const {id} = useParams
  
  ();
   
  
    const {user, logOut} = useAuth()
    return (
      <div className="d-flex py-3 justify-content-around bg-dark">
        <div className="">
          <h3 className="costom-text-color">FAMOUS DAIGONOSTIC CENTER</h3>
        </div>
        <div className="">
          <Link className="text-decoration-none pe-2 text-light btn" to="/home">Home</Link>

          {/* <a as={HashLink}   className="text-decoration-none pe-2 text-light btn" to="/home#services">Service</a> */}

          
            {/* <Link className="text-decoration-none pe-2 text-light btn" to={`/service/:${id}`}>Service</Link> */}

          <Link className="text-decoration-none pe-2 text-light btn" to="/appointment">My Appoinment</Link>
          

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