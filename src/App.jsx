import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from './component/About';
import Library from "./component/Library";
import Experience from './component/Experience';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/library" element={<Library />} />
      <Route exact path="/experience" element={<Experience />} />

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
