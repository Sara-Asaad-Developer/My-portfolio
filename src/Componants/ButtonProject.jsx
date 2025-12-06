import { Link } from "react-router-dom";

export default function ButtonProject() {
    return (
        <div className="flex flex-row-reverse  pe-20">
            <Link to="/project" className=" w-[206px] h-[63px] bg-[#f93a4a]  text-white  font-bold flex justify-center items-center  
             rounded-[20px]  backdrop-blur transition  duration-300 
                 hover:bg-white  hover:text-[#f93a4a]  hover:scale-105 hover:shadow-lg">MY PROJECTS</Link>
        </div>
    )
}
