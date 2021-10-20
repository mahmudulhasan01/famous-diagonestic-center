import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = (props) => {
    // console.log(props.service)
    const {id, name, img, titele} = props.service
   
    
    return (
        
       <div className="d-flex m-1 mb-5 mt-5 p-2 shadow-lg">
           <div className="img-container">
               <img className="" src={img} alt="" />
           </div>
           <div className="d-flex justify-content-center align-items-center ms-2">
               <div className="">
               <h5>{name}</h5>
               <p>{titele}</p>
               <Link to={`/service/${id}`}>
                 <button className="btn btn-warning shadow-lg me-3 px-4
                 ">Details</button>
               </Link>
              <button className="btn btn-info shadow-lg">Book   Appointment</button>
              
               </div>
               
           </div>
       </div>
        
    );
};

export default Service;