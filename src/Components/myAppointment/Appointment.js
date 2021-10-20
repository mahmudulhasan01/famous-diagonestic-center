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
        <div className="">
            <h1>Mahmudul Hasan</h1>
            <h1>Mahmudul Hasan</h1>
            <h1>Mahmudul Hasan</h1>
            
        </div>
    );
};

export default Appointment;