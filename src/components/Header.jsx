import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-black text-white py-4 shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold tracking-wide">devorg</h1>

        <nav className="flex gap-6 text-sm font-medium">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-gray-700" : "" + " hover:opacity-70 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-gray-700" : "" + " hover:opacity-70 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            prefetch="intent"
            to={"/github"}
            className={({ isActive }) =>
              isActive ? "text-gray-700" : "" + " hover:opacity-70 transition"
            }
          >
            Github
          </NavLink>

          <NavLink
            to={"/user/1"}
            className={({ isActive }) =>
              isActive ? "text-gray-700" : "" + " hover:opacity-70 transition"
            }
          >
            User
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
