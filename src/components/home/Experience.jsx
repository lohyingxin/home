import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Container, Row, Jumbotron, Col } from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className='section'>
      <Container>
        <Jumbotron fluid id='experiences' className='bg-white'>
          <h2 className='display-4 mb-5 text-center'>{experiences.heading}</h2>
          <Col>
            {experiences.data.map((data) => {
              return (
                <ExperienceCard
                  key={data.company}
                  data={data}
                  style={{ display: "inline-block" }}
                />
              );
            })}
          </Col>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Experience;
