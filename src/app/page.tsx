"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tab } from "@headlessui/react";
import Hero from "@/components/Home/Hero";
import Panel from "@/components/Home/Panel";
import ReactStars from "react-rating-star-with-type";
import clsx from "clsx";

export interface IPostData {
  stat: {
    link: {
      count: 0;
      data: [];
    };
    view: {
      count: 0;
      data: [];
    };
  };
  _id: string;
  title: string;
  url: string;
  publishedDate: string;
  description: string;
  imageHeader: string;
  website: string;
  tags: "articles" | "news" | "publications" | "websites";
}

export default function Home() {
  const [post, setPost] = useState<IPostData[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [numPerPage, setNumPerPage] = useState(120);

  const [star, setStar] = useState(5);
  const onChange = (nextValue: any) => {
    setStar(nextValue);
  };

  useEffect(() => {
    axios
      .get(`https://abdul.in.th/ai-news-api/trending`)
      .then((response) => {
        const { data } = response.data;
        setPost(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getTagColor = (
    tags: "news" | "articles" | "publications" | "websites"
  ) => {
    switch (tags) {
      case "news":
        return "bg-blue-500";
      case "publications":
        return "bg-red-500";
      case "articles":
        return "bg-amber-500";
      case "websites":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };

  const handleSearchChange = (search: any) => {
    setSearchTitle(search.target.value);
  };

  function fetchData() {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-full relative bg-white p-8">
      {/* hero */}
      <Hero />

      {/* trending */}
      <div className="w-full h-[158px] bg-gradient-to-b from-white to-purple-600" />
      <div className="relative w-full h-fit bg-gradient-to-b from-purple-600 via-indigo-800 to-slate-700 rounded-bl-[30px] rounded-br-[30px]">
        <div className="w-9 h-[80px] flex-initial">
          <div className="w-fit h-fit left-10 absolute bg-purple-200 rounded-br-[30px] p-3 shadow-black shadow-lg ">
            <div className="w-full text-center text-black text-2xl font-bold tracking-widest">
              TRENDING TOPICS
            </div>
          </div>
        </div>

        {/*trending card*/}
        <div className="flex flex-row overflow-x-scroll px-8 py-4 space-x-5">
          {post?.map((response) => {
            return (
              <div className="w-[300px] min-h-max bg-white shadow-md border border-gray-200 rounded-tl-lg rounded-tr-lg rounded-br-lg">
                <div className="px-5 py-2">
                  <div
                    className={clsx(
                      "w-[75px] mb-1 relative rounded-lg",
                      getTagColor(response.tags)
                    )}
                  >
                    <div className=" text-center text-white text-sm font-semibold leading-normal">
                      {response.tags[0].toUpperCase() + response.tags.slice(1)}
                    </div>
                  </div>

                  <div className="w-[235px] h-[130px] mb-3 rounded-lg bg-white border-black">
                    <img
                      src={
                        response.tags !== "publications"
                          ? response.imageHeader
                          : response.imageHeader
                      }
                      alt="image"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>

                  <a href={response.url}>
                    <h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2">
                      {response.title}
                    </h5>
                  </a>
                  <p className="font-normal text-xs text-gray-700 mb-2">
                    Published {response.publishedDate.substring(0, 10)}
                  </p>
                  <p className="font-normal text-xs text-gray-700 mb-2 ">
                    <svg
                      className="w-4 h-4 mr-1 inline-flex"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {response.stat.view.count} views
                  </p>
                  <a
                    className="text-white bg-indigo-800 hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    href={response.url}
                  >
                    Read more
                  </a>
                  <p className="text-xs py-2">
                    Was this article useful for you?
                  </p>
                  <div className="rating star">
                    <ReactStars
                      onChange={onChange}
                      value={0}
                      isEdit={true}
                      activeColors={[]}
                      inactiveColor="#808080"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="postsection" className="relative w-full h-[750px] bg-white p-5">
        {/* navbar */}
        <Tab.Group onChange={(tab) => {}}>
          <Tab.List className="sticky top-0 bg-white dark:bg-slate-700 w-full z-20 left-0 border-b  rounded-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-2">
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-700 dark:border-slate-700">
                  <Tab className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-700 dark:border-slate-700">
                    <li>
                      <a
                        href="#general"
                        className="text-lg block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                        aria-current="page"
                      >
                        ALL
                      </a>
                    </li>
                  </Tab>
                  <Tab className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-700 dark:border-slate-700">
                    <li>
                      <a
                        href="#articles"
                        className="text-lg block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                        aria-selected="true"
                      >
                        Articles
                      </a>
                    </li>
                  </Tab>
                  <Tab className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-700 dark:border-slate-700">
                    <li>
                      <a
                        href="#news"
                        className="text-lg block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                      >
                        News
                      </a>
                    </li>
                  </Tab>
                  <Tab className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-700 dark:border-slate-700">
                    <li>
                      <a
                        href="#websites"
                        className="text-lg block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                      >
                        Websites
                      </a>
                    </li>
                  </Tab>
                  <Tab className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-700 dark:border-slate-700">
                    <li>
                      <a
                        href="#publication"
                        className="text-lg block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Publications
                      </a>
                    </li>
                  </Tab>
                  <div className="max-w-md mx-auto">
                    <div className="relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                      <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>

                      <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.."
                        onChange={handleSearchChange}
                      />
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Panel tags="all" />
            </Tab.Panel>
            <Tab.Panel>
              <Panel tags="articles" />
            </Tab.Panel>
            <Tab.Panel>
              <Panel tags="news" />
            </Tab.Panel>
            <Tab.Panel>
              <Panel tags="websites" />
            </Tab.Panel>
            <Tab.Panel>
              <Panel tags="publications" />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {/*posts*/}
      </div>

      <hr className="mx-auto my-8 h-1 w-60 border-0 bg-gray-100" />

      {/*static contents*/}
      <div className="relative w-full h-fit bg-gradient-to-l from-purple-600 via-indigo-800 to-slate-700 rounded-tl-md rounded-tr-md">
        <div className=" text-center text-white text-[48px] font-bold leading-10 py-8">
          AI THAILAND
        </div>
        <div className="flex justify-center py-8">
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <a href="https://ai.in.th/about-ai-thailand/">
              <div className="bg-white px-4 py-6 rounded-lg hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  className="fill-purple-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"></path>
                </svg>
                <h2 className="title-font font-bold text-2xl text-gray-900">
                  National AI Strategy and Action Plan
                </h2>
                <p className="leading-relaxed">
                  แผนปฏิบัติการด้านปัญญาประดิษฐ์แห่งชาติเพื่อการพัฒนาประเทศไทย
                </p>
              </div>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <a href="https://ai.in.th/resources/">
              <div className="bg-white px-4 py-6 rounded-lg hover:bg-gray-100">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  className="fill-purple-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.375 3C2.33947 3 1.5 3.83947 1.5 4.875V5.625C1.5 6.66053 2.33947 7.5 3.375 7.5H20.625C21.6605 7.5 22.5 6.66053 22.5 5.625V4.875C22.5 3.83947 21.6605 3 20.625 3H3.375Z" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.08679 9L3.62657 18.1762C3.71984 19.7619 5.03296 21 6.62139 21H17.3783C18.9667 21 20.2799 19.7619 20.3731 18.1762L20.9129 9H3.08679ZM9.24976 12.75C9.24976 12.3358 9.58554 12 9.99976 12H13.9998C14.414 12 14.7498 12.3358 14.7498 12.75C14.7498 13.1642 14.414 13.5 13.9998 13.5H9.99976C9.58554 13.5 9.24976 13.1642 9.24976 12.75Z"
                  />
                </svg>
                <h2 className="title-font font-bold text-2xl text-gray-900">
                  Resources
                </h2>
                <p className="leading-relaxed">ทรัพยากร</p>
              </div>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <a href="https://ai.in.th/programs/">
              <div className="bg-white px-4 py-6 rounded-lg hover:bg-gray-100">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  className="fill-purple-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.25 2.25C1.83579 2.25 1.5 2.58579 1.5 3C1.5 3.41421 1.83579 3.75 2.25 3.75H3V14.25C3 15.9069 4.34315 17.25 6 17.25H7.20943L6.03849 20.7628C5.9075 21.1558 6.11987 21.5805 6.51283 21.7115C6.90579 21.8425 7.33053 21.6301 7.46151 21.2372L7.79057 20.25H16.2094L16.5385 21.2372C16.6695 21.6301 17.0942 21.8425 17.4872 21.7115C17.8801 21.5805 18.0925 21.1558 17.9615 20.7628L16.7906 17.25H18C19.6569 17.25 21 15.9069 21 14.25V3.75H21.75C22.1642 3.75 22.5 3.41421 22.5 3C22.5 2.58579 22.1642 2.25 21.75 2.25H2.25ZM8.79057 17.25H15.2094L15.7094 18.75H8.29057L8.79057 17.25ZM16.8755 8.25467C17.2341 8.04727 17.3566 7.58847 17.1492 7.22992C16.9418 6.87138 16.483 6.74886 16.1245 6.95626C14.7577 7.74688 13.5517 8.78371 12.5667 10.0061L11.0303 8.46975C10.7374 8.17686 10.2626 8.17686 9.96967 8.46975L6.96967 11.4698C6.67678 11.7626 6.67678 12.2375 6.96967 12.5304C7.26256 12.8233 7.73744 12.8233 8.03033 12.5304L10.5 10.0607L12.1173 11.678C12.2742 11.835 12.4927 11.9143 12.7138 11.8947C12.9349 11.8751 13.136 11.7586 13.2629 11.5765C14.207 10.2217 15.4414 9.08428 16.8755 8.25467Z"
                  />
                </svg>
                <h2 className="title-font font-bold text-2xl text-gray-900">
                  Programes
                </h2>
                <p className="leading-relaxed">โครงการ</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="relative left-10">
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
  );
}
