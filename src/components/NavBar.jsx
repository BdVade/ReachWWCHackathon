/*global AlgoSigner*/

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
function NavBar({ connect }) {
  const [top, setTop] = useState(true);

  const userAccount = useRef();

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const connectAlgoSigner = async () => {
    let resp = await AlgoSigner.connect();
    console.log(resp);
    getUserAccount();
  };

  const getUserAccount = async () => {
    userAccount.current = await AlgoSigner.accounts({
      ledger: 'TestNet',
    });
    // console.log(userAccount.current[0]['address'])
    console.log(userAccount.current);
    console.log(userAccount);
    localStorage.setItem('acc', JSON.stringify(userAccount));
  };

  return (
    <header
      className={`fixed w-full z-30 tablet:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 tablet:h-28">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="flex text-c-white mr-5" aria-label="Cruip">
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
              <h3 className="text-lg font-bold ml-4">ReachCoin</h3>
            </Link>
          </div>
          <input
            className="rounded-xl py-2 px-4 border-0 bg-c-input mr-7 text-c-white"
            placeholder="Search Item Here"
          />
          <div className="flex text-lg lg:hidden">
            <Link
              to="/explore"
              className="block text-c-blue mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-opacity-70 mr-9"
            >
              Explore
            </Link>
            <Link
              to="/items"
              className="block text-c-blue mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-opacity-70 mr-9"
            >
              My Aution Items
            </Link>
            <Link
              to="/create"
              className="block text-c-blue mt-1 lg:inline-block lg:mt-0 text-teal-200 hover:text-opacity-70"
            >
              Auction
            </Link>
          </div>
          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center md:hidden">
              <li>
                <Link
                  to="/login"
                  className="bg-transparent font-medium text-c-blue hover:text-c-black hover:bg-c-blue border border-c-blue rounded-lg hover:border-transparent px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Get started
                </Link>
              </li>
              <li>
                <button
                  onClick={connectAlgoSigner}
                  className="btn-sm text-c-black bg-c-blue hover:bg-opacity-70 ml-3 px-5 py-3 flex items-center rounded-lg transition duration-150 ease-in-out"
                >
                  <span>Connect Wallet</span>
                  <svg
                    className="w-3 h-3 fill-current text-c-black flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
          <div className="ml-4 laptop:hidden">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="#fff"
              height="27"
              width="27"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'rgb(255, 255, 255)' }}
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
