import React from "react";
import Typewriter from 'typewriter-effect';
// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (    
    <>      
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            // "url(" + require("assets/img/pexels-s-migaj-747964.jpg").default + ")",
            "url(" + require("assets/img/b3.avif").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            
            <div className="title-brand">
              <h1 className="presentation-title">
                <Typewriter
                  onInit={(typewriter) => {
                    setTimeout( function() {
                      typewriter.typeString('Hello, World')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("I'm Aiden.")
                      .callFunction(() => {
                        // console.log('All strings were deleted');
                      })
                      .start();
                    },1000)
                    
                  }}
                />
              </h1>
              <h2>
                <Typewriter
                  onInit={(typewriter) => {                    
                    setTimeout(function() { 
                      typewriter.typeString('ML Forecast | RecSys | NLP | Backend')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('Welcome to my Life!')
                      .start();
                    }, 5000);
                    
                  }}
                />
                
              </h2>
            </div>
                        
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />        
      </div>
    </>
  );
}

export default IndexHeader;
