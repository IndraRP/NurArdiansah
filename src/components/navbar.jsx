import React from "react";

const Navbar = () => {
  const NavItem = ({ icon, label, href }) => {
    return (
      <a
        href={href}
        className="flex flex-col items-center text-gray-950 hover:text-blue-600"
      >
        <i className={`bi ${icon} text-lg`}></i>
        <p className="text-xs">{label}</p>
      </a>
    );
  };

  return (
    <>
      {/* Navbar Atas (Mobile View) */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 shadow-md z-50 rounded-b-2xl">
        <div className="flex items-center justify-center py-3">
          <h1 className="text-md font-semibold text-gray-950 ">
            Nur Ardiansah Profile
          </h1>
        </div>
      </div>

      {/* Navbar Bawah (Mobile View) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full  shadow-lg bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 z-50 rounded-t-xl">
        <div className="flex items-center justify-around py-2">
          <NavItem icon="bi-houses" label="Home" href="/" />
          <NavItem icon="bi-person" label="About" href="#about-section" />
          <NavItem
            icon="bi-mortarboard"
            label="Education"
            href="#education-section"
          />
          <NavItem
            icon="bi-patch-check"
            label="Sertif"
            href="#sertif-section"
          />
          <NavItem
            icon="bi-file-earmark-person"
            label="Porto"
            href="#portofolio-section"
          />
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

// <div>
// <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-inner z-50 rounded-t-2xl">
//   <div className="flex items-center justify-around py-2 px-2">
//     <a
//       href="#home-section"
//       className="flex flex-col items-center text-gray-700 hover:text-blue-600"
//     >
//       <i className="bi bi-house-door w-6 h-6 text-xl"></i>
//       <span className="fs1 mt-1">Home</span>
//     </a>
//     <a
//       href="#about-section"
//       className="flex flex-col items-center text-gray-700 hover:text-blue-600"
//     >
//       <i className="bi bi-person w-6 h-6 fs2"></i>
//       <span className="fs1 mt-1">About</span>
//     </a>

//     <div>
//       <i className="bi bi-person w-6 h-6 fs2"></i>
//       <p className="fs1 mt-1" style={{ marginTop: "-3px" }}>
//         About
//       </p>
//     </div>
//     <a
//       href="#education-section"
//       className="flex flex-col items-center text-gray-700 hover:text-blue-600"
//     >
//       <i className="bi bi-mortarboard w-6 h-6 text-xl"></i>
//       <span className="fs1 mt-1">Education</span>
//     </a>
//     <a
//       href="#sertif-section"
//       className="flex flex-col items-center text-gray-700 hover:text-blue-600"
//     >
//       <i className="bi bi-award w-6 h-6 text-xl"></i>
//       <span className="fs1 mt-1">Certificate</span>
//     </a>
//     <a
//       href="#portofolio-section"
//       className="flex flex-col items-center text-gray-700 hover:text-blue-600"
//     >
//       <i className="bi bi-folder w-6 h-6 text-xl"></i>
//       <span className="fs1 mt-1">Portfolio</span>
//     </a>
//   </div>
// </div>
// </div>
