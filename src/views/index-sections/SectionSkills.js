
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionSkills() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Skills</h2>
              <br />
              <p className="description">
                wip, Like many innovative game-changers, Jobs wasn't looking to replicate what's already been done. He had a totally different mindset from the others. He found what the customer needed before they asked for it.
              </p>
              <br />
            </Col>
            <Col className="ml-auto mr-auto" >
              <img style={{margin: "45px"}} className="my-icon-all-in-one"  alt="..." src={require("assets/img/icons/all-in-1.png").default} />              
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionSkills;
