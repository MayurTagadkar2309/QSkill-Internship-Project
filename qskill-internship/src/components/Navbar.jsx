import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-6">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
              isActive
                ? "bg-indigo-500/30 text-indigo-300 shadow-lg shadow-indigo-500/30"
                : "text-white hover:bg-indigo-500/20 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/translator"
          className={({ isActive }) =>
            `px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
              isActive
                ? "bg-indigo-500/30 text-indigo-300 shadow-lg shadow-indigo-500/30"
                : "text-white hover:bg-indigo-500/20 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1"
            }`
          }
        >
          Translator
        </NavLink>

        <NavLink
          to="/generator"
          className={({ isActive }) =>
            `px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
              isActive
                ? "bg-indigo-500/30 text-indigo-300 shadow-lg shadow-indigo-500/30"
                : "text-white hover:bg-indigo-500/20 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1"
            }`
          }
        >
          Generator
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;