import React from "react";
import { experiences } from "res/data/experience";
import { 
    Card, CardBody,
    CardFooter, CardTitle,    
    Container, Row, Col,
} from "reactstrap";



function AboutUs(){
    let p_style = {color:'white', fontSize:'18px'}
    let p2_style = {fontSize:'16px'}
    return (
        <div className="section section-dark text-center">
            <Container>
                <div>
                    <h2 className="title">About</h2>
                    <p className="card-description text-center" style={p_style}>
                    I'm a student undertaking a master's degree in computer science, studying Recommendation System, Time-series Forecasting, and Vision-Language.
                        
                    Besides,  also a software engineer who has experience with cloud servers and various protocol (e.g. UDP, websocket, etc. ).
                    
                    I'm devoted to solving complex business problems through creatively leveraging solutions.
                    
                    </p>
                </div>            
            <h2 className="title">EXPERIENCE</h2>
            <Row>
                {experiences.map((item)=>{
                    return (
                        <Col>
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
                                <p className="card-description text-center" style={p2_style}>
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