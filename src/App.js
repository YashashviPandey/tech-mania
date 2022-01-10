import React, { Suspense,useEffect } from "react";
// import Aos from "aos";
import { Routes, Route } from "react-router-dom";
import { LoopCircleLoading } from "react-loadingg";
const HomePage = React.lazy(() => import("./Pages/homePage/homePage"));
const Header = React.lazy(() => import("./Components/header/header"));
const WorkPage = React.lazy(() => import("./Pages/work/work"));
const ContactPage = React.lazy(() => import("./Pages/contact/contact"));
const Footer = React.lazy(() => import("./Components/footer/footer"));
const Capabities = React.lazy(() => import("./Pages/capabilities/capabilities"));
const BlogPage = React.lazy(() => import("./Pages/blog/blog"));
const BackgroundVideo = React.lazy(() => import("./Components/Background/Background"));
function App() {
  // useEffect(() => {
  //   Aos.init({ duration: 5000 });
  // }, []);
  return (
    <div >
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
      <Suspense fallback={<LoopCircleLoading />}>
        <section>
        <BackgroundVideo/>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/capabilities" element={<Capabities />}></Route>
            <Route exact path="/work" element={<WorkPage />}></Route>
            <Route exact path="/blog" element={<BlogPage />}></Route>
            <Route exact path="/contact" element={<ContactPage />}></Route>
          </Routes>
      
        </section>
        <Footer/>
      </Suspense>
      
    </div>
  );
}

export default App;
