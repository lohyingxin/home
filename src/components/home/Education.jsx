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
                    height: "150px",
                  }}
                >
                  <img
                    src={require("../../assets/img/nus.png")}
                    style={{
                      height: "130px",
                      float: "left",
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
                  Expected Graduation: <b>May 2023</b>
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
