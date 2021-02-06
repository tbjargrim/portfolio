import Back from './Back';
import github from './Images/github.png'
import linkedin from './Images/linkedin.jpg'
import email from './Images/email.png'

import styled from 'styled-components';

const StyledDiv = styled.div`
color:white;
position:absolute;
top:20%;
left:15%;
h1{
    font-size:100px;
    letter-spacing:3px;
    margin-bottom:80px;
}


`
const StyledSection = styled.section `
  display:flex;
   margin-top:25px;
h5{
    font-size: 25px;
    letter-spacing: 3px;
    line-height: 40px;
    margin-top:10px;
}
a{
    margin-left:25px;
  
    color:white;
    text-decoration: none;
}
section{
    width:50px;
    height:50px;
}
img {
    width:100%;
    height:auto;
}
`
function Contact() {

    return (
        <div>
            <Back />
            <StyledDiv>
                <h1>Get In Touch</h1>
            <StyledSection>
                <section><img src={email} alt="image of an envelope" /></section>
                    <h5><a href="mailto:t.bjargrim@gmail.com" target="_blank">t.bjargrim@gmail.com</a> </h5>
            </StyledSection>
            <StyledSection>
                <section><img src={github} alt="github logo" /></section>
                    <h5><a href="https://github.com/tbjargrim" target="_blank">View my github</a></h5>
            </StyledSection>
            <StyledSection>
                <section><img src={linkedin} alt="linkedins logo" /></section>
                    <h5><a href="http://www.linkedin.com/in/tbjargrim" target="_blank">LinkedIn</a></h5>
            </StyledSection>
            </StyledDiv>
           
        </div>
    )
}
export default Contact;