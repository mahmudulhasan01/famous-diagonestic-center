import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    
    const {id} = useParams();
    // console.log(id)
    const num = id;
    // console.log(num)
    
    const [services, setServices] = useState([]);
    // console.log(services)

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[num]);
    
  
    const service = services.find(item => item.id == num);

        

    return (
        <div className="mt-5 mx-5 w-50">
            <h1 className="text-center mb-5 pb-5 fw-bold">Test Details</h1>
            <div className="d-flex justify-content-center align-items-center">
                <div className="img-singel">
                    <img className="rounded" src={service?.img} alt="" />
                </div>
                <div className="ms-5">
                    <h3 className="fw-bold text-warning shadow-lg p-3 mb-5">{service?.name}</h3>
                    <h6 className='fw-bold'>{service?.titele}</h6>
                    <p>{service?.description}</p>
                    <p className="text-danger fw-bold">Cost of this Test: ${service?.price}</p>
                    
                    {/* onClick={handelConfirmAppointment} */}
                    <Link to =""><button  className="btn btn-warning fw-bold">Confairm Appoinment</button></Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;