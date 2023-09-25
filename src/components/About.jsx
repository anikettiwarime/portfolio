import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-6 text-justify">
                    I'm a dedicated undergraduate student pursuing a B.Tech in Information Technology at the Government
                    College of Engineering in Karad, India. With a solid academic foundation and a passion for
                    technology, I've gained expertise in programming languages like C, C++, Java, Python, and
                    JavaScript. I've also worked with web development frameworks like React.js, Next.js, and Django.
                </p>
                <br/>
                <p className="text-xl mt-6 text-justify">
                    I actively contribute to open-source projects and enjoy exploring new technologies. Beyond tech, I
                    love playing cricket and am continuously expanding my skill set through internships and leadership
                    roles, such as my position as a web development lead at the Google Student Developer Club. I'm
                    excited to contribute to the ever-evolving field of technology.
                </p>
            </div>
        </div>
    );
};

export default About;