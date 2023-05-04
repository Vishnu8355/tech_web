import React from 'react'
import Link from "next/link"

function Navar() {
  return (
   <>
    <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
  <div className="flex items-center justify-between mx-auto max-w-7xl">
    <a href="#">
      <img src="https://organicdeal.in/Images/Logo1.png" alt="logo" className='w-40'/>
    </a>
    <div className="flex items-center space-x-1">
      <ul className="hidden space-x-2 md:inline-flex">
        <li>
          <a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="inline-flex md:hidden">
        <button className="flex-none px-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
          <span className="sr-only">Open Menu</span>
        </button>
        {/* put list item */}
      </div>
    </div>
  </div>
</header>

   </>
  )
}

export default Navar
