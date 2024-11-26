import React from 'react';
import { FaHome, FaUser, FaGraduationCap, FaCertificate, FaFolderOpen } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      {/* Navbar Atas (Mobile View) */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex items-center justify-center py-3">
          <h1 className="text-lg font-semibold text-gray-800">
            Nur Ardiansah Profile
          </h1>
        </div>
      </div>

      {/* Navbar Bawah (Mobile View) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex items-center justify-around py-2">
          <a
            href="#home-section"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            <FaHome className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </a>
          <a
            href="#about-section"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            <FaUser className="w-6 h-6" />
            <span className="text-xs">About</span>
          </a>
          <a
            href="#education-section"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            <FaGraduationCap className="w-6 h-6" />
            <span className="text-xs">Education</span>
          </a>
          <a
            href="#sertif-section"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            <FaCertificate className="w-6 h-6" />
            <span className="text-xs">Certificate</span>
          </a>
          <a
            href="#portofolio-section"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600"
          >
            <FaFolderOpen className="w-6 h-6" />
            <span className="text-xs">Portfolio</span>
          </a>
        </div>
      </div>

      {/* Navbar Utama (Desktop View) */}
      <div className="hidden lg:block bg-white shadow sticky top-0 z-50">
        <div className="container px-16 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <a href="#home-section" className="mx-auto font-extrabold text-lg">
              <h1 className="text-gray-900">Nur Ardiansah</h1>
            </a>
            <div className="flex items-center space-x-6">
              <a
                href="#home-section"
                className="text-gray-700 capitalize hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#about-section"
                className="text-gray-700 capitalize hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#education-section"
                className="text-gray-700 capitalize hover:text-blue-600"
              >
                Education
              </a>
              <a
                href="#sertif-section"
                className="text-gray-700 capitalize hover:text-blue-600"
              >
                Certificate
              </a>
              <a
                href="#portofolio-section"
                className="text-gray-700 capitalize hover:text-blue-600"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
