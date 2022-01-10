import styled from "styled-components";

export const Main=styled.div`
display: grid;
text-align: left;
width: 60%;
margin:auto;

// @media (max-width: 1200px) {
//     width: 90%;
// }
`
export const TopDiv=styled.div`
background:black;
width:100%;`
export const SubHead=styled.div`
color:#50525E;
font-family: "Montserrat", Sans-serif;
font-size: 1vw;
font-weight: bold;
line-height: 1.6em;
letter-spacing: 2px;
float:left;
`
export const Head=styled.div`
color:${props =>props.color};
font-family: "Montserrat", Sans-serif;
font-size: 2.5vw;
font-weight: bold;
line-height: 1.6em;
letter-spacing: 2px;
float:left;
`
export const Form=styled.form`
width: -webkit-fill-available;
    margin: auto;`
export const Input=styled.input`
color: blanchedalmond;
background:#50525E;
border:none;
// width:50%;
`
export const Button=styled.button`
color:#fff;
background:#87c232;
font-size: 1.2vw;
border:none;
border-radius:.2rem;
padding:${props=>props.padding};
// padding-left:1rem;
// padding-right:1rem;
float:left;
margin:5px;
width: max-content;
`
export const Col=styled.div`
display: flex;`
export const Label=styled.label`
color:#fff;
float:left;
display: flex;
`
export const TextArea=styled.textarea`
color: blanchedalmond;
width:100%;
background:#50525E;
border:none;`;

export const InputLabel=styled.div`
display:flex;
width: -webkit-fill-available;
flex-flow:column;
margin:5px;`

export const JoinDiv=styled.div`
background-color: #1A1A22;
`
export const SubDiv=styled.div`
display: grid;
text-align: left;
width: 60%;
margin:auto;`
export const Para=styled.p`
text-align:left;
color:#9f9f9f;
font-weight:200;
font-size: 1.1vw;
`
export const FormDiv=styled.div`
display:flex;
`
export const Img=styled.img`
width:15vw;
`
export const Span=styled.div`
border:1px solid #50525E;
width:100%;
margin-top:3%;
margin-bottom:3%;
`