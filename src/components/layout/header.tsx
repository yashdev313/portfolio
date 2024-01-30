import { Linkedin, Mail, Github, Instagram, MoveRight } from "lucide-react";

import Avatar from "../../assets/avatar.jpg";
import { Navbar } from "./navbar";
import React from "react";

export function Header() {
  return (
    <>
      {/* navbar */}
      <header>
        <Navbar />
        <div className="w-screen  min-h-[90vh] h-[90vh] max-h-fit bg-background bg-[url('./assets/colored-shapes.svg')] bg-center bg-contain">
          {/*  */}
          <div className="relative pt-14 w-full h-full">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-40"></div>
            <div className="p-3 w-full h-full px-3 relative">
              <div className="h-full grid grid-cols-1 md:grid-cols-2 place-items-center">
                <div className="h-full space-y-3 flex flex-col  items-center lg:items-start justify-center relative">
                  <h1 className="text-3xl md:text-5xl text-primary-foreground font-bold">
                    Hii, I am Yashpal
                  </h1>
                  <p className="lg:text-lg text-accent  xl:text-xl">
                    I am a Software Engineer
                  </p>
                  <button className="px-4 py-3 rounded-lg text-primary-foreground bg-primary hover:opacity-90 hover:shadow-sm flex items-center gap-x-2 group">
                    <MoveRight className="w-5 aspect-square transition-all group-hover:w-14" />
                    <span>Contact Me</span>
                  </button>
                  <div className="flex justify-center absolute bottom-0 items-center gap-x-3">
                    <Linkedin className="w-10 h-10 p-2 transition-all text-accent hover:bg-accent hover:rounded-lg cursor-pointer" />
                    <Mail className="w-10 h-10 p-2 transition-all text-accent hover:bg-accent hover:rounded-lg cursor-pointer" />
                    <Github className="w-10 h-10 p-2 transition-all text-accent hover:bg-accent hover:rounded-lg cursor-pointer" />
                    <Instagram className="w-10 h-10 p-2 transition-all text-accent hover:bg-accent hover:rounded-lg cursor-pointer" />
                  </div>
                </div>
                <div className="">
                  {/* image will come here */}
                  <img
                    src={Avatar}
                    alt="avatar"
                    className="w-72 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
