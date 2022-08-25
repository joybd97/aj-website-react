import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const TeamMember = (props) => {
    return (
        <div>
        <Col >
        <Card data-aos="this.props.aos" data-aos-offset="this.props.aos_offset" className="service-part2 box-shadow" aos="fade-left" aos_offset="100">
          <Card.Img variant="top" className="person-service-image" src={require(`./team/${props.service.img}`)}  />
          <Card.Body>
            <Card.Title className="service-title">{props.service.detail}</Card.Title>
            <Card.Text className="service-text">
              {props.service.name}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default TeamMember;