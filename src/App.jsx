import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyProjects from "./Pages/MyProjects";
import Herosection from "./Pages/Herosection"
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="project" element={<MyProjects  /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
