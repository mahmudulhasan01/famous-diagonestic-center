
import LoadData from '../../hooks/LoadData';
import Service from '../Service/Service';
import './Secvices.css'

 
const Services = () => {

     const [services] = LoadData();
    
    return (
        <div id="services">
            <h1 className="text-center fw-bolder mt-5">Our Services</h1>
           <div className=" services container w-100">
           {
                services.map(service=><Service
                key= {service.id}
                service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;