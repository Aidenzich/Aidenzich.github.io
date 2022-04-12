
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionSkills() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <h2 className="title">Skills</h2>
          <Row>
            <Col>
              <h3 >Web Developer</h3>
            </Col>
            <Col>
              <h3 >ML Research</h3>
            </Col>
          </Row>
          <Row style={{alignItems: 'center',}}>
              <Col>
                
                <img
                    alt="..."
                    style={{width: '21vw'}}
                    src={
                      require("assets/img/web-dev.png").default
                    }
                  />
                <br />
              </Col>
              <Col >
                
                <img
                    style={{width: '21vw'}}
                    alt="..."                  
                    src={
                      require("assets/img/ml-research.png").default
                    }
                  />
                
              </Col>
              
              
            {/* <Col>
                <Button
                    className="btn-round"
                    color="danger"
                    outline
                    href=".#/markdown-page"
                  >
                    Demo Icons
                  </Button>  
            </Col> */}
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionSkills;
