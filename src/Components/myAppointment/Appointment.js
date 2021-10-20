import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './appointment.css'

const Appointment = (props) => {
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
        <div className="my-5 pt-5 pb-5 text-center">
            <h1 className=" fw-bold pt-5">This section under Devoloper Constraction</h1>
            <h4 className=" fw-bold pb-5 text-danger">Realese Soon...</h4>
            
        </div>
    );
};

export default Appointment;