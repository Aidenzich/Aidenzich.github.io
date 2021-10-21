
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
              {/* <Row>
                <Col>
                  <Button
                    className="btn-round"
                    color="danger"
                    outline
                    href=".#/nucleo-icons"                    
                  >
                    Demo Icons
                  </Button>  
                </Col>
                <Col>
                  <Button
                    className="btn-outline-neutral btn-round"
                    color="default"
                    href=".#/landing-page"                    
                  >
                    Landing Page
                  </Button>
                </Col>
                <Col>
                    <Button
                    className="btn-round"
                    outline
                    color="danger"
                    href=".#/profile-page"                                 
                  >
                    Profile Page
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="btn-outline-neutral btn-round"
                    color="default"
                    href=".#/register-page"
                  >
                    register-page
                  </Button>
                </Col>
              </Row>                                                           */}
            </Col>

            <Col>
              <Col style={{paddingLeft: 200, paddingRight: 10, marginTop:20, marginBottom:10}}>
                <Row>
                  <Col md="3" className="my-icon-col">
                  <img className="my-icon" alt="..." src={require("assets/img/icons/icons8-python-100.png").default} />
                  </Col>
                  <Col md="3">
                  <img className="my-icon" alt="..." src={require("assets/img/icons/icons8-php-logo-100.png").default} />
                  </Col>
                  <Col md="3">
                  <img className="my-icon" alt="..." src={require("assets/img/icons/icons8-javascript-100.png").default} />
                  </Col>
                </Row>
                <Row>
                  <Col md="3" className="my-icon-col">
                  <img className="my-icon" alt="..." src={require("assets/img/icons/icons8-laravel-100.png").default} />
                  </Col>
                  <Col md="3">
                  <img className="my-icon" alt="..." src={require("assets/img/icons/icons8-source-code-100.png").default} />
                  </Col>
                  <Col md="3">
                  <img className="my-icon" alt="..." src={require("assets/img/icons/icons8-react-native-100.png").default} />
                  </Col>
                </Row>
                <Row>
                  <Col md="3" className="my-icon-col">
                  <img className="my-icon" alt="..." src={require("assets/img/icons/icons8-c-plus-plus-100.png").default} />
                  </Col>
                  <Col md="3">
                  <img className="my-icon" alt="..." src={require("assets/img/icons/icons8-cs-100.png").default} />
                  </Col>
                  <Col md="3">
                  <img className="my-icon" alt="..." src={require("assets/img/icons/icons8-angularjs-100.png").default} />
                  </Col>
                </Row>
              </Col>              
            </Col>

          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionSkills;
