import React from "react";
import Image from "next/image";
import Heroai from "../components/heroai";

export default function Home() {
  return (
    <div className="w-full relative bg-white p-8">
      <div className="w-full min-h-[75vh] bg-gradient-to-r from-slate-700 via-indigo-800 to-purple-600 rounded-tl-[48px] rounded-tr-[48px] rounded-bl-[48px] rounded-br-[300px] p-32">
        <div className="w-full h-full flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="w-full h-full flex-col justify-start items-start gap-[15px] inline-flex">
            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[15px] flex">
              <div className="whitespace-pre-line self-stretch text-white text-[24px] font-bold leading-normal">
                AI ecosystem for Thai better living
              </div>
              <div className="whitespace-pre-line self-stretch text-white text-[60px] font-bold leading-10">
                THAI AI WATCH
              </div>
              <div className="w-3/4 whitespace-normal self-stretch grow shrink basis-0 text-white text-[20px] font-normal">
                Unlock AI's possibilities with our website's insightful
                articles. Explore transformative AI content and embrace
                innovation.{" "}
              </div>
              <a href="#section">
                <button className="p-2.5 bg-slate-800 rounded-lg justify-start items-start gap-3 inline-flex">
                  <div className="text-white text-[24px] font-bold leading-tight">
                    LET’S EXPLORE
                  </div>
                  <svg
                    className="icon-chevron-right-icon"
                    width="31"
                    height="30"
                    viewBox="0 0 31 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.243 18.2469L0.497167 4.50105C-0.165781 3.83811 -0.165781 2.7633 0.497167 2.10042L2.10039 0.497194C2.76221 -0.164622 3.83482 -0.165895 4.4982 0.494366L15.4433 11.3882L26.3884 0.494366C27.0517 -0.165895 28.1243 -0.164622 28.7862 0.497194L30.3894 2.10042C31.0523 2.76337 31.0523 3.83818 30.3894 4.50105L16.6436 18.2468C15.9807 18.9098 14.9059 18.9098 14.243 18.2469Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </a>
              <div className="absolute top-80 right-20">
                <Heroai />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[158px] bg-gradient-to-b from-white to-purple-600" />
      <div className="relative w-full h-[550px] bg-gradient-to-b from-purple-600 via-indigo-800 to-slate-700 rounded-bl-[30px] rounded-br-[30px]">
        <div className="w-9 h-[80px] flex-initial">
          <div className="w-fit h-fit left-10 absolute bg-purple-200 rounded-br-[30px] p-3 shadow-black shadow-lg ">
            <div className="w-full text-center text-black text-2xl font-bold tracking-widest">
              TRENDING TOPICS
            </div>
          </div>
        </div>

        <div className="flex flex-row overflow-x-scroll px-8 py-4 space-x-5">
          <div className="w-[300px] h-[380px] bg-white shadow-md border border-gray-200 rounded-tl-lg rounded-tr-lg rounded-br-lg">
            <div className="px-5 py-2">
              <div className="w-[100px] h-[25px] mb-3 relative bg-blue-500 rounded-lg">
                <div className=" text-center text-white text-base font-semibold leading-normal">
                  News
                </div>
              </div>

              <div className="w-[235px] h-[130px] mb-3 rounded-lg bg-white border-black">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="image"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>

              <a href="#">
                <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-2">plubication date</p>
              <p className="font-normal text-gray-700 mb-2 ">
                <svg
                  className="w-4 h-4 mr-1 inline-flex"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2k views
              </p>
              <a
                className="text-white bg-indigo-800 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="w-[300px] h-[380px] bg-white shadow-md border border-gray-200 rounded-tl-lg rounded-tr-lg rounded-br-lg">
            <div className="px-5 py-2">
              <div className="w-[130px] h-[25px] mb-3 relative bg-red-500 rounded-lg">
                <div className="text-center text-white text-base font-semibold leading-normal">
                  Publication
                </div>
              </div>

              <div className="w-[235px] h-[130px] mb-3 rounded-lg bg-white border-black border-2" />

              <a href="#">
                <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-2">plubication date</p>
              <p className="font-normal text-gray-700 mb-2">1.2k views</p>
              <a
                className="text-white bg-indigo-800 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="w-[300px] h-[380px] bg-white shadow-md border border-gray-200 rounded-tl-lg rounded-tr-lg rounded-br-lg">
            <div className="px-5 py-2">
              <div className="w-[120px] h-[25px] mb-3 relative bg-green-600 rounded-lg">
                <div className=" text-center text-white text-base font-semibold leading-normal">
                  Website
                </div>
              </div>

              <div className="w-[235px] h-[130px] mb-3 rounded-lg bg-white border-black border-2" />

              <a href="#">
                <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-2">plubication date</p>
              <p className="font-normal text-gray-700 mb-2">1.2k views</p>
              <a
                className="text-white bg-indigo-800 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="w-[300px] h-[380px] bg-white shadow-md border border-gray-200 rounded-tl-lg rounded-tr-lg rounded-br-lg">
            <div className="px-5 py-2">
              <div className="w-[100px] h-[25px] mb-3 relative bg-amber-500 rounded-lg">
                <div className=" text-center text-white text-base font-semibold leading-normal">
                  Article
                </div>
              </div>

              <div className="w-[235px] h-[130px] mb-3 rounded-lg bg-white border-black border-2" />

              <a href="#">
                <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-2">plubication date</p>
              <p className="font-normal text-gray-700 mb-2">1.2k views</p>
              <a
                className="text-white bg-indigo-800 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="section" className="relative w-full h-[750px] bg-white p-5">
        <nav className="sticky top-0 bg-white dark:bg-slate-700 w-full z-20 left-0 border-b border-gray-200 dark:border-gray-600 rounded-lg">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-2">
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-700 dark:border-slate-700">
                <li>
                  <a
                    href="#"
                    className="text-[20px] block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-purple-400"
                    aria-current="page"
                  >
                    ALL
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[20px] block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[20px] block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[20px] block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                  >
                    Websites
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[20px] block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Publications
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="overflow-y-auto h-[670px] grid grid-cols-2 gap-4 py-3">
          <div className="relative flex w-full h-40 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="py-3 px-5">
              <div className="w-[75px] mb-1 relative bg-green-600 rounded-lg">
                <div className=" text-center text-white text-sm font-semibold leading-normal">
                  Website
                </div>
              </div>
              <h4 className="block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                เจาะลึกทำความเข้าใจกับ ChatGPT และ AI
              </h4>
              <p className="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                publication date
              </p>
              <p className=" block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                820 views
              </p>

              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-2 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-purple-800 transition-all hover:bg-purple-400/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex w-full h-40 flex-row rounded-xl bg-white bg-clip-border text-gray-800 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="py-3 px-5">
              <span className="w-[60px] mb-1 relative bg-amber-500 rounded-lg">
                <div className=" text-center text-white text-sm font-semibold leading-normal">
                  Article
                </div>
              </span>
              <h4 className="block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                เจาะลึกทำความเข้าใจกับ ChatGPT และ AI
              </h4>
              <p className="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                publication date
              </p>
              <p className=" block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                820 views
              </p>

              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-2 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-purple-800 transition-all hover:bg-purple-400/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex w-full h-40 flex-row rounded-xl bg-white bg-clip-border text-gray-800 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="py-3 px-5">
              <div className="w-[60px] mb-1 relative bg-blue-500 rounded-lg">
                <div className=" text-center text-white text-sm font-semibold leading-normal">
                  News
                </div>
              </div>
              <h4 className="block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                เจาะลึกทำความเข้าใจกับ ChatGPT และ AI
              </h4>
              <p className="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                publication date
              </p>
              <p className=" block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                820 views
              </p>

              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-2 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-purple-800 transition-all hover:bg-purple-400/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex w-full h-40 flex-row rounded-xl bg-white bg-clip-border text-gray-800 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="py-3 px-5">
              <div className="w-[85px] mb-1 relative bg-red-500 rounded-lg">
                <div className=" text-center text-white text-sm font-semibold leading-normal">
                  Publication
                </div>
              </div>
              <h4 className="block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                เจาะลึกทำความเข้าใจกับ ChatGPT และ AI
              </h4>
              <p className="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                publication date
              </p>
              <p className=" block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                820 views
              </p>

              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-2 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-purple-800 transition-all hover:bg-purple-400/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex w-full h-40 flex-row rounded-xl bg-white bg-clip-border text-gray-800 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="py-3 px-5">
              <div className="w-[60px] mb-1 relative bg-amber-500 rounded-lg">
                <div className=" text-center text-white text-sm font-semibold leading-normal">
                  Website
                </div>
              </div>
              <h4 className="block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                เจาะลึกทำความเข้าใจกับ ChatGPT และ AI
              </h4>
              <p className="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                publication date
              </p>
              <p className=" block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                820 views
              </p>

              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-2 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-purple-800 transition-all hover:bg-purple-400/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex w-full h-40 flex-row rounded-xl bg-white bg-clip-border text-gray-800 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="py-3 px-5">
              <div className="w-[60px] mb-1 relative bg-amber-500 rounded-lg">
                <div className=" text-center text-white text-sm font-semibold leading-normal">
                  Website
                </div>
              </div>
              <h4 className="block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                เจาะลึกทำความเข้าใจกับ ChatGPT และ AI
              </h4>
              <p className="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                publication date
              </p>
              <p className=" block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                820 views
              </p>

              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-2 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-purple-800 transition-all hover:bg-purple-400/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex w-full h-40 flex-row rounded-xl bg-white bg-clip-border text-gray-800 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="py-3 px-5">
              <div className="w-[60px] mb-1 relative bg-amber-500 rounded-lg">
                <div className=" text-center text-white text-sm font-semibold leading-normal">
                  Website
                </div>
              </div>
              <h4 className="block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                เจาะลึกทำความเข้าใจกับ ChatGPT และ AI
              </h4>
              <p className="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                publication date
              </p>
              <p className=" block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                820 views
              </p>

              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-2 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-purple-800 transition-all hover:bg-purple-400/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex w-full h-40 flex-row rounded-xl bg-white bg-clip-border text-gray-800 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="py-3 px-5">
              <div className="w-[60px] mb-1 relative bg-amber-500 rounded-lg">
                <div className=" text-center text-white text-sm font-semibold leading-normal">
                  Website
                </div>
              </div>
              <h4 className="block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                เจาะลึกทำความเข้าใจกับ ChatGPT และ AI
              </h4>
              <p className="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                publication date
              </p>
              <p className=" block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                820 views
              </p>

              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-2 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-purple-800 transition-all hover:bg-purple-400/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex w-full h-40 flex-row rounded-xl bg-white bg-clip-border text-gray-800 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="py-3 px-5">
              <div className="w-[60px] mb-1 relative bg-amber-500 rounded-lg">
                <div className=" text-center text-white text-sm font-semibold leading-normal">
                  Website
                </div>
              </div>
              <h4 className="block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                เจาะลึกทำความเข้าใจกับ ChatGPT และ AI
              </h4>
              <p className="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                publication date
              </p>
              <p className=" block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                820 views
              </p>

              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-2 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-purple-800 transition-all hover:bg-purple-400/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex w-full h-40 flex-row rounded-xl bg-white bg-clip-border text-gray-800 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="py-3 px-5">
              <div className="w-[60px] mb-1 relative bg-amber-500 rounded-lg">
                <div className=" text-center text-white text-sm font-semibold leading-normal">
                  Website
                </div>
              </div>
              <h4 className="block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                เจาะลึกทำความเข้าใจกับ ChatGPT และ AI
              </h4>
              <p className="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                publication date
              </p>
              <p className=" block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                820 views
              </p>

              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-2 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-purple-800 transition-all hover:bg-purple-400/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto my-8 h-1 w-60 border-0 bg-gray-100" />
      <div className="relative w-full h-[500px] bg-gradient-to-l from-purple-600 via-indigo-800 to-slate-700 rounded-tl-md rounded-tr-md">
        <div className=" text-center text-white text-[48px] font-bold leading-10 py-10">
          AI THAILAND
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Thailand National AI Strategy and Action Plan (2022-2027)
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              แผนปฏิบัติการด้านปัญญาประดิษฐ์แห่งชาติเพื่อการพัฒนาประเทศไทย (พ.ศ.
              2565 – 2570)
            </p>
          </a>
        </div>
      </div>

      {/* <hr className="mx-auto my-8 h-1 w-60 border-0 bg-gray-100" />
      <div className="relative w-full h-[500px] bg-black rounded-tl-md rounded-tr-md">
        <div className="text-center text-purple-400 text-[48px] font-bold leading-10 py-10">
          STATIC CONTENTS
        </div>
      </div> */}

      {/* <div className="w-full h-40 bg-slate-700 grid justify-items-stretch">
        <div className="justify-self-end px-8 py-3">
          <div className=" text-neutral-50 text-[30px] font-bold leading-tight">
            Contact
          </div>
          <div className="w-fit text-neutral-50 text-[15px] font-normal leading-loose">
            112 อุทยานวิทยาศาสตร์ประเทศไทย <br /> อาคารเนคเทค ถ.พหลโยธิน <br />
            ต.คลองหนึ่ง อ.คลองหลวงจ.ปทุมธานี 12120
          </div>
        </div>
      </div> */}

      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                  AI Thai Watch
                </span>
              </a>
              <a className="relative left-10 top-3">
                <div className="py-2 text-neutral-50 text-xl font-semibold leading-tight">
                  Contact
                </div>
                <div className="w-fit text-neutral-50 text-sm font-normal leading-loose">
                  112 อุทยานวิทยาศาสตร์ประเทศไทย <br /> อาคารเนคเทค ถ.พหลโยธิน{" "}
                  <br />
                  ต.คลองหนึ่ง อ.คลองหลวงจ.ปทุมธานี 12120
                </div>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-2">
              <div>
                <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  AI Courses
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      AI Academy
                    </a>
                  </li>

                  <li className="mb-2">
                    <a
                      href="https://thaimooc.org/course?keys=AI"
                      className="hover:underline"
                    >
                      Thai MOOC
                    </a>
                  </li>

                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      AIAT Academy
                    </a>
                  </li>

                  <li className="mb-2">
                    <a
                      href="https://superai.aiat.or.th/AI%20Lecture/"
                      className="hover:underline"
                    >
                      AI Lecture
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  AI Services
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a
                      href="https://aiforthai.in.th/"
                      className="hover:underline "
                    >
                      AI for Thai
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="http://ciratech.ai/" className="hover:underline">
                      CiRA Core
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://visai.ai/" className="hover:underline">
                      VISAI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 NECTEC™ . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
