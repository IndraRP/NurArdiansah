import React, { useState, useCallback, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import cvFile from "./image/cvardi1.pdf";
import ardi from "./image/ardi.png";

("use client");
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Sertif1 from "./image/sertif1.pdf";
import Sertif3 from "./image/sertif3.pdf";
import Sertif4 from "./image/sertif4.pdf";
import Sertif5 from "./image/sertif5.pdf";
import Sertif6 from "./image/sertif6.pdf";
import Sertif7 from "./image/sertif7.pdf";
import Sertif8 from "./image/sertif8.pdf";
import Sertif9 from "./image/sertif9.pdf";

import Foto1 from "./image/porto1.jpg";
import Foto2 from "./image/porto2.jpg";
import Foto3 from "./image/porto3.jpg";
import Foto4 from "./image/porto4.jpg";

import videoProfile from "./image/video_profile.mp4";
import { useMediaQuery } from "react-responsive";

import { teamMembers } from "./data";

import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    Sertif1,
    Sertif3,
    Sertif4,
    Sertif5,
    Sertif6,
    Sertif7,
    Sertif8,
    Sertif9,
  ];
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
  ]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const [width, setWidth] = useState(300);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth >= 768 ? 500 : 300);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div>
      {/* MENU UTAMA */}
      <section id="home-section" className="bg-white mt-16 lg:mt-1 xl:mt1">
        <div className="max-w-7xl px-6 pb-5 mx-auto">
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
                    Educational Laboratory Analyst
                  </p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white md:text-md">
                  Profesional sistem industri dan manajemen logistik/ rantai
                  pasok dengan penempatan di Laboratorium Logistik Migas.
                  Menguasai aktivitas SCM oil & gas. Mampu memetakan SCM BBM
                  end-to-end, serta SCM natural gas. Mengaplikasikan statistika
                  industri untuk analisis demand, lead time, reliabilitas
                  suplai, dan KPI layanan; serta riset operasi dan pemodelan
                  sistem untuk optimasi alokasi suplai, kapasitas, rute, dan
                  penjadwalan distribusi. Mengelola logistik material migas
                  (suku cadang/ MRO) melalui perencanaan kebutuhan, pengadaan,
                  pergudangan, pengendalian persediaan, dan distribusi ke titik
                  operasi. Memperkuat ketahanan rantai pasok melalui enterprise
                  risk management dan kajian risiko BBM petrodiesel–biodiesel.
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

      <section
        id="about-section"
        className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 px-5 py-10 md:p-10 lg:p-16 lg:mt-10 mt-0 text-white"
      >
        <div className="text-center pb-5 mb-5">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
            Who is{" "}
            <span className="text-blue-800 font-extrabold">
              Nur Ardiansah??
            </span>
          </h1>
          <p className="mt-3 text-sm md:text-base">
            I am currently working at the Polytechnic of Energy and Minerals
            (PEM Akamigas) as an Educator Laboratory Analyst starting 27
            February 2024.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bagian Informasi */}
          <div className="w-full space-y-4">
            {[
              {
                label: "NIP",
                value: "19861007 200604 1 001",
              },
              {
                label: "Tempat/Tanggal Lahir",
                value: "Bojonegoro / 7 Oktober 1986",
              },
              {
                label: "Jabatan",
                value: "Analis Laboratorium Pendidikan/27 Feb 2024",
              },
              {
                label: "Pangkat/Golongan",
                value: "Penata Muda Tingkat I / IIIb",
              },
              {
                label: "Nama Instansi",
                value: "Politeknik Energi dan Mineral (PEM Akamigas)",
              },
              {
                label: "Nama Laboratorium",
                value: "Laboratorium Logistik Minyak dan Gas",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center rounded-md p-4 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 transition-all duration-300 hover:from-gray-900 hover:via-blue-800 hover:to-blue-400 hover:text-lg"
              >
                {/* Label: Disembunyikan di HP (hanya muncul di sm dan lebih besar) */}
                <p className="hidden sm:block transition-all duration-300 text-sm md:text-base">
                  {item.label}
                </p>
                {/* Value: Tampil penuh di HP & di kanan jika layar besar */}
                <p className="text-sm md:text-base text-center sm:ms-0 lg:text-end lg:ms-auto  sm:text-left w-full sm:w-auto">
                  {item.strike ? (
                    <span className="line-through">{item.value}</span>
                  ) : (
                    item.value
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Bagian Gambar */}
          <div className="flex justify-center items-center w-full">
            <video
              className="object-cover w-full max-w-sm md:max-w-md lg:max-w-xl h-auto lg:h-[412px] rounded-md"
              src={videoProfile}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>

      <section id="education-section" className="relative pb-10 pt-12">
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

      <section id="sertif-section" className="pt-10 bg-white text-dark">
        <h1 className="text-2xl font-bold text-center capitalize lg:text-3xl">
          CERTIFICATE
        </h1>

        <p className="mt-3 mx-2 lg:mx-0 text-center text-gray-500">
          Multiple certificates of competitions and bootcamps in Development
          Resources Oil Man and Gas
        </p>

        <div className="flex justify-center pb-5 pt-5 lg:pb-10 lg:pt-5">
          <div className="w-full max-w-2xl h-auto rounded-lg overflow-hidden relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {images.map((pdf, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] flex justify-center items-center"
                  >
                    <Document file={pdf}>
                      <Page
                        pageNumber={1}
                        width={width}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-none text-black hover:scale-125 transition-all"
            >
              ❮
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-none text-black hover:scale-125 transition-all"
            >
              ❯
            </button>
          </div>
        </div>
      </section>

      <section id="portofolio-section" className="bg-white">
        <div className="container px-4 sm:px-6 py-8 sm:py-10 mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-950 capitalize lg:text-3xl">
            Portofolio dan Penugasan
          </h1>

          <p className="mt-3 sm:mt-4 text-center text-gray-500 text-sm sm:text-base px-2">
            Several achievements and Special Assignments in the field of
            Lectures and Academics specializing in Petroleum and Natural Gas
          </p>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 mt-6 sm:mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
            <div
              className="overflow-hidden bg-cover bg-center bg-no-repeat rounded-lg cursor-pointer h-64 sm:h-80 md:h-96 group"
              style={{
                backgroundImage: `url(${Foto1})`,
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-4 sm:px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-2 sm:mt-4 text-lg sm:text-xl font-semibold text-white capitalize">
                  Pengelola Perkuliahan dan Akademik
                </h2>
                <p className="mb-2 sm:mb-3 text-white text-sm sm:text-base capitalize">
                  Periode Jabatan : 2019 – 2024 (Januari)
                </p>
                <a
                  href="https://akamigas.ac.id/"
                  className="text-blue-400 text-sm sm:text-base hover:underline"
                >
                  Politeknik Energi dan Mineral (PEM Akamigas)
                </a>
              </div>
            </div>

            <div
              className="overflow-hidden bg-cover bg-center bg-no-repeat rounded-lg cursor-pointer h-64 sm:h-80 md:h-96 group"
              style={{
                backgroundImage: `url(${Foto2})`,
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-4 sm:px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-2 sm:mt-4 text-lg sm:text-xl font-semibold text-white capitalize">
                  Analis Laboratorium Pendidikan
                </h2>
                <p className="mb-2 sm:mb-3 text-white text-sm sm:text-base capitalize">
                  Periode Jabatan : 2024 - sekarang
                </p>
                <a
                  href="https://akamigas.ac.id/"
                  className="text-blue-400 text-sm sm:text-base hover:underline"
                >
                  Politeknik Energi dan Mineral (PEM Akamigas)
                </a>
              </div>
            </div>

            <div
              className="overflow-hidden bg-cover bg-center bg-no-repeat rounded-lg cursor-pointer h-64 sm:h-80 md:h-96 group"
              style={{
                backgroundImage: `url(${Foto3})`,
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-4 sm:px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-2 sm:mt-4 text-lg sm:text-xl font-semibold text-white capitalize">
                  Petugas Pengambilan Contoh Minyak Bumi dan Gas Bumi di PT
                  Pertamina EP Cepu
                </h2>
                <p className="mb-2 sm:mb-3 text-white text-sm sm:text-base capitalize">
                  Periode Jabatan : 2024-09-01 - 2024-12-31
                </p>
                <a
                  href="https://akamigas.ac.id/"
                  className="text-blue-400 text-sm sm:text-base hover:underline"
                >
                  Politeknik Energi dan Mineral (PEM Akamigas)
                </a>
              </div>
            </div>

            <div
              className="overflow-hidden bg-cover bg-center bg-no-repeat rounded-lg cursor-pointer h-64 sm:h-80 md:h-96 group"
              style={{
                backgroundImage: `url(${Foto4})`,
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-4 sm:px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-2 sm:mt-4 text-lg sm:text-xl font-semibold text-white capitalize">
                  Kelompok Kerja Pengembangan Karir
                </h2>
                <p className="mb-2 sm:mb-3 text-white text-sm sm:text-base capitalize">
                  Periode Jabatan : 2024-09-01 - 2024-12-31
                </p>
                <a
                  href="https://akamigas.ac.id/"
                  className="text-blue-400 text-sm sm:text-base hover:underline"
                >
                  Politeknik Energi dan Mineral (PEM Akamigas)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
