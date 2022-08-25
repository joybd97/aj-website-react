import React, { useEffect, useState } from 'react';
import '../../App.css';
import allServices from '../data/data.json';
import Row from 'react-bootstrap/Row';
import Service from '../Service';
import Aos from 'aos';



export default function Services() {
  const [allservice,setService] = useState([]);

useEffect(() => {
  Aos.init();
  setService(allServices);
  
},[]);
  return (
    <div className="bg-gray">
  <h1 className='services'>SERVICES</h1>

  <div className="container margin-top-bottom">
  <Row xs={1} md={2} className="g-4">
  {allservice.map(service => <Service key={service.id}
                                    service={service}
                                    data-aos="fade-zoom-in" data-aos-offset="200"></Service>)}
  
  </Row>
  </div>
 
  </div>
  );
}
