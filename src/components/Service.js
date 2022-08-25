import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './service.css';


const Service = (props) => {
  //console.log(props);
    return (
        <div >
        <Col >
        <Card data-aos="this.props.aos" data-aos-offset="this.props.aos_offset" className="service-part box-shadow" aos="fade-left" aos_offset="100">
          <Card.Img variant="top" className="service-image" src={require(`../../src/components/data/icons/${props.service.img}`)}  />
          <Card.Body>
            <Card.Title className="service-title">{props.service.name}</Card.Title>
            <Card.Text className="service-text">
              {props.service.detail}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default Service;