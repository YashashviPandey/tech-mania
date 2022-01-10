import styled from "styled-components";

export const Main=styled.div`
width:100%;
display:flex;
justify-content: space-between;
background:black;
float: right;
text-align: end;
// position: fixed;
bottom:0;
padding:2rem;
padding-left:5rem;
padding-right:5rem;
// margin-top:5rem;

`

export const Col=styled.div`

color:#fff;
display: flex;
flex-flow: column;
`
export const Item=styled.span`
text-align:left;
font-size:.4rem;
color:#50525E;
margin-right:.55rem;
pointer:cursor;
:hover{
    color:#87c232;
}
`
export const Head=styled.span`
margin-bottom:1rem;
font-size:.6rem;
color:#fff;
text-align: left;
`
export const Input=styled.input`
background:#50525E;
color: blanchedalmond;
border:none;
height:1.2rem;
`

export const Button=styled.button`
border:none;
height:1.2rem;
background: #87c232;
color: #fff;
`
export const Span=styled.div`
border-top:1px solid #50525E;
width:100%;
padding-top:5px;
display:flex;
justify-content: space-between;
background:black;
`