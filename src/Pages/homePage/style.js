import styled from "styled-components";

export const Main=styled.div`
padding-top:6rem;
text-align:center;
`
export const Head=styled.div`
font-weight:700;
font-size: 4.2vw;
color:#fff;
padding-top:2rem;
`
export const SHead=styled.div`
font-weight:500;
font-size: 1.2vw;
color:#fff;
padding-top:2rem;
`
export const Button=styled.button`
color:#fff;
background:#87c232;
font-size: 1.2vw;
border:none;
border-radius:.2rem;
padding:.2rem;
padding-left:1rem;
padding-right:1rem;
`
export const MidDiv=styled.div`
width:60%;
text-align: left;
 margin: auto;
 margin-bottom: 3rem;
  @media (max-width: '1200px') {
    width:95%;
  }


`
export const HSpan=styled.span`

`
export const MSpan=styled.span`

color:${props =>props.color};

font-family: "Montserrat", Sans-serif;
font-size: 2.5vw;
font-weight: bold;
line-height: 1.6em;
letter-spacing: 2px;
`

export const DisCuss=styled.div`
width:100%;
background: #1A1A22;
padding-bottom:5px;
padding-top:5px;`
export const ImgSpan=styled.span`
font-family: "Montserrat", Sans-serif;
font-size: 2.5vw;
font-weight: bold;
line-height: 1.6em;
letter-spacing: 2px;
`