import React from "react";

import { Col, Card } from "react-bootstrap";
const ExperienceCard = ({ data }) => {
  return (
    <Col lg='15'>
      <div className='pb-5 text-left'>
        <div
          style={{
            display: "inline-block",
            verticalAlign: "top",
            marginRight: "100px",
          }}
        >
          <img
            className=' bg-white mb-3'
            src={data.companylogo}
            alt=''
            height='80'
            style={{ float: "left" }}
          />
        </div>
        <p className='lead' style={{ display: "inline-flex" }}>
          {data.role}
          <br />
          {data.date}
          <br />
          {data.description}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
