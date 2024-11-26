import React, { useState } from 'react';
import { TypeAnimation } from "react-type-animation";
import cvFile from "./image/cvardi.pdf";
import ardi from "./image/ardi.png";

import Sertif1 from "./image/sertif1.png";
import Sertif3 from "./image/sertif3.png";
import Sertif4 from "./image/sertif4.png";

import Foto1 from "./image/porto1.jpg";
import Foto2 from "./image/porto2.jpg";
import Foto3 from "./image/porto3.jpg";
import Foto4 from "./image/porto4.jpg";

import { teamMembers } from "./data";

const home = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Sertif1, Sertif3, Sertif4];
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
         {/* MENU UTAMA */}
      <section id="home-section" className="bg-white mt-20 lg:mt-1 xl:mt1">
        <div className="max-w-6xl px-6 pb-5 mx-auto">
          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-gray-800 -z-10 md:h-96 rounded-2xl"></div>

            <div className="w-full p-6 bg-gray-800 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              
              <img
  className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[30rem] lg:w-[25rem] md:rounded-2xl"
  src={ardi}
  alt="Client smiling and looking at the camera"
/>


              <div className="md:mx-6">
                <div>
                  <p className="text-2xl lg:text-3xl pb-1 font-medium tracking-tight text-white">
                    Nur Ardiansah
                  </p>

                  <p className="text-blue-200 text-xl font-semibold">
                    <TypeAnimation
                      sequence={[
                        "Lecture Manager and Academic",
                        500,
                        "Educational Laboratory Analyst",
                        500,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />{" "}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white md:text-md">
                An educational professional specializing in Lecture Management and Laboratory Analysis, skilled in organizing academic programs, optimizing educational methods, and enhancing student engagement. Known for strong analytical and leadership abilities in managing academic resources and improving learning outcomes
                </p>

                <div className="button block lg:flex pt-4">
                  <div className="button1">
                    <button className="px-6 py-3 lg:w-40 mt-3 w-full font-normal rounded-full bg-white hover:bg-slate-200 text-black bg-gradient-to-br from-sky-800 via-cyan-700 to-white-200">
                      <a
                        href="#portofolio-section"
                        className="no-underline text-white"
                      >
                        Portfolio
                      </a>
                    </button>
                  </div>

                  <div
                    class=" btn-4 font-normal w-full lg:w-40 lg:ml-5"
                    data-tooltip="Size: 747Kb"
                  >
                    <div class="button-wrapper">
                      <div class="text">Download CV</div>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="2em"
                          height="2em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <a
                      href={cvFile}
                      download="CV Nur Ardiansah.pdf"
                      className="download-link"
                    >
                      {" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <section id="about-section">
  <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
    <div className="w-full lg:w-1/2">
      <div className="lg:max-w-lg">
        <h1 className="text-3xl font-semibold tracking-wide text-gray-800">This is a bit of my <span className="text-slate-800 font-extrabold">Identity</span></h1>
        <p className="mt-4 text-gray-600">
        I am currently working at the Polytechnic of Energy and Minerals (PEM Akamigas) as an Educator Laboratory Analyst starting 27 February 2024.
        </p>
        <div className="grid gap-6 mt-8 sm:grid-cols-2">

          <div className="flex items-center text-gray-100">
            <span className="mx-3 w-full line-through">NIP:19861007 200604 1 001 </span>
          </div>

          <div className="flex items-center text-gray-800 -px-3">
            <span className="mx-3">Bojonegoro / 7 Oktober 1986</span>
          </div>

          <div className="flex items-center text-gray-800 -px-3">
            <span className="mx-3">Jabatan : Analis Laboratorium Pendidikan/27 Feb 2024</span>
          </div>

          <div className="flex items-center text-gray-800 -px-3">
            <span className="mx-3">Penata Muda Tingkat I / IIIb</span>
          </div>

          <div className="flex items-center text-gray-800 -px-3">
            <span className="mx-3">Instansi : Politeknik Energi dan Mineral (PEM Akamigas) </span>
          </div>

          <div className="flex items-center text-gray-800 -px-3">
            <span className="mx-3">Laboratorium Logistik Minyak dan Gas</span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
      <img
        className="object-cover w-full h-full max-w-2xl rounded-md"
        src="https://cdn.antaranews.com/cache/800x533/2022/01/18/WhatsApp-Image-2022-01-18-at-16.17.48.jpg"
        alt="glasses photo"
      />
    </div>
  </div>
      </section>


      <section id="education-section" className="relative pb-10 pt-16">
        {/* Section Content */}
        <div className="container px-6 pb-10 mx-auto">
          <h1 className="text-2xl font-bold text-center text- capitalize lg:text-3xl text-gray-900">
            Education
          </h1>

          <div className="grid grid-cols-1 gap-5 mt-3 xl:mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-100 flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-lg shadow-md hover:border-transparent group hover:bg-gray-600 "
              >
                <img
                  className="object-cover w-auto h-32"
                  src={member.image}
                  alt={member.name}
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                  {member.name}
                </h1>

                <a
                  href={member.url}
                  className="hover:underline mt-2 text-gray-500 capitalize group-hover:text-gray-300 text-center"
                >
                  {member.desc}
                </a>

                <a
                  href={member.url}
                  className="hover:underline mt-2 text-gray-500 capitalize group-hover:text-gray-300 text-center"
                >
                  {member.tahun}
                </a>

              </div>

            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATE */}
      <section id="sertif-section" className="bg-white pt-16">
  <h1 className="text-2xl font-bold text-center text-gray-950 capitalize lg:text-3xl">
    CERTIFICATE
  </h1>

  <p className="mt-3 text-center text-gray-500">
  Multiple certificates of competitions and bootcamps in Development Resources Oil Man and Gas
  </p>

 <div className="flex justify-center pb-5 pt-5 lg:pb-10 lg:pt-5">
      <div className="w-full max-w-2xl h-auto border border-red-500 shadow-lg rounded-lg overflow-hidden relative">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={images[currentSlide]}
            className="w-full h-full object-cover"
            alt={`Slide ${currentSlide + 1}`}
          />
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          ❯
        </button>
      </div>
    </div>
</section>
      
      

<section id="portofolio-section" className="bg-white">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-bold text-center text-gray-950 capitalize lg:text-3xl">
      Portofolio dan Penugasan
    </h1>

    <p className="mt-4 text-center text-gray-500">
      Several achievements and Special Assignments in the field of Lectures and Academics specializing in Petroleum and Natural Gas 
    </p>

    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
      <div
        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
        style={{
          backgroundImage: `url(${Foto1})`,
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">
            Pengelola Perkuliahan dan Akademik
          </h2>
          <p className="mb-3 text-white capitalize">Periode Jabatan : 2019 – 2024 (Januari)</p>
          <a
            href="https://akamigas.ac.id/"
            className="text-blue-400 hover:underline"
          >
            Politeknik Energi dan Mineral (PEM Akamigas)
          </a>
        </div>
      </div>

      <div
        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
        style={{
          backgroundImage: `url(${Foto2})`,
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">
            Analis Laboratorium Pendidikan
          </h2>
          <p className="mb-3 text-white capitalize">Periode Jabatan : 2024 - sekarang</p>
          <a
            href="https://akamigas.ac.id/"
            className="text-blue-400 hover:underline"
          >
            Politeknik Energi dan Mineral (PEM Akamigas)
          </a>
        </div>
      </div>

      <div
        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
        style={{
          backgroundImage: `url(${Foto3})`,
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">
            Petugas Pengambilan Contoh Minyak Bumi dan Gas Bumi di PT Pertamina EP Cepu
          </h2>
          <p className="mb-3 text-white capitalize">Periode Jabatan : 2024-09-01 - 2024-12-31</p>
          <a
            href="https://akamigas.ac.id/"
            className="text-blue-400 hover:underline"
          >
            Politeknik Energi dan Mineral (PEM Akamigas)
          </a>
        </div>
      </div>

      <div
        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
        style={{
          backgroundImage: `url(${Foto4})`,
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">
          Kelompok Kerja Pengembangan Karir 
          </h2>
          <p className="mb-3 text-white capitalize">Periode Jabatan : 2024-09-01 - 2024-12-31</p>
          <a
            href="https://akamigas.ac.id/"
            className="text-blue-400 hover:underline"
          >
            Politeknik Energi dan Mineral (PEM Akamigas) 
            </a>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default home