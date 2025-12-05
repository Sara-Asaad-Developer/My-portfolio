import { BrowserRouter, Route, Routes } from "react-router-dom";
import Herosection from "./Pages/Herosection";
import MyProjects from "./Pages/MyProjects";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="project" element={<MyProjects /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
