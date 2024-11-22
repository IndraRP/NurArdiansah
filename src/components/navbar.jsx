import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container px-16 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#home-section" className="mx-auto font-extrabold text-lg">
              <h1 className='text-gray-900'>Nur Ardiansah</h1>
            </a>
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 ${
              isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className="-mx-4 lg:flex lg:items-center">
              <a
                href="#home-section"
                className="block mx-4 text-gray-700 capitalize hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#about-section"
                className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#education-section"
                className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 hover:text-blue-600"
              >
                Education
              </a>
              <a
                href="#sertif-section"
                className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 hover:text-blue-600"
              >
                Certificate
              </a>
              <a
                href="#portofolio-section"
                className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 hover:text-blue-600"
              >
                Portofolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
