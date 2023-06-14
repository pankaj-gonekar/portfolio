import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Profile from './component/Profile';
import Library from "./component/Library";
import Experience from './component/Experience';
import Skills from "./component/Skills";
import Socialmedia from "./component/Socialmedia";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/library" element={<Library />} />
      <Route exact path="/experience" element={<Experience />} />
      <Route exact path="/skills" element={<Skills />} />
      <Route exact path="/socialmedia" element={<Socialmedia />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
