import React, { useState } from 'react';
import test from './Images/test.jpg'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HomeDiv=styled.div`
    background-color:black;
    height: 100vh;
    width:100%;
`
const StyledDiv = styled.div`
    position:absolute;
    left:15%;
    top:40%;
    line-height:80px;
    z-index:1;
    h3 {
    color:white;
    text-transform:uppercase;
    letter-spacing:2px;
    font-size:60px;
    transform:360deg;
    transform-origin:left;
    background:transparent;
    }
`
const StyledLink =styled(Link) `
text-decoration:none;
color:rgb(62, 137, 137);
font-size:70px;
   background:transparent;
&:hover {
   color:rgb(86, 77, 101);
   transition:all 0.3s ease-out;
      background:transparent;
}

`
const ImageSection = styled.section`
    position:absolute;
    right:1%;
    bottom:0;
    width:1000px;
    height:800px;
img {
    width:100%;
    height:auto;
}
`
function Home() {
    let startText= ' Therese';
    let projectLink = ' Front-End Developer ';
    let contactLink = ' get in touch';
    const [text,setText] = useState(startText);
    const [projectText, setProjectText] =useState(projectLink);
    const [contactText, setContactText] = useState(contactLink);


    return (
        <HomeDiv>
        <StyledDiv>          
            <h3> Hi, I´m 
            <StyledLink to='/about'
                onMouseOver={() => setText(' About')}
                onMouseLeave={() => setText(startText)}>
                    {text}
            </StyledLink>
            </h3>
            <h3>
                an upcoming 
            </h3>
            <h3>
            <StyledLink to='/projects'
                    onMouseOver={() => setProjectText(' Projects ')}
                    onMouseLeave={() => setProjectText(projectLink)}>
                    {projectText}
                </StyledLink>
            </h3>
            <h3>
                Let´s
            <StyledLink to='/contact'
                    onMouseOver={() => setContactText(' contact')}
                    onMouseLeave={() => setContactText(contactLink)}>
                    {contactText}
                </StyledLink>
            </h3>
        </StyledDiv>
            <ImageSection>
                <img src={test} alt="Image of Therese" />
            </ImageSection>
        </HomeDiv>
    )
}
export default Home;
