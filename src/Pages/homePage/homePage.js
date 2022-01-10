import { Container, Para } from "../../Components/commenTags/style"
import React, { Suspense,useEffect } from "react";
import Aos from "aos";
import DiscussForm from "../../Components/discussForm/disscussForm"
import {Main,Head,Button,MidDiv,HSpan,SHead,MSpan,ImgSpan,DisCuss} from "./style"
const HomePage=()=>{
    useEffect(() => {
        Aos.init({ duration: 5000 });
      }, []);
    return(<>
        
<Main> <Head >GROW YOUR STARTUP</Head>
<Para data-aos="fade-up" >We are the branding and animation agency for the world’s most exciting<br/>
and energetic startups, brands and content creators</Para>
<Button>HOW WE CAN HELP</Button>
<MidDiv><HSpan><SHead>OUR CLINTS</SHead>
<MSpan color="#9F9F9F">SOME FRIENDS WE<br/>
HAVE MADE WHILE<br/>
WORKING TOGETHER.</MSpan>
</HSpan></MidDiv>
<MidDiv data-aos="fade-up"><HSpan>
<MSpan color="#fff">LET'S MAKE<br/>
YOUR BRAND<br/>
A LASTING AND<br/>
MEMORABLE<br/>
IMPRESSION.</MSpan>
</HSpan></MidDiv>
<MidDiv><HSpan data-aos="fade-up"><SHead>OUR CLINTS</SHead>
<MSpan>SOME FRIENDS WE<br/>
HAVE MADE WHILE<br/>
WORKING TOGETHER.</MSpan>
</HSpan></MidDiv>
<DisCuss><DiscussForm/></DisCuss>
</Main>

</> )
}
export default HomePage