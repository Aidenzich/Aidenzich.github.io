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
            "url(" + require("assets/img/pexels-s-migaj-747964.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            
            <div className="title-brand">
              <h1 className="presentation-title">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Hello,World!')                      
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("I'm Aiden.")
                      .callFunction(() => {
                        console.log('All strings were deleted');
                      })
                      .start();
                  }}
                />
              </h1>
              <h2>
                <Typewriter
                  onInit={(typewriter) => {
                    setTimeout(function() { 
                      typewriter.typeString('Programmer | Art Designer | Trader')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('Welcome to my Life!')
                      .start();
                    }, 5000);
                    
                  }}
                />
                
              </h2>
            </div>
            
            {/* <h2 className="presentation-subtitle text-center">
              Programmer | Art Designer | Trader
            </h2> */}
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
