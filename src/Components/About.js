import Back from './Back';
import styled from 'styled-components';
const StyledDiv =styled.div`
color:white;
position:absolute;
top:20%;
left:15%;
h1{
    font-size:100px;
    letter-spacing:3px;
    margin-bottom:40px;
}
h5{
    font-size:30px;
    letter-spacing:3px;
    line-height:40px;
}
p{
    max-width:350px;
    margin-top:30px;
    line-height:30px;
    font-size:18px;
}
`
function About() {

    return (
        <>
        <Back />
        <StyledDiv>
            <h1>About</h1>
            <h5>Creative</h5>
            <h5>Passionate</h5>
            <h5>Focused</h5>
            <p>Currently I'm studing Front-End Development at KYH, Stockholm, 
            and my goal is to work with a variety of clients and on many diverse projects.</p>
        
        </StyledDiv>
        </>
    )
}
export default About;