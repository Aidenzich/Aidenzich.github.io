
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import 'react-medium-image-zoom/dist/styles.css'

import Zoom from 'react-medium-image-zoom'
// core components

function SectionSkills() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <h2 className="title">Skills</h2>
          <Row>
            <Col>
              <h3 >Software Engineer</h3>
            </Col>
            <Col>
              <h3 >ML Research</h3>
            </Col>
          </Row>
          <Row style={{alignItems: 'center',}}>
              <Col>
                <Zoom 
                   overlayBgColorEnd="rgba(0, 0, 0, 0.75)"
                   overlayBgColorStart="rgba(0, 0, 0, 0)"
                >
                  <img
                    alt="..."
                    style={{width: '21vw'}}
                    src={
                      require("assets/img/tree/dev.png").default
                    }
                  />
                </Zoom>
                
                <br />
              </Col>
              <Col >
                <Zoom
                  overlayBgColorEnd="rgba(0, 0, 0, 0.75)"
                  overlayBgColorStart="rgba(0, 0, 0, 0)"
                  >
                  <img
                    style={{width: '21vw'}}
                    alt="..."                  
                    src={
                      require("assets/img/tree/ml.png").default
                    }
                  />
                </Zoom>                                
              </Col>              
          </Row>
          <h2 className="title">Problem Solving</h2>
          <Row>
            <Col><h3>How do I face challenging situations?</h3></Col>
          </Row>
          <Row style={{textAlign: "center"}}>
            <Col>
              <Zoom
                overlayBgColorEnd="rgba(0, 0, 0, 0.75)"
                overlayBgColorStart="rgba(0, 0, 0, 0)"              
              >
              <img                
                style={{width: '100%'}}
                alt="..."                  
                src={
                  require("assets/img/tree/solve_problem_sop.png").default
                }
              />
              </Zoom>
            </Col>            
          </Row>
        </Container>
        
      </div>{" "}
    </>
  );
}

export default SectionSkills;
