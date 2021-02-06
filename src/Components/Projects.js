import Back from './Back';
import styled from 'styled-components';

const Titleh1 = styled.h1`
    font-size: 100px;
    letter-spacing: 3px;
    margin-bottom: 60px;
    color:white;
    position:absolute;
    top:20%;
    left:15%;
`
const StyledDiv=styled.div `
position:absolute;
top:40%;
left:15%;
display:flex;
flex-direction:column;
color:white;
    `

const StyledSection=styled.section`
display:flex;

/* &:nth-child(2n){
flex-direction:row-reverse;
} */


`

const InnerSections = styled.section `

h5{
    font-size:30px;
    letter-spacing:1px;
}
`
const ImageSection = styled.section`
    width:600px;
    height:400px;

img{
    width:100%;
    height:auto;
}
`
function Projects() {

    return (
        <>
                  <Back />
            <Titleh1>Projects</Titleh1>
        <StyledDiv>        
            <StyledSection>
                    <InnerSections>
                        <h5>My very first website:</h5>
                        <p>Was created with HTML / CSS and some JAVASCRIPT</p>
                    </InnerSections>
                    <ImageSection>
                        <img src="https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                    </ImageSection>
            </StyledSection>

            <StyledSection>
                    <InnerSections>
                        <h5>My very first website:</h5>
                        <p>Was created with HTML / CSS and some JAVASCRIPT</p>
                    </InnerSections>
                    <ImageSection>
                        <img src="https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                    </ImageSection>
            </StyledSection>

            <StyledSection>
                    <InnerSections>
                        <h5>My very first website:</h5>
                        <p>Was created with HTML / CSS and some JAVASCRIPT</p>
                    </InnerSections>
                    <ImageSection>
                        <img src="https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                    </ImageSection>
                </StyledSection>

            <StyledSection>
                    <InnerSections>
                        <h5>My very first website:</h5>
                        <p>Was created with HTML / CSS and some JAVASCRIPT</p>
                    </InnerSections>
                    <ImageSection>
                        <img src="https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                    </ImageSection>
            </StyledSection>
                <StyledSection>
                    <InnerSections>
                        <h5>My very first website:</h5>
                        <p>Was created with HTML / CSS and some JAVASCRIPT</p>
                    </InnerSections>
                    <ImageSection>
                        <img src="https://images.unsplash.com/photo-1526572195979-0f8a7ea44489?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                    </ImageSection>
                </StyledSection>
        </StyledDiv>
        </>
    )
}
export default Projects;