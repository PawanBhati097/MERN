import React, { useEffect, useState } from "react";

const NotFound = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--bg-color", "#050505");
      root.style.setProperty("--text-color", "#fff");
    } else {
      root.style.setProperty("--bg-color", "#fff");
      root.style.setProperty("--text-color", "#000");
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <>
      <main
        className={`min-h-screen flex transition-colors duration-300 ${
          theme === "dark" ? "bg-[#050505] text-white" : "bg-white text-black"
        }`}
        style={{ fontFamily: "'Fira Sans', sans-serif" }}
      >
        <div className="m-auto flex flex-col items-center gap-7.5 text-center px-4">
          {/* Animated Eyes */}
          <div className="flex justify-center gap-0.5">
            <div className="w-20 h-20 bg-[#faca2e] rounded-full grid place-items-center">
              <div className="w-7.5 h-7.5 bg-[#050505] rounded-full animate-[movePupil_2s_infinite_ease-in-out] origin-center" />
            </div>
            <div className="w-20 h-20 bg-[#faca2e] rounded-full grid place-items-center">
              <div className="w-7.5 h-7.5 bg-[#050505] rounded-full animate-[movePupil_2s_infinite_ease-in-out] origin-center" />
            </div>
          </div>

          {/* Heading + Description */}
          <div>
            <h2 className="capitalize text-3xl sm:text-4xl font-medium text-[#faca2e]">
              Looks like you're lost
            </h2>
            <p className="mt-2.5 text-2xl sm:text-3xl font-extralight">
              404 error
            </p>
          </div>

          {/* Back to Home Button */}
          <a
            href="/"
            aria-label="back to home"
            title="back to home"
            className="capitalize text-base sm:text-lg font-extralight px-6 py-3 sm:px-7.5 sm:py-3.75 rounded-2xl border border-[#faca2e] text-inherit no-underline shadow-[0px_7px_0px_-2px_#faca2e] transition-all duration-300 ease-in-out hover:bg-[#faca2e] hover:text-white hover:shadow-none"
          >
            back to home
          </a>
        </div>
      </main>

      {/* Theme Switcher */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="fixed top-10 right-10 bg-transparent border-0 cursor-pointer text-3xl text-[#faca2e]"
      >
        {theme === "dark" ? "\u2600" : "\u{1F319}"}
      </button>

      {/* Keyframes for Pupil Animation */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;500&display=swap");

        @keyframes movePupil {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-10px, -10px);
          }
          50% {
            transform: translate(10px, 10px);
          }
          75% {
            transform: translate(-10px, 10px);
          }
        }
      `}</style>
    </>
  );
};

export default NotFound;