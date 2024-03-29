import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [more, setMore] = useState(false);
  return (
    <nav className=" pt-2 pb-2 px-2 w-full z-5 bg-white bg-opacity-50">
      <div className="text-red-800 flex justify-between text-xl px-16 py-8">
        <p className="flex items-center text-3xl">
          <Link to="/" className="text-5xl font-bold font-sans">
            <strong>TVidio</strong>
          </Link>
        </p>
        <div className="container flex justify-end items-center">
          <ul className="flex justify-center align-center">
            <li>
              <Link to="/" className={"mx-5 hover:underline hover:text-white font-bold"}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/trendingTV" className="mx-2 hover:underline hover:text-white font-bold">
                Trending TV
              </Link>
            </li>
            <li>
              <Link to="/genre" className="mx-2 hover:underline hover:text-white font-bold">
                Genre
              </Link>
            </li>
            {more == false ? (
              <button
                onClick={() => {
                  setMore(true);
                }}
                className="mx-2 hover:underline hover:text-white font-bold"
              >
                More
              </button>
            ) : (
              <div>
                <li>
                  <Link to="/people" className="mx-2 py-2 hover:underline hover:text-white font-bold">
                    People
                  </Link>
                </li>
                <li>
                  <Link to="/onair" className="mx-2 py-2 hover:underline hover:text-white font-bold">
                    On Air TV
                  </Link>
                </li>
                <li>
                  <Link to="/discover" className="mx-2 py-2 hover:underline hover:text-white font-bold">
                    Discover TV
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
