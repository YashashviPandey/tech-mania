import { Link } from "react-router-dom"
import { Button, Container, Span } from "../../Components/commenTags/style"
import {Main,Div} from "./style"
const HomePage=()=>{
    return(
<Main>
<Div  display="flex">
<Link to="/"><Span style={{float:"left",color:"#87c232",fontWeight:"bold"}}>TECH Mania</Span></Link>
<Link to="/capabilities"><Button  >CAPABILITIES</Button></Link>
<Link to="/work"><Button >WORK</Button></Link>
<Link to="/blog"><Button >BLOG</Button></Link>
<Link to="/contact"><Button >CONTACT</Button></Link>
</Div>
</Main>
)
}
export default HomePage