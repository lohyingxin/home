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
                    marginRight: "75px",
                    height: "170px",
                  }}
                >
                  <img
                    src={require("../../assets/img/nus.png")}
                    style={{
                      height: "130px",
                      float: "left",
                      marginTop: "10px",
                      marginLeft:"80px",
                      alt: "National University of Singapore Logo",
                    }}
                  />
                </div>

                <h4>BSc.(Hons) Business Analytics</h4>
                <p
                  className='lead text-left'
                  //style={{ float: "right" }}
                >
                  <i>School of Computing, 2019-2023</i>
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
                  Grade: <b>Distinction</b>
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
