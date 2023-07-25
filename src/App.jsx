import { Route, Routes } from "react-router-dom";

// components
import Navbar from'./components/navbar'
import Footer from'./components/footer/footer'

// pages
import NotFound from'./pages/notfound/notfound'
import Construction from'./pages/construction/construction'

// import LandingZone from'./pages/landing/landingzone'
import Temp from './pages/landing/landingzone/temp'

import Landing from'./pages/landing/landing'
import Projects from'./pages/projects/projects'
import About from'./pages/about/about'
import Experience from'./pages/experience/experience'

// subpages
import Links from './pages/links/links'
import Adventures from './pages/adventures/adventures'


function App() {

  return (
    <div className="font-atkins ">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/experience" element={<Experience/>} />
        <Route exact path="/links" element={<Links/>} />
        <Route exact path="/adventures" element={<Adventures/>} />
        <Route exact path="/construction" element={<Construction/>} />

        <Route exact path="/jmm" element={<Temp/>} />


        {/* <Route exact path="/groups" element={<Groups server={s}/>} />
        <Route exact path="/explore" element={<Explore server={s}/>} /> */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
