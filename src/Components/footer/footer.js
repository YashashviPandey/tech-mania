
import { useState } from "react"
import {Main,Col,Item,Head,Input,Button,Span} from "./style"
const HomePage=()=>{

    const [email,setEmail]=useState('')
    const handleChange=(e)=>{
        setEmail(e.target.value)
        console.log(email);
    }
    return(<>
<Main>
<Col >
<Head style={{float:"left",color:"#87c232",fontWeight:"bold"}}>TECH Mania</Head>
<Item>Build a memorable brand with design and animation</Item>
<br/>
<Item>Follow us on social media to stay on top of news</Item>


</Col>
<Col >

<Head>Company</Head>
<Item>Capabilities</Item>
<Item>Work</Item>
<Item>Blog</Item>
<Item>Join Us</Item>
<Item>About</Item>
<Item>Brand Kit</Item>
</Col>
<Col >
<Head>Resources</Head>
<Item>Free Stuff</Item>
<Item>Privacy Policy</Item>
</Col>
<Col >
<Head>Resources</Head>
<Item>yashashvipandey7857@gmail.com</Item>
<Item>Project inquiries</Item>
<Item>er.yashashvi@gmail.com</Item>
<Item>Phone</Item>

</Col>
<Col >
<Head>Stay in touch</Head>
<Item><Input name="email" value={email} onChange={handleChange}></Input><Button>Subscribe</Button></Item>

</Col>

</Main>  
<Main>
<Span >
<Item >© 2021 Tech Mania (OPC) Pvt. Ltd.</Item><Item>All rights reserved</Item>
</Span>
</Main></>
)
}
export default HomePage