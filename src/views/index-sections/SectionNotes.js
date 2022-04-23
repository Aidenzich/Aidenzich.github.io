import React from "react";
import { Container, Row, Col } from "reactstrap";

function SectionNotes() {
    return (
    <>        
            <Container>
                <div className="title">
                    <h3>Notes</h3>
                </div>
                <Row>
                    <Col md="3" sm="6">
                        {/* <a href="https://hackmd.io/_A1SJ_21TOuKMUmv3GCmMg">
                            <img
                            alt="..."
                            className="img-rounded img-responsive notes"
                            src={require("assets/img/1-7.jpeg").default}
                            />
                        </a> */}
                                              
                        <div className="img-details">
                        <div className="icon">
                            <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={
                                require("assets/img/icons/d_cs.png").default
                            }
                            />
                        </div>
                        <h4 className="images-title ">Latex Note Testing</h4>                        
                        </div>
                    </Col>
                </Row>                                
            </Container>        
    </>);
}

export default SectionNotes;