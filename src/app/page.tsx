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
                Integrate AI ecosystem for Thai better living
              </div>
              <div className="whitespace-pre-line self-stretch text-white text-[60px] font-bold leading-10">
                THAI AI WATCH
              </div>
              <div className="whitespace-pre-line self-stretch grow shrink basis-0 text-white text-[20px] font-normal">
                Unlock AI's possibilities with our website's insightful
                articles. Explore transformative AI content and embrace
                innovation.
              </div>
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
              <div className="absolute top-80 right-20">
                <Heroai />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[158px] bg-gradient-to-b from-white to-purple-600" />
      <div className="relative w-full h-[600px] bg-gradient-to-b from-purple-600 via-indigo-800 to-slate-700 rounded-bl-[30px] rounded-br-[30px]">
        <div className="w-9 h-[80px]">
          <div className="w-[450px] h-[69px] left-10 absolute bg-purple-200 rounded-br-[30px] p-2.5">
            <div className="w-full text-center text-black text-[36px] font-bold tracking-widest">
              TRENDING TOPICS
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[700px] bg-white p-5">
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
      </div>

      <div className="w-full h-[500px] bg-gradient-to-l from-purple-600 via-indigo-800 to-slate-700">
        <div className=" text-center text-white text-[48px] font-bold leading-10 py-10">
          STATIC CONTENTS
        </div>
      </div>

      <div className="w-full h-[500px] bg-black">
        <div className="text-center text-purple-400 text-[48px] font-bold leading-10 py-10">
          STATIC CONTENTS
        </div>
      </div>

      <div className="w-full h-[200px] bg-slate-700 grid justify-items-stretch">
        <div className="justify-self-end">
          <div className=" text-neutral-50 text-[32px] font-bold leading-loose">
            Contact
          </div>
          <div className="w-[385px] text-neutral-50 text-[20px] font-normal leading-loose">
            112 อุทยานวิทยาศาสตร์ประเทศไทย <br /> อาคารเนคเทค ถ.พหลโยธิน <br />
            ต.คลองหนึ่ง อ.คลองหลวงจ.ปทุมธานี 12120
          </div>
        </div>
      </div>
    </div>
  );
}
