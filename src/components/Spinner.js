import React from "react";
import loading from './Funnel.gif';

const Spinner =()=>{
    return(
        <>
        <div className="container">
            <img src={loading} style={{width:'2rem', height:'2rem'}} alt="Loading..." />
        </div>
        </>
    );
};

export default Spinner;