import React from 'react';
import { Row } from 'react-bootstrap';
import teamMember from '../team/team.json';
import TeamMember from '../TeamMember';
const Team = () => {
    return (
        <div className="bg-gray">
  <h1 className='products'>Team Members</h1>

  <div className="container margin-top-bottom">
  <Row xs={1} md={2} className="g-4">
  {teamMember.map(service => <TeamMember key={service.id}
                                    service={service}
                                    data-aos="fade-zoom-in" data-aos-offset="200"></TeamMember>)}
  
  </Row>
  </div>
 
  </div>
    );
};

export default Team;