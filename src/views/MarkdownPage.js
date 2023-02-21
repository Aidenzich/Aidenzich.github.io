import {React, useState, useEffect} from "react";
import ReactMarkdown from "react-markdown";
import IndexNavbar  from "components/Navbars/IndexNavbar";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import remarkGfm from 'remark-gfm'
import testMd from "res/data/test.md"

function MarkdownPage(){
    const [MdText, setMdText] = useState({});

    document.documentElement.classList.remove("nav-open");
    useEffect(() => {
        fetch(testMd).then((response) => response.text()).then((text) => {
            setMdText( {terms: text }); 
        })
        // setMounted(true)
        document.body.classList.add("markdown-page");
        return function cleanup() {
            document.body.classList.remove("markdown-page");
        };
    });
    return (
        <>
            <IndexNavbar/>
            <div
                className="page-header"
                style={{
                    backgroundImage: "url(" + require("assets/img/bg/b1.jpg").default + ")"
                }} 
            >
            <div className="mdblock">
                <ReactMarkdown children={MdText.terms} rawSourcePos={true} remarkPlugins={remarkGfm}/>
            </div>
                
            </div>
            
        </>
    );
}

export default MarkdownPage;