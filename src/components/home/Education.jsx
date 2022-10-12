import React, { useState, useEffect, Profiler } from "react";
import { Link } from "react-router-dom";

const divStyle = {
  display: "block",
  flexDirection: "row",
  alignItems: "left",
};
const Education = ({ heading }) => {
  return (
    <div
      id='education'
      className='jumbotron jumbotron-fluid m-0'
      style={{ backgroundColor: "#ededed" }}
    >
      <div className='container container-fluid'>
        <div className='row'>
          <div className='col d-lg-inline align-self-center'>
            <h1 className='display-4 pb-4 text-center'>{heading}</h1>
            <div className='row' style={divStyle}>
              <div>
                <div
                  style={{
                    float: "left",
                    marginLeft: "20px",
                    marginRight: "155px",
                    height: "170px",
                  }}
                >
                  <img
                    src={require("../../assets/img/nus.png")}
                    style={{
                      height: "130px",
                      float: "left",
                      marginTop: "30px",
                      alt: "National University of Singapore Logo",
                    }}
                  />
                </div>

                <h4>BSc.(Hons) Business Analytics</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>School of Computing</i>
                  <br />
                  <i>
                    University Town College Programme (UTCP) - College of Alice
                    and Peter Tan
                  </i>
                  <br />
                  <a
                    href='https://credentials.nus.edu.sg/6d11ec8c-b732-40c4-9c78-876354954566#gs.3xjt2l'
                    style={{ color: "black" }}
                  >
                    <b>Dean's List</b>
                  </a>
                  <b> for AY20/21 Semester 2</b>
                  <br />
                  Expected Graduation: <b>May 2023</b>
                  <br />
                  Expected Grade: <b>Distinction</b>
                </p>
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
                    marginLeft: "20px",
                    marginRight: "100px",
                    height: "160px",
                  }}
                >
                  <img
                    src={require("../../assets/img/delft.png")}
                    style={{
                      height: "150px",
                      float: "left",
                      marginRight: "70px",
                      alt: "Delft University of Technology Logo",
                    }}
                  />
                </div>

                <h4>BSc. Computer Science</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>
                    Faculty of Electrical Engineering, Mathematics and Computer
                    Science
                  </i>
                  <br />
                  <i>
                    <b>Student Exchange Programme (SEP)</b>
                  </i>
                  <br />
                  Exchange Period: <b>Sep 2022 - Jan 2023</b>
                  <br />
                  Coursework:{" "}
                  <b>
                    Web Science and Engineering, Big Data Processing, Start-Up:
                    IT and AI, Technology Entrepreneurship and Health, Urban
                    Data Science
                  </b>
                </p>
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
                    marginLeft: "20px",
                    marginRight: "100px",
                    height: "160px",
                  }}
                >
                  <img
                    src={require("../../assets/img/ntu.png")}
                    style={{
                      height: "120px",
                      float: "left",
                      marginTop: "30px",
                      alt: "Nanyang Technological University Logo",
                    }}
                  />
                </div>

                <h4>BSc. Data Science and Artificial Intelligence</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>School Computer Science and Engineering</i>
                  <br />
                  <i>
                    <b>
                      Singapore University Student Exchange Programme (SUSEP)
                    </b>
                  </i>
                  <br />
                  Exchange Period: <b>Jan 2022 - May 2022</b>
                  <br />
                  Coursework:{" "}
                  <b>
                    Big Data Management, Machine Learning, Network Science,
                    Numerical Analysis
                  </b>
                </p>
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
                    marginLeft: "20px",
                    marginRight: "225px",
                    height: "150px",
                  }}
                >
                  <img
                    src={require("../../assets/img/pjc.png")}
                    style={{
                      height: "100px",
                      float: "left",
                      marginTop: "20px",
                      marginLeft: "20px",
                      alt: "Pioneer Junior College",
                    }}
                  />
                </div>
                <h4>GCE 'A' Levels (2018)</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>
                    H2 Physics, H2 Chemistry, H2 Mathematics, H2 Economics, H1
                    General Paper, H1 Project Work
                  </i>
                  <br />
                  5 Distinctions (all H2 subjects and Project Work)
                  <br />
                  U.A.P: <b>87.5/90</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
