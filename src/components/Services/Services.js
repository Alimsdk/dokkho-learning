import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./fakeDb.json')
        .then(res=>res.json())
        .then(value=>setServices(value));
    },[])
    return (
     
           
            <div className="d-flex flex-wrap justify-content-around">
            {
                services.map(service=>  <Service service={service}></Service> )
            }
            </div>
       
    );
};

export default Services;