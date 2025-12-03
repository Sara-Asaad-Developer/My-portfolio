import AboutMe from "../Componants/AboutMe";
import Navbar from "../Componants/Navbar";

export default function Herosection() {
    return (
        <div className="  flex flex-col justify-center items-center bg-[#190c3a] ">
            <div className=" container   flex flex-col justify-center gap-15 ">
            
            <Navbar />
            <AboutMe />
          
            </div>
        </div>
    )
}
