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
            <div
              style={{
                height: "30px",
              }}
            ></div>
            <div className='row' style={divStyle}>
              <div>
                <div
                  style={{
                    float: "left",
                    // marginLeft: "20px",
                    marginRight: "130px",
                    height: "200px",
                  }}
                >
                  <img
                    src={require("../../assets/img/seamoney.png")}
                    style={{
                      height: "130px",
                      float: "left",
                      marginLeft: "200px",
                      marginRight: "50px",
                    }}
                  />
                </div>
                <div
                  style={{
                    height: "170px",
                  }}
                >
                <h4>Business Intelligence Intern</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>Credit Business, Insurance</i>
                  <br />
                  <b>
                    <i>Jan 2023 - May 2023</i>
                  </b>
                  <br />
                </p>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "30px",
              }}
            ></div>
            <div className='row' style={divStyle}>
              <div>
                <div
                  style={{
                    float: "left",
                    // marginLeft: "20px",
                    marginRight: "130px",
                    height: "200px",
                  }}
                >
                  <img
                    src={require("../../assets/img/goldman.png")}
                    style={{
                      height: "130px",
                      float: "left",
                      marginLeft: "200px",
                      marginRight: "50px",
                    }}
                  />
                </div>
                <div
                  style={{
                    height: "170px",
                  }}
                >
                <h4>Summer Analyst</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>Global Markets Operations, Commodities</i>
                  <br />
                  <b>
                    <i>May 2022 - Jul 2022</i>
                  </b>
                  <br />
                </p>
                </div>
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
                    marginRight: "155px",
                    height: "200px",
                  }}
                >
                  <img
                    src={require("../../assets/img/shopee.svg")}
                    style={{
                      height: "120px",
                      float: "left",
                      marginTop: "-20px",
                      marginLeft: "70px",
                      marginRight: "-65px",
                    }}
                  />
                </div>
                <div
                  style={{
                    height: "150px",
                  }}
                >
                <h4>Data Analytics Intern</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>Regional Operations, Customer Service</i>
                  <br />
                  <b>
                    <i>Nov 2021 - Jan 2022</i>
                  </b>
                  <br />
                </p>
                </div>
              </div>
            </div>
            <div className='row' style={divStyle}>
              <div
                style={{
                  height: "50px",
                }}
              ></div>
              <div>
                <div
                  style={{
                    float: "left",
                    // marginLeft: "20px",
                    marginRight: "155px",
                    height: "300px",
                  }}
                >
                  <img
                    src={require("../../assets/img/ocbc.png")}
                    style={{
                      height: "80px",
                      float: "left",
                      marginTop: "100px",
                      marginRight: "-74px",
                      marginLeft: "50px",
                    }}
                  />
                </div>
                <h4>Technology Architect Intern</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>
                    <b>STEM@OCBC Programme</b>
                  </i>
                  <br />
                  <i>
                    Group Operations &amp; Technology, Transformation
                    Architecture Team
                  </i>
                  <br />
                  <b>
                    <i>Aug 2021 - Oct 2021</i>
                  </b>
                  <br />


                </p>
                <div
                  style={{
                    height: "30px",
                  }}
                ></div>
                <h4>Business Analyst Intern</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>
                    <b>STEM@OCBC Programme</b>
                  </i>
                  <br />
                  <i>
                    Group Operations &amp; Technology, Technology Solutions Team
                  </i>
                  <br />
                  <b>
                    <i>May 2021 - Jul 2021</i>
                  </b>
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
