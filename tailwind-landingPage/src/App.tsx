import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className="min-h-screen bg-teal-700 shadow-xl text-white dark:bg-slate-950  dark:text-white font-sans pb-10"
    >
      <div
        data-theme={darkMode ? "dark" : "light "}
        className="w-full bg-slate-950 dark:bg-gradient-to-b dark:from-teal-800 dark:to-teal-950 shadow-xl flex justify-between items-center py-3 px-4 md:py-4 md:px-6 lg:py-5 lg:px-8"
      >
        <button
          className="text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent drop-shadow-md cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ❯❯❯❯
        </button>

        {/* desktop nav */}
        <div className=" hidden  sm:flex md:text-2xl lg:text-3xl font-bold bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent flex items-center space-x-2 md:space-x-3 lg:space-x-6">
          <span className="hover:shadow-lg hover:bg-black/10 p-2 hover:rounded-3xl cursor-pointer">
            🏠︎
          </span>
          <span className="hover:shadow-lg hover:bg-black/10 p-2 hover:rounded-3xl cursor-pointer">
            ⫶☰
          </span>
          <span className="hover:shadow-lg hover:bg-black/10 p-2 hover:rounded-3xl cursor-pointer">
            ☎️
          </span>
          <button
            className="hover:shadow-lg hover:bg-black/10 p-2 hover:rounded-3xl cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {" "}
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/*mobile nav*/}
      {open && (
        <div
          data-theme={darkMode ? "dark" : "light"}
          className="md:text-2xl lg:text-3xl font-bold dark:bg-gradient-to-b from-teal-800 to-teal-950 bg-slate-950 shadow-xl backdrop-blur-md max-wd-md pb-1 flex items-center justify-center flex-col space-x-2 md:space-x-3 lg:space-x-6 text-2xl sm:hidden"
        >
          <span className="hover:shadow-lg hover:bg-black/20 p-2 hover:pl-100 hover:pr-100  hover:scale-110 cursor-pointer">
            🏠︎
          </span>
          <span className="hover:shadow-lg hover:bg-black/10 p-2 hover:pl-100 hover:pr-100  hover:scale-110 cursor-pointer">
            ⫶☰
          </span>
          <span className="hover:shadow-lg hover:bg-black/10 p-2 hover:pl-100 hover:pr-100  hover:scale-110 cursor-pointer">
            ☎️
          </span>
          <button
            className="hover:shadow-lg hover:bg-black/10 p-2 hover:pl-100 hover:pr-100  hover:scale-110 cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {" "}
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      )}

      <div
        data-theme={darkMode ? "dark" : "light"}
        className="text-center mt-12 mb-6 px-4"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold dark:bg-gradient-to-b from-white to-teal-400 bg-slate-950 bg-clip-text text-transparent tracking-tight cursor-pointer">
          Explore our core features
        </h1>
        <p className="dark:text-teal-300 text-slate-950 opacity-50 text-sm md:text-base mt-2 max-wd-md mx-auto cursor-pointer">
          Select any hub card below to instantly access dashboard tools,setting
          panels and communication logs.
        </p>
      </div>

      <div
        data-theme={darkMode ? "dark" : "light"}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-2 gap-3"
      >
        <div className=" flex justify-center items-center dark:bg-teal-700 p-4 rounded hover:scale-80 dark:hover:bg-teal-500 bg-slate-950 hover:bg-teal-900 transition-all cursor-pointer text-3xl shadow-md">
          🏛️
        </div>
        <div className=" flex justify-center items-center dark:bg-teal-700 p-4 rounded hover:scale-80 dark:hover:bg-teal-500 bg-slate-950 hover:bg-teal-900 transition-all cursor-pointer text-3xl shadow-md">
          🎧
        </div>
        <div className=" flex justify-center items-center dark:bg-teal-700 p-4 rounded hover:scale-80 dark:hover:bg-teal-500 bg-slate-950 hover:bg-teal-900 transition-all cursor-pointer text-3xl shadow-md">
          🕹️
        </div>
        <div className=" flex justify-center items-center dark:bg-teal-700 p-4 rounded hover:scale-80 dark:hover:bg-teal-500 bg-slate-950 hover:bg-teal-900 transition-all cursor-pointer text-3xl shadow-md">
          🛒
        </div>
        <div className=" flex justify-center items-center dark:bg-teal-700 p-4 rounded hover:scale-80 dark:hover:bg-teal-500 bg-slate-950 hover:bg-teal-900 transition-all cursor-pointer text-3xl shadow-md">
          🛠️
        </div>
        <div className=" flex justify-center items-center dark:bg-teal-700 p-4 rounded hover:scale-80 dark:hover:bg-teal-500 bg-slate-950 hover:bg-teal-900 transition-all cursor-pointer text-3xl shadow-md">
          📩
        </div>
      </div>
    </div>
  );
};

export default App;
