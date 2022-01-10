import styled from "styled-components";

export const Main=styled.div`
width:100%;
// height:2rem;
background:black;
float: right;
text-align: end;

`

export const Div=styled.div`
margin-left:5rem;
margin-right:2rem;
display: ${props => props.display}
flex-flow: row-reverse !important;

`