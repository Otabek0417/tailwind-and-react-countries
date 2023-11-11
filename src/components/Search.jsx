import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
function Search({ setUrl }) {
  const inputValue = useRef();
  const refFunc = () => {
    const values = inputValue.current.value;
    const url = `https://restcountries.com/v3.1/name/${values}`;
    setUrl(url);
  };
  return (
    <div className="flex items-center justify-between w-full mt-[66px]">
      <div
        className="w-full
      "
      >
        <label className="relative">
          <input
            onChange={() => refFunc()}
            ref={inputValue}
            type="text"
            placeholder="Search for a country…"
            className="input input-bordered w-full max-w-[400px]"
          />
          <img
            className="absolute bottom-0 right-[15px]"
            src="../../public/search.svg"
            alt="serach"
          />
        </label>
      </div>
      <div className="dropdown w-full max-w-[200px]">
        <label tabIndex={0} className="btn m-1">
          Filter by Region
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-3 shadow bg-base-100 rounded-box w-[172px]"
        >
          <li>
            <Link>Africa</Link>
          </li>
          <li>
            <Link>America</Link>
          </li>
          <li>
            <Link>Asia</Link>
          </li>
          <li>
            <Link>Europe</Link>
          </li>
          <li>
            <Link>Oceania</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Search;
