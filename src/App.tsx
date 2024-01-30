import { projects, skills } from "./data";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/header";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full min-h-screen flex ">
        <div className="m-auto">
          <Loader className="w-20 h-20 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="w-full min-h-screen">
        <Header />
        <section id="projects" className="mt-32 space-y-10">
          <h2 className="text-center">Projects Built By Me</h2>
          <div className="bg-gradient-to-tr  from-[#8480F9] to-[#FB4FD3] py-20 md:px-5 xl:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-5">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full max-w-md h-64 group hover:opacity-80 relative hover:scale-105 hover:shadow-xl rounded-md hover:rounded-xl transition-all border-2 text-center"
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
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full group-hover:-translate-y-1/2 text-transparent  group-hover:text-white transition-all">
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

        <section id="skills" className="mt-32 space-y-10">
          <h2 className="text-center">What I Know</h2>
          <div className="bg-gradient-to-tr from-[#8480F9] to-[#FB4FD3] py-20 md:px-5 xl:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-full max-w-md relative overflow-hidden group bg-[url('./assets/sprinkle.svg')] bg-contain bg-center hover:scale-105 h-64 hover:shadow-xl rounded-xl hover:rounded-lg  transition-all border-2 flex flex-col md:flex-row items-center justify-start gap-x-10"
                >
                  <div className="mx-auto group-hover:hidden">
                    <img
                      src={skill.image}
                      alt={skill.imageAlt}
                      className="object-cover object-center"
                    />
                    <h3 className="text-lg md:text-3xl font-semibold text-transparent text- text-center">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="flex flex-col translate-y-full transition-all ease-in delay-200 group-hover:translate-y-0  items-center justify-center w-full h-full absolute left-0 right-0">
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-30"></div>
                    <div className="z-10">
                      <img
                        src={skill.image}
                        alt={skill.imageAlt}
                        className="object-cover object-center"
                      />
                      <h3 className="text-lg md:text-3xl font-semibold text-primary text- text-center">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;

//<a target="_blank" href="https://icons8.com/icon/108784/javascript">JavaScript</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

// Icons by Icons8
