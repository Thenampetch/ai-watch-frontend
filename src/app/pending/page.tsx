"use client";
import React from "react";
import { Rating } from "@material-tailwind/react";

export default function Pending() {
  return (
    <body>
      <div className="p-5 relative bg-gradient-to-b from-purple-600 via-indigo-800 to-slate-700 px-8 py-20">
        <a href="/">
          <svg
            className="icon-arrow-back-circle-sharp mb-5"
            width="50"
            height="50"
            viewBox="0 0 125 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 62.3446C0 96.775 27.9142 124.689 62.3446 124.689C96.775 124.689 124.689 96.775 124.689 62.3446C124.689 27.9142 96.775 0 62.3446 0C27.9142 0 0 27.9142 0 62.3446ZM67.1403 38.3389L48.0833 57.5489H92.9174V67.1403H48.0833L67.1403 86.3503L60.3364 93.1063L29.8115 62.3446L60.3364 31.5829L67.1403 38.3389Z"
              fill="white"
            />
          </svg>
        </a>

        <div className="text-gray-50 pt-5">
          <div className="container grid grid-cols-12 mx-auto bg-gray-900 rounded-md">
            <div className="bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4"></div>
            <div className="flex flex-col col-span-full row-span-full lg:col-span-8 lg:p-10">
              <div className="flex justify-start p-5">
                <span className="px-2 py-1 text-base rounded-full bg-blue-500 text-white font-semibold">
                  News
                </span>
              </div>
              <h1 className="text-3xl font-semibold px-5">TITLE</h1>
              <h4 className="text-xl font-normal px-5">description</h4>
              <p className="flex-1 pt-5 px-5">publication date</p>
              <p className="flex-1 pt-2 px-5 pb-5">views</p>
              <div className="flex justify-start px-5 py-5">
                <span className="px-2  text-base rounded-lg hover:bg-purple-200 text-white hover:text-gray-900 font-semibold">
                  Read more
                </span>
              </div>

              <div className="flex items-center justify-between pb-2"></div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="flex justify-center bg-white container mx-auto  p-8 w-fit">
            <div className=" text-slate-900 font-bold px-5">
              WAS THIS ARTICLE USEFUL FOR YOU?{" "}
            </div>
            <Rating />
            <div className="flex flex-inline px-5">
              <Rating />
            </div>
          </div>
        </div>

        <div className="pt-8"></div>
        <footer className="bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="/" className="relative left-10">
                  <span className=" text-2xl font-bold whitespace-nowrap text-white">
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
                  <h2 className="mb-4 text-sm font-bold  uppercase text-white">
                    AI Courses
                  </h2>
                  <ul className="text-gray-400 font-medium">
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
                  <h2 className="mb-4 text-sm font-bold uppercase text-white">
                    AI Services
                  </h2>
                  <ul className=" text-gray-400 font-medium">
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
    </body>
  );
}
