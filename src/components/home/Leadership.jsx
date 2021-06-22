import React, { useState, useEffect, Profiler } from "react";
import Carousel from "react-bootstrap/Carousel";

const Leadership = ({ heading, img, imageSize }) => {
  return (
    <div
      id='extracurricular'
      className='jumbotron jumbotron-fluid m-0'
      style={{ backgroundColor: "white" }}
    >
      <div className='container container-fluid'>
        <h2 className='display-4 pb-5 text-center'>{heading}</h2>
        <div className='row'>
          {/* <div className="col-md-5">
            <p className="lead">{message}</p>
          </div> */}
          <div className='col-md-5'>
            <p className='lead' style={{ fontSize: "1.05rem" }}>
              I am extremely grateful to have been given opportunities to lead
              my peers and make a positive impact on the NUS community. As an
              active member of College of Alice and Peter Tan (CAPT), I had a
              part in cultivating a culture of inclusivity, empathy and
              collaboration through leading committees and community bonding
              events. During my roles as the {""}
              <b>Project Director and Publicity Head</b> for voluntary
              mentorship programmes, I was able to plan, recruit and lead
              like-minded individuals keen to embark on their journey as a
              mentor. Prior to those positions, I led house initiatives that
              contributed to our strong house culture in my positions as {""}
              <b>House IC and part of House Committee.</b> <br /> <br />
              Outside of CAPT, I actively contribute to my faculty as a {""}
              <b>Computing Student Ambassador</b> and was a {""}
              <b>Designer for Students' Computing Club Marketing Committee</b>.
              Contributing to the Arts has always been important to me and as
              the {""}
              <b>Treasurer for NUS Funkstyles</b>, I managed the financing of
              all club events while picking up dance.
            </p>
          </div>
          <div className='col-md-7'>
            <Carousel>
              {img.map((value, index) => {
                return (
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src={value.img}
                      alt='First slide'
                      width={imageSize.width}
                      height={imageSize.height}
                    />
                    <Carousel.Caption>
                      <h3>{value.label}</h3>
                      <p>{value.paragraph}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
