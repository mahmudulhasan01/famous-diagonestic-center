import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div>
            

            <div className="position-absolute ms-5 mt-5">
                <div>
                <h1 className="">
                    <span className="costom-text-color">FAMOUS DAIGONOSTIC CENTER </span>
                    <br /> <br /> WE CARE ABOUT <br />
                ABOUT <span className="costom-text-color">HEALTH</span></h1>

                <button className="">
                About Us
                </button>
             </div>  
            </div>

            <div className="">
                <img className="img-fluid w-100" src="https://i.ibb.co/NWtP30W/mainbanne-filterr.jpg" alt="" />
            </div>


        </div>
    );
};

export default Header;