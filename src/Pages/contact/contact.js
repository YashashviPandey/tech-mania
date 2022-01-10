import { useState } from 'react'
import { Form, Para, FormDiv, Span, TopDiv, Img, Main, Input, Button, Col, Label, TextArea, InputLabel, SubHead, Head, JoinDiv, SubDiv } from './style'
const ContactPage = () => {
const [data,setData]=useState({name:"",email:"",company:"",phone:"",details:""})
   const handleChange=(e)=>{
setData((prev)=>{return{...prev,[e.target.name]:e.target.value}})
 console.log(data);  }
   return (<> <TopDiv> <Main>
      <SubHead>LET’S WORK TOGETHER</SubHead>
      <Head color="#fff">How can we help you out?</Head><br />
      <FormDiv ><Img src='f-logo.png' />
         <Form>
            <Col><InputLabel >     <Label for="html">Full Name (required)</Label><Input name="name" value={data.name} onChange={handleChange}/></InputLabel>
               <InputLabel >     <Label for="html">Company</Label><Input  name="company" value={data.company} onChange={handleChange}/></InputLabel>
            </Col><Col><InputLabel >     <Label for="html">Email (required)
            </Label><Input name="email" value={data.email} onChange={handleChange} /></InputLabel>
               <InputLabel >     <Label for="html">Phone
               </Label><Input name="phone" value={data.phone} onChange={handleChange} /></InputLabel></Col>
            <InputLabel > <Label for="html">Project Details (required)</Label><TextArea name="details" value={data.details} onChange={handleChange} /></InputLabel>
            <Button padding="5px">GET A QUATE</Button>   </Form></FormDiv>
   </Main>
      <JoinDiv>
         <SubDiv> <SubHead>DISCUSS WITH US</SubHead>
            <div style={{ display: "flex", justifyContent: "space-between" }}>   <Head color="#fff">GET A FREE QUOTE.</Head>  <Button>GET A QUATE</Button></div>
            <Span ></Span>
            <Para>Let’s be part of our journey and grow together. We’re looking for innovators and revolutionaries. Creatives who think outside-the-box. Professionals who eat, sleep, & breath gaming, design and animation.</Para>
         </SubDiv><br />
      </JoinDiv></TopDiv>

   </>)
}
export default ContactPage;