import { Route, Routes } from "react-router-dom";

// components
import Navbar from'./components/navbar'

// pages
import Landing from'./pages/landing'
import Projects from'./pages/projects'


function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/projects" element={<Projects/>} />
        {/* <Route exact path="/groups" element={<Groups server={s}/>} />
        <Route exact path="/explore" element={<Explore server={s}/>} /> */}
      </Routes>
    </div>
  )
}

export default App
