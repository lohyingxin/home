import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Container, Row, Jumbotron, Col } from "react-bootstrap";
const divStyle = {
  display: "block",
  flexDirection: "row",
  alignItems: "left",
};
const Experience = ({ experiences }) => {
  // return (
  //   <section className='section'>
  //     <Container>
  //       <Jumbotron fluid id='experiences' className='bg-white'>
  //         <h2 className='display-4 mb-5 text-center'>{experiences.heading}</h2>
  //         <Col>
  //           {experiences.data.map((data) => {
  //             return (
  //               <ExperienceCard
  //                 key={data.company}
  //                 data={data}
  //                 style={{ display: "inline-block" }}
  //               />
  //             );
  //           })}
  //         </Col>
  //       </Jumbotron>
  //     </Container>
  //   </section>
  // );
  return (
    <div
      id='experiences'
      className='jumbotron jumbotron-fluid m-0'
      style={{ backgroundColor: "white" }}
    >
      <div className='container container-fluid'>
        <div className='row'>
          <div className='col d-lg-inline align-self-center'>
            <h1 className='display-4 pb-4 text-center'>
              {experiences.heading}
            </h1>
            <div className='row' style={divStyle}>
              <div>
                <div
                  style={{
                    float: "left",
                    // marginLeft: "20px",
                    marginRight: "155px",
                    height: "180px",
                  }}
                >
                  <img
                    src={require("../../assets/img/ocbc.png")}
                    style={{
                      height: "80px",
                      float: "left",
                      marginTop: "35px",
                    }}
                  />
                </div>

                <h4>Business Analyst Intern</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>
                    <b>STEM@OCBC Programme</b>
                  </i>
                  <br />
                  <i>Group Operations &amp; Technology</i>
                  <br />
                  <b>
                    <i>May 2021 - Present</i>
                  </b>
                  <br />

                  <li style={{ fontSize: "smaller" }}>
                    Identify opportunities to streamline current AML process by
                    analyzing common data points used in different processes
                  </li>
                </p>
              </div>
            </div>
            <div
              style={{
                height: "50px",
              }}
            ></div>
            <div className='row' style={divStyle}>
              <div>
                <div
                  style={{
                    float: "left",
                    // marginLeft: "20px",
                    marginRight: "130px",
                    height: "180px",
                  }}
                >
                  <img
                    src={require("../../assets/img/hdb.png")}
                    style={{
                      height: "80px",
                      float: "left",
                      marginTop: "10px",
                      marginLeft: "20px",
                    }}
                  />
                </div>
                {/* <div
                  style={{
                    height: "280px",
                  }}
                > */}
                <h4>Communications Intern</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>Building Quality Group</i>
                  <br />
                  <b>
                    <i>Mar 2019 - May 2019</i>
                  </b>
                  <br />
                  <li style={{ fontSize: "smaller" }}>
                    Improved public communication between contractors and
                    residents by revising the Housing Improvement Programme
                    (HIP) information booklet
                  </li>
                  <li style={{ fontSize: "smaller" }}>
                    Handled the graphic design and publicity for department
                    events
                  </li>
                  <li style={{ fontSize: "smaller" }}>
                    Reviewed site visits through presentations to highlight
                    areas of improvement
                  </li>
                </p>
                {/* </div> */}
              </div>
            </div>
            <div className='row' style={divStyle}>
              <div>
                <div
                  style={{
                    float: "left",
                    // marginLeft: "20px",
                    marginRight: "130px",
                    height: "200px",
                    marginTop: "70px",
                  }}
                >
                  <img
                    src={require("../../assets/img/moe.png")}
                    style={{
                      height: "80px",
                      float: "left",
                      marginRight: "20px",
                    }}
                  />
                </div>

                <h4
                  style={{
                    marginTop: "50px",
                  }}
                >
                  Teaching Intern
                </h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>Hua Yi Secondary School</i>
                  <br />
                  <b>
                    <i>Jan 2019 - Mar 2019</i>
                  </b>
                  <br />
                  <li style={{ fontSize: "smaller" }}>
                    Taught lower and upper secondary Chemistry and Physics for
                    Express, NA, NT classes
                  </li>
                  <li style={{ fontSize: "smaller" }}>
                    Improved weekly lesson plans for Secondary 2 classes based
                    on daily observation and feedback from mentor
                  </li>
                  <li style={{ fontSize: "smaller" }}>
                    Honed interpersonal communication skills while conducting
                    remedial sessions for students
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
