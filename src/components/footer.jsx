import * as React from "react";

const footer = () => {
  return (
    <div><footer className="bg-gray-900">
    <div className="container px-6 py-8 mx-auto">
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-wrap justify-center mt-1 -mx-4">
          <a
            href="#home-section"
            className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-blue-500"
            aria-label="Reddit"
          >
            {" "}
            Home{" "}
          </a>

          <a
            href="#about-section"
            className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-blue-500 "
            aria-label="Reddit"
          >
            {" "}
            About{" "}
          </a>

          <a
            href="#education-section"
            className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-blue-500 "
            aria-label="Reddit"
          >
            {" "}
            Education{" "}
          </a>

          
          <a
            href="#sertif-section"
            className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-blue-500"
            aria-label="Reddit"
          >
            {" "}
            Sertificate{" "}
          </a>

          <a
            href="#portofolio-section"
            className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-blue-500"
            aria-label="Reddit"
          >
            {" "}
            Portofolio{" "}
          </a>
        </div>
      </div>

      <hr className="my-6 border-gray-200 md:my-4 " />

      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <a href='https://indrarp.github.io/indraweb/' className='text-sm text-gray-100'>
          © Copyright 2024. Created by Indra Ridho Rizkian Pratama.</a>

        <div className="flex -mx-2 mt-4">
          {/* Email 1 */}
          <a
            href="mailto:nurardiansah@gmail.com"
            className="mx-2"
            aria-label="Instagram"
          >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

          </a>

          {/* Email 2 */}
          <a
            href="mailto:nur.ardiansah@esdm.go.id"
            className="mx-2"
            aria-label="Github"
          >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>

          </a>


          {/* Whatsapp */}
          <a
            href="https://wa.me/6281315784453"
            className="mx-2"
            aria-label="WA"
          >
            <svg
              class="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer></div>
  )
}

export default footer