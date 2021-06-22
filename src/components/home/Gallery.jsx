import React, { useState, useEffect, Profiler } from "react";
import { Link } from "react-router-dom";
import { gallery } from "../../editable-stuff/config";
import Card from "react-bootstrap/Card";

const Gallery = ({ heading }) => {
  return (
    <div id='gallery' className='jumbotron jumbotron-fluid m-0'>
      <div className='container container-fluid'>
        <div className='col d-lg-inline align-self-center'>
          <h1 className='display-4 pb-4 text-center'>{heading}</h1>
          <div class='card-deck'>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
