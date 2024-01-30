import { projects, skills } from "./data";
import {
  Home,
  MoveRight,
  Linkedin,
  Mail,
  Github,
  Instagram,
  Palette,
} from "lucide-react";
//import "./App.css"
import "./App.css";
import { useEffect, useRef, useState } from "react";

const themes = [
  "light",
  "dark",
  "lavender",
  "purple",
  "red",
  "pink",
  "green",
  "seafoam",
];

import Avatar from "./assets/avatar.jpg";

function App() {
  const [theme, setTheme] = useState("light");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleThemeChange = (colorScheme: string) => {
    const htmlEl = document.getElementsByTagName("html")[0];
    htmlEl.setAttribute("data-theme", colorScheme);
    localStorage.setItem("theme", colorScheme);
    setTheme(colorScheme);
    setDropdownVisible(false);
  };

  const handleDropdownVisible = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const colorScheme = localStorage.getItem("theme") || "light";
    const htmlEl = document.getElementsByTagName("html")[0];
    htmlEl.setAttribute("data-theme", colorScheme);
  }, []);

  useEffect(() => {}, [theme]);

  useEffect(() => {
    const handler = (e: TouchEvent | MouseEvent) => {
      if (!menuRef.current) throw Error("divRef is not assigned");

      if (!menuRef.current.contains(e.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <main className="w-full min-h-screen">
        <section>
          <div className="w-full h-[70vh] bg-background py-3 px-3 bg-[url('./assets/colored-shapes.svg')] bg-center bg-cover">
            <div className="px-3 w-full h-14 bg-primary rounded-full flex justify-end items-center">
              <div className="w-full h-10 flex justify-start items-center">
                <Home className="w-10 h-10 p-1 transition-all text-primary-foreground hover:bg-accent hover:rounded-lg cursor-pointer" />
              </div>
              <div className="flex items-center space-x-5">
                <a href="#projects" className="hover:opacity-70">
                  <h3 className="text-primary-foreground">Projects</h3>
                </a>
                <a href="#skills" className="hover:opacity-70">
                  <h3 className="text-primary-foreground">Skills</h3>
                </a>
                <a href="#projects" target="_main" className="hover:opacity-70">
                  <h3 className="text-primary-foreground">Contact</h3>
                </a>
                {/*  */}
                <div className="relative">
                  <div onClick={handleDropdownVisible}>
                    <Palette className="w-10 h-10 p-2 rounded-lg text-primary-foreground hover:bg-accent cursor-pointer" />
                  </div>
                  <div
                    ref={menuRef}
                    className={`absolute top-14 right-0 w-64 min-h-fit rounded-lg bg-white shadow-2xl z-10 px-3 pt-3 py-1 text-center ${
                      !dropdownVisible ? "hidden" : ""
                    }`}
                  >
                    <label className="text-lg font-bold">Select Theme</label>
                    <hr className="my-2" />
                    <ul className="flex flex-col items-center justify-evenly gap-y-1">
                      {themes.map((colorScheme, index) => (
                        <li
                          key={index}
                          className={`w-full p-2 rounded-lg text-md font-semibold hover:opacity-70 ${
                            theme === colorScheme
                              ? "bg-primary text-gray-100"
                              : "bg-slate-100 text-gray-900"
                          }`}
                          onClick={() => handleThemeChange(colorScheme)}
                        >
                          {colorScheme.charAt(0).toUpperCase() +
                            colorScheme.substring(1)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center">
              <div className="order-2 md-order h-full space-y-3 flex flex-col items-start justify-center">
                <h1 className="text-lg md:text-3xl xl:text-5xl text-primary-foreground font-bold">
                  Hii, I am Yashpal
                </h1>
                <p className="lg:text-lg text-accent  xl:text-xl">
                  I am a Software Engineer
                </p>
                <button className="px-4 py-3 rounded-lg text-primary-foreground bg-primary hover:opacity-90 hover:shadow-sm flex items-center gap-x-2 group">
                  <MoveRight className="w-5 aspect-square transition-all group-hover:w-14" />
                  <span>Contact Me</span>
                </button>
                <div className="flex justify-start relative bottom-0 items-center gap-x-3">
                  <Linkedin className="w-10 h-10 p-2 transition-all text-accent hover:bg-accent hover:rounded-lg cursor-pointer" />
                  <Mail className="w-10 h-10 p-2 transition-all text-accent hover:bg-accent hover:rounded-lg cursor-pointer" />
                  <Github className="w-10 h-10 p-2 transition-all text-accent hover:bg-accent hover:rounded-lg cursor-pointer" />
                  <Instagram className="w-10 h-10 p-2 transition-all text-accent hover:bg-accent hover:rounded-lg cursor-pointer" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                {/* image will come here */}
                <img src={Avatar} alt="avatar" className="w-72 aspect-square" />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="my-10 px-3">
          <div className="space-y-5">
            <h2>Projects:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-5">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group hover:opacity-80 relative w-full h-64 hover:scale-110 hover:shadow-xl rounded-md hover:rounded-lg transition-all border-2 text-center"
                >
                  <div className="w-full h-full group-hover:blur-sm group-hover:shadow-black relative">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full rounded-md  object-cover object-center"
                    />
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 group-hover:opacity-80">
                      dsc
                    </div>
                  </div>
                  <div className="absolute left-5 bottom-0 group-hover:bottom-1/4  text-transparent  group-hover:text-white transition-all">
                    <h3 className="text-lg md:text-2xl font-semibold group-hover:blur-0 z-10">
                      {project.name}
                    </h3>
                    <p className="">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="my-10 px-3">
          <div className="space-y-5">
            <h2>Skills:</h2>
            <div className="card-wrapper grid grid-cols-4 gap-2 place-items-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative bg-[url('./assets/sprinkle.svg')] bg-contain bg-center card w-full aspect-square h-64 hover:h-80 hover:shadow-xl rounded-md hover:rounded-lg  transition-all border-2 flex flex-col md:flex-row items-center justify-start gap-x-10"
                >
                  <div>
                    <img
                      src={skill.image}
                      alt={skill.imageAlt}
                      className="w-full  h-full object-cover object-center"
                    />
                  </div>
                  <div className=" h-full absolute left-0 right-0 translate-y-1/2 ">
                    <h3 className="text-lg md:text-3xl font-semibold text-gray-100 text- text-center">
                      {skill.name}
                    </h3>
                    {/* <p>{skill.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

//<a target="_blank" href="https://icons8.com/icon/108784/javascript">JavaScript</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

// Icons by Icons8
