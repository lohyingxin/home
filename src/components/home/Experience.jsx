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
                    height: "180px",
                  }}
                >
                  <img
                    src={require("../../assets/img/shopee.svg")}
                    style={{
                      height: "120px",
                      float: "left",
                      marginTop: "10px",
                      marginLeft: "70px",
                      marginRight: "-40px",
                    }}
                  />
                </div>
                {/* <div
                  style={{
                    height: "280px",
                  }}
                > */}
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
                  <li style={{ fontSize: "smaller" }}>
                    Analyse and monitor operational key performance indicators
                    across the region (including logistics, payment, customer
                    satisfaction, listing, etc.)
                  </li>
                  <li style={{ fontSize: "smaller" }}>
                    Conduct root cause analysis when operational performance
                    fluctuates
                  </li>
                  <li style={{ fontSize: "smaller" }}>
                    Retrieved regional data weekly to compile performance report
                    for all 8 RegOps groups
                  </li>
                  {/* <li style={{ fontSize: "smaller" }}>
                    Reviewed site visits through presentations to highlight
                    areas of improvement
                  </li> */}
                </p>
                {/* </div> */}
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
                    height: "500px",
                  }}
                >
                  <img
                    src={require("../../assets/img/ocbc.png")}
                    style={{
                      height: "80px",
                      float: "left",
                      marginTop: "190px",
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

                  <li style={{ fontSize: "smaller" }}>
                    Conducted market study and research on emerging technologies
                    in Cloud technology
                  </li>
                  <li style={{ fontSize: "smaller" }}>
                    Assist with the implementation of Terraform into the Bank's
                    exisitng infrastructure
                  </li>
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
                  <br />

                  <li style={{ fontSize: "smaller" }}>
                    Conducted market study and research on emerging technologies
                    in the Anti-Money Laundering (AML) Know Your Customer (KYC)
                    solutions industry
                  </li>
                  <li style={{ fontSize: "smaller" }}>
                    Retrieved and performed trend analysis on AML data in
                    multiple dimensions from the Hadoop environment
                  </li>
                  <li style={{ fontSize: "smaller" }}>
                    Worked with solutions team to plan and budget for Group
                    Legal and Regulatory Compliance's (GLRC) OP2022
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
                      marginLeft: "70px",
                      marginRight: "-70px",
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
                      marginRight: "-50px",
                      marginLeft: "50px",
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
