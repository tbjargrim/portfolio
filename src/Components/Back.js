import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledLink =styled(Link) `
position:absolute;
top:5%;
right:5%;
color:white;
text-decoration:none;
letter-spacing:1px;
text-transform:uppercase;
font-weight: 800;
border-bottom:2px solid white; 
width:100%;
padding-bottom:5px;
text-align:right;
z-index:1;
&:hover{
    color:rgb(86, 77, 101);
   transition:all 0.3s ease-out;
}

`
function Back() {

    return(
        <StyledLink to = '/'>Back</StyledLink>
    )
}
export default Back;