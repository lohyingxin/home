import React, { useState, useEffect, Profiler } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
const divStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
const Skills = () => {
  return (
    <div
      id='skills'
      className='jumbotron jumbotron-fluid m-0'
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className='container container-fluid'>
        {/* <div className="col-5 d-none d-lg-inline align-self-center">
            </div> */}
        <div className='d-inline align-self-center'>
          <h1 className='display-4 pb-5 text-center'>Skills</h1>

          <Tabs
            defaultActiveKey='home'
            justify
            variant='tabs'
            transition={false}
            id='skills-tabs'
            style={{
              backgroundColor: "#f7f7f7",
              fontSize: "1.25rem",
            }}
          >
            <Tab eventKey='home' title='Technical Skills'>
              <div className='col d-lg-inline align-self-center'>
                <br />
                <div className='row' style={divStyle}>
                  <div className='col text-center'>
                    <p className='lead text-center'>Java</p>
                    <img
                      src={require("../../assets/img/java.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Python</p>
                    <img
                      src={require("../../assets/img/python.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>JavaScript</p>
                    <img
                      src={require("../../assets/img/js.png")}
                      style={{ height: "100px" }}
                    />
                  </div>

                  <div className='col text-center'>
                    <p className='lead text-center'>R</p>
                    <img
                      src={require("../../assets/img/r.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>HTML</p>
                    <img
                      src={require("../../assets/img/html.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>CSS</p>
                    <img
                      src={require("../../assets/img/css.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                </div>
                <br />
                <div className='row' style={divStyle}>
                  <div className='col text-center'>
                    <p className='lead text-center'>MongoDB</p>
                    <img
                      src={require("../../assets/img/mongodb.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>SQL</p>
                    <img
                      src={require("../../assets/img/sql.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>React</p>
                    <img
                      src={require("../../assets/img/react.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Tableau</p>
                    <img
                      src={require("../../assets/img/tableau.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Git</p>
                    <img
                      src={require("../../assets/img/git.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>AWS</p>
                    <img
                      src={require("../../assets/img/aws.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                </div>
                <br />
                <div className='row' style={divStyle}>
                  <div className='col text-center'>
                    <p className='lead text-center'>Flask</p>
                    <img
                      src={require("../../assets/img/flask.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>ExpressJS</p>
                    <img
                      src={require("../../assets/img/nodejs.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Scikit-Learn</p>
                    <img
                      src={require("../../assets/img/scikit.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Pandas</p>
                    <img
                      src={require("../../assets/img/pandas.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Excel</p>
                    <img
                      src={require("../../assets/img/excel.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    {/* <p className='lead text-center'>Git</p>
                    <img
                      src={require("../../assets/img/git.png")}
                      style={{ height: "100px" }}
                    /> */}
                  </div>
                  <div className='col text-center'>
                    {/* <p className='lead text-center'>Flask</p>
                    <img
                      src={require("../../assets/img/flask.png")}
                      style={{ height: "100px" }}
                    /> */}
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey='design' title='Design Skills'>
              <div className='col d-lg-inline align-self-center'>
                <br />
                <div className='row' style={divStyle}>
                  <div className='col text-center'>
                    <p className='lead text-center'>Procreate</p>
                    <img
                      src={require("../../assets/img/procreate.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Adobe Photoshop</p>
                    <img
                      src={require("../../assets/img/photoshop.png")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Adobe Illustrator</p>
                    <img
                      src={require("../../assets/img/illustrator.png")}
                      style={{ height: "135px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Adobe InDesign</p>
                    <img
                      src={require("../../assets/img/indesign.png")}
                      style={{ height: "135px" }}
                    />
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey='soft' title='Soft Skills'>
              <div className='col d-lg-inline align-self-center'>
                <br />
                <div className='row' style={divStyle}>
                  <div className='col text-center'>
                    <p className='lead text-center'>Problem Solving</p>
                    <img
                      src={require("../../assets/img/solve.svg")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Project Management</p>
                    <img
                      src={require("../../assets/img/project.svg")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Technical Communication</p>
                    <img
                      src={require("../../assets/img/communication.svg")}
                      style={{ height: "100px" }}
                    />
                  </div>
                </div>
                <br />
                <div className='row' style={divStyle}>
                  <div className='col text-center'>
                    <p className='lead text-center'>Leadership</p>
                    <img
                      src={require("../../assets/img/leader.svg")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Collaboration</p>
                    <img
                      src={require("../../assets/img/collab.svg")}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Empathy</p>
                    <img
                      src={require("../../assets/img/empathy.svg")}
                      style={{ height: "100px" }}
                    />
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Skills;
