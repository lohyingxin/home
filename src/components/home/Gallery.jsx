import React, { useState, useEffect, Profiler } from "react";
import { Link } from "react-router-dom";
import { gallery } from "../../editable-stuff/config";
import Card from "react-bootstrap/Card";
import styles from "./styling.css";

const Gallery = ({ heading }) => {
  return (
    <div id='gallery' className='jumbotron jumbotron-fluid m-0'>
      <div className='container container-fluid'>
        <div className='col d-lg-inline align-self-center'>
          <h1 className='display-4 pb-4 text-center'>{heading}</h1>
          <p className='lead'>
            As an{" "}
            <i>
              <b>art enthusiast</b>
            </i>
            , I have dabbled in many forms of art like{" "}
            <b>
              painting (Acrylic, Oil and Watercolour), embroidery, crochet, and
              graphic design.
            </b>{" "}
            Most recently, I have challenged myself to try out and study all the
            different paint brushes in Procreate, therefore have moved on to
            focus more on digital sketching and painting. All digital works you
            see here are thus created using different brushes and pens!{" "}
            <b>
              Hope you enjoy taking a look at my humble collection of practices
              and works~ ʕ•́ᴥ•̀ʔっ♡{" "}
            </b>
            <br />
            <i style={{ fontSize: "small" }}>
              <b>
                Disclaimer: Some works are referenced from images/artworks**
              </b>
            </i>{" "}
          </p>
          {/* <div class='card-deck'>
            <div class='Cell'>
              <p>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant='top'
                    src={require("../../assets/img/hands.png")}
                  />
                  <Card.Body>
                    <Card.Text>Flat Brush on Procreate</Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </div>
            <div class='Cell'>
              <p>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant='top'
                    src={require("../../assets/img/Crane.png")}
                  />
                  <Card.Body>
                    <Card.Text>Oil Paint Brush on Procreate</Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </div>
            <div class='Cell'>
              <p>
                <Card style={{ width: "25rem" }}>
                  <Card.Img
                    variant='top'
                    src={require("../../assets/img/Skeleton.png")}
                  />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </div>
            <div class='Cell'>
              <p>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant='top'
                    src={require("../../assets/img/Oil.png")}
                  />
                  <Card.Body>
                    <Card.Text>Oriental Brush on Procreate</Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </div>
            <div class='Cell'>
              <p>
                <Card style={{ width: "25rem" }}>
                  <Card.Img
                    variant='top'
                    src={require("../../assets/img/roc.png")}
                  />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </div>
            <div class='Cell'>
              <p>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant='top'
                    src={require("../../assets/img/Flower_Pencil.png")}
                  />
                  <Card.Body>
                    <Card.Text>Procreate Pencil on Procreate</Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </div>
            <div class='Cell'>
              <p>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant='top'
                    src={require("../../assets/img/Peonies.png")}
                  />
                  <Card.Body>
                    <Card.Text>Technical Pencil on Procreate</Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </div>
            <div class='Cell'>
              <p>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant='top'
                    src={require("../../assets/img/God.png")}
                  />
                  <Card.Body>
                    <Card.Text>Air Brush on Procreate</Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </div>
            <div class='Cell'>
              <p>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant='top'
                    src={require("../../assets/img/Camper.png")}
                  />
                  <Card.Body>
                    <Card.Text>Gouache Brush on Procreate</Card.Text>
                  </Card.Body>
                </Card>
              </p>
            </div>
          </div> */}
          <div class='row'>
            <div class='col-lg-4 col-md-12 mb-4 mb-lg-0'>
              <img
                src={require("../../assets/img/God.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/Oil.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/Peonies.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/roc.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/IMG_3763.jpg")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/roc2.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />
            </div>
            {/* //second col */}
            <div class='col-lg-4 mb-4 mb-lg-0'>
              <img
                src={require("../../assets/img/hands.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/IMG_3755.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/Skeleton.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/Camper.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/IMG_9192.JPG")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/IMG_9652.JPG")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />
            </div>
            {/* //third col */}
            <div class='col-lg-4 mb-4 mb-lg-0'>
              <img
                src={require("../../assets/img/Flower_Pencil.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />
              <img
                src={require("../../assets/img/IMG_9646.JPG")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />
              <img
                src={require("../../assets/img/Crane.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/IMG_3752.HEIC")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/Pythons.png")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />

              <img
                src={require("../../assets/img/IMG_9193.JPG")}
                class='w-100 shadow-1-strong rounded mb-4'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
