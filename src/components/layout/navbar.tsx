import { useEffect, useRef, useState } from "react";
import { Home, Palette } from "lucide-react";

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

export function Navbar() {
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

  // useEffect(() => {}, [theme]);

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
    <nav className="fixed bg-transparent backdrop-blur-lg shadow-lg z-50 w-full pt-2 pb-5 px-1 md:px-5">
      <div className="w-full bg-primary px-3 flex h-16 rounded-full items-center">
        <div className="w-full h-10 flex justify-start items-center">
          <Home className="w-10 h-10 p-1 transition-all text-primary-foreground hover:bg-accent hover:rounded-lg cursor-pointer" />
        </div>
        <div className="flex items-center"></div>
        <ul className="flex items-center space-x-5">
          <li>
            <a href="#projects" className="hover:opacity-70">
              <h3 className="text-primary-foreground">Projects</h3>
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:opacity-70">
              <h3 className="text-primary-foreground">Skills</h3>
            </a>
          </li>
          <li>
            <a href="#projects" target="_main" className="hover:opacity-70">
              <h3 className="text-primary-foreground">Contact</h3>
            </a>
          </li>
          {/*  */}
          <li>
            <div onClick={handleDropdownVisible}>
              <Palette className="w-10 h-10 p-2 rounded-lg text-primary-foreground hover:bg-accent cursor-pointer" />
            </div>
            <div
              ref={menuRef}
              className={`absolute top-20 right-3 w-64 min-h-fit rounded-lg bg-white shadow-2xl z-10 px-3 pt-3 py-1 text-center ${
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
          </li>
        </ul>
      </div>
    </nav>
  );
}
