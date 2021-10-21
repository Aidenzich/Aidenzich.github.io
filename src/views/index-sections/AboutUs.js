import React from "react";
import Slider from "nouislider"
import { experiences } from "res/data/experience";
import { 
    Card, CardBody,
    CardFooter, CardTitle,    
    Container, Row, Col,
  } from "reactstrap";

function AboutUs(){
    return (
        <div className="section section-dark text-center">
            <Container>
            <h2 className="title">EXPERIENCE</h2>
            <Row>
                {experiences.map((item)=>{
                    return (
                        <Col md="3">
                            <Card className="card-profile card-plain">
                                <div className="card-avatar">                        
                                    <img
                                    alt="..."
                                    src={item.src}
                                    />
                                </div>
                                <CardBody>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <div className="author">
                                    <CardTitle tag="h4">{item.title}</CardTitle>
                                    <h6 className="card-category">{item.category}</h6>
                                    </div>
                                </a>
                                <p className="card-description text-center">
                                    {item.desp}
                                </p>
                                </CardBody>
                                <CardFooter className="text-center">
                                
                                </CardFooter>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
            </Container>
            </div>  
    );
}

export default AboutUs;