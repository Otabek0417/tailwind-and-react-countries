import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="navbar bg-base-100 w-full shadow-lg shadow-indigo-500/40">
      <div className="container flex justify-between items-center  ">
        <Link className="btn btn-ghost normal-case text-xl">
          Where in the world?
        </Link>
        <button>Click</button>
      </div>
    </header>
  );
}

export default Navbar;
