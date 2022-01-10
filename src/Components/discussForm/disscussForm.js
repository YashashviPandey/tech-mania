import { useState } from 'react'
import {Form,Main,Input,Button,Col,Label,TextArea,InputLabel,SubHead, Head} from './style'
const DiscussForm=()=>{
  const [data,setData]=useState({name:"",email:"",company:"",phone:"",details:""})
   const handleChange=(e)=>{
setData((prev)=>{return{...prev,[e.target.name]:e.target.value}})
 console.log(data);  }
    return( 
         <Main>
           <SubHead>DISCUSS WITH US</SubHead>
           <Head color="#fff">GET A FREE QUOTE.</Head><br/>
           <Form>
            <Col><InputLabel >     <Label for="html">Full Name (required)</Label><Input name="name" value={data.name} onChange={handleChange}/></InputLabel>
               <InputLabel >     <Label for="html">Company</Label><Input  name="company" value={data.company} onChange={handleChange}/></InputLabel>
            </Col><Col><InputLabel >     <Label for="html">Email (required)
            </Label><Input name="email" value={data.email} onChange={handleChange} /></InputLabel>
               <InputLabel >     <Label for="html">Phone
               </Label><Input name="phone" value={data.phone} onChange={handleChange} /></InputLabel></Col>
            <InputLabel > <Label for="html">Project Details (required)</Label><TextArea name="details" value={data.details} onChange={handleChange} /></InputLabel>
            <Button padding="5px">GET A QUATE</Button>   </Form>
         </Main>
        )
}
export default DiscussForm;