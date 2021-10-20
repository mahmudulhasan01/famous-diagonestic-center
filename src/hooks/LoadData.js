import { useEffect, useState } from "react";


const LoadData = () =>{
    const [services, setServices] = useState([]);
    // console.log(services)

    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return[
        services
    ]
}


export default LoadData;