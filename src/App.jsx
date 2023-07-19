import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Profile from './component/Profile';
import Logodesign from "./component/Logodesign";
import Experience from './component/Experience';
import Skills from "./component/Skills";
import Socialmedia from "./component/Socialmedia";
import Posterdesign from "./component/Posterdesign";
import Library from "./component/Library";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/logodesign" element={<Logodesign />} />
      <Route exact path="/posterdesign" element={<Posterdesign />} />
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
