import myVideo from "../assets/Masary Go - Google Chrome 2025-09-29 19-26-33.mp4";
import my2Video from "../assets/insta-eract - Google Chrome 2025-11-20 13-37-35.mp4";

export default function AboutMe() {
    
    return (
            <div className=" flex flex-col justify-center items-center bg-[#190c3a]">
            <h1 className=" font-Sara  text-4xl text-white animate__animated animate__backInUp animate__slow ">About Me</h1>
            <p className=" font-Sara  p-15  ">I’m a Front-End Developer with  of hands-on experience building responsive and user-friendly interfaces using HTML, CSS, JavaScript, Bootstrap, Tailwind, and React.
                I focus on writing clean, organized code and creating smooth, modern user experiences.

                I’m currently working with Strapi and learning more about integrating APIs and headless CMS tools to build dynamic and scalable applications.
                I also use GitHub for version control and Vercel for deploying my front-end projects efficiently.

                I’m passionate about continuous learning, improving my workflow, and building real products that solve problems and deliver a great user experience</p>
            <div className=" grid grid-cols-2  p-10">
            <video 
                src={myVideo}
                autoPlay
                loop
                muted
                controls
                    className="  p-5 object-cover rounded-[8%] animate__animated animate__fadeInLeft animate__slow"
            />
            <video
                src={my2Video}
                autoPlay
                loop
                muted
                controls
                    className=" p-5 object-cover rounded animate__animated animate__fadeInRight animate__slow"
            />
</div>
            </div>
)
}
