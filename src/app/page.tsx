"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Heroai from "../components/heroai";
import { error } from "console";

export default function Home() {
  const [post, setPost] = useState([]);
  const [filterPosts, setFilterPosts] = useState("");

  const getData = async () => {
    const { data } = await axios.get(`https://yesno.wtf/api`);
    setPost(data);
  };
  useEffect(() => {
    getData().catch((err) => {
      console.log(err);
    });
    console.log(post);
  }, []);

  // const [posts, getPosts] = useState([]);
  // const [filterPosts, getFilterPosts] = useState("");
  // const [numPerPage, getNumPerPage] = useState(12);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://newsapi.org/v2/top-headlines?country=us&apiKey=b2d9307e51ac43e68f24b6685bbf4afb"
  //     )
  //     .then((response) => {
  //       getPosts(response.data.result);
  //       console.log(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [posts, filterPosts, numPerPage]);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     getNumPerPage((prev) => prev + 4);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="w-full relative bg-white p-8">
      {/* hero */}
      <div className="Hero-Ai w-full min-h-[75vh] bg-gradient-to-r from-slate-700 via-indigo-800 to-purple-600 rounded-tl-[48px] rounded-tr-[48px] rounded-bl-[48px] rounded-br-[300px] p-32">
        <div className="w-full h-full flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="w-full h-full flex-col justify-start items-start gap-[15px] inline-flex">
            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[15px] flex">
              <div className="whitespace-pre-line self-stretch text-white text-[24px] font-bold leading-normal">
                AI ecosystem for Thai better living
              </div>
              <div className="whitespace-pre-line self-stretch text-white text-[60px] font-bold leading-10">
                THAI AI WATCH
              </div>
              <div className="w-3/4 whitespace-normal self-stretch grow shrink basis-0 text-white text-[20px] --font-open-sans">
                Unlock AI's possibilities with our website's insightful
                articles. Explore transformative AI content and embrace
                innovation.{" "}
              </div>
              <a href="#general">
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
              <div className="absolute top-60 right-20">
                <Heroai />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* trending */}
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
                href="/pending"
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
              <div className="w-[235px] h-[130px] mb-3 rounded-lg bg-white border-black">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                  alt="image"
                  className="h-full w-full object-cover rounded-lg"
                />

                <a href="#">
                  <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="font-normal text-gray-700 mb-2">
                  plubication date
                </p>
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
                href="#pending"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[750px] bg-white p-5">
        {/* navbar */}
        <span>
          <nav className="sticky top-0 bg-white dark:bg-slate-700 w-full z-20 left-0 border-b  rounded-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-2">
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-700 dark:border-slate-700">
                  <li>
                    <a
                      href="#general"
                      id="general"
                      className="text-lg block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-purple-400"
                      aria-current="page"
                    >
                      ALL
                    </a>
                  </li>
                  <li>
                    <a
                      href="#articles"
                      id="articles"
                      className="text-lg block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                    >
                      Articles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#news"
                      id="news"
                      className="text-lg block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="#websites"
                      id="websites"
                      className="text-lg block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                    >
                      Websites
                    </a>
                  </li>
                  <li>
                    <a
                      href="#publication"
                      id="publications"
                      className="text-lg block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Publications
                    </a>
                  </li>

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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>

                      <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.."
                      />
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </span>

        {/* News */}
        {/* <div className="container">
          {posts.articles.map((response) => {
            return (
              <div className="posts-card">
                <a href={response.url} className="ainews-url">
                  <img
                    src={
                      response.urlToImage ||
                      "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                    }
                    alt="image"
                    className="posts-image"
                  />
                </a>
                <a href={response.url} className="ainews-url">
                  <p className="ainews-title">{response.title}</p>
                </a>
                <small className="ainews-date">
                  {response.publishedAt.substring(0, 10)}
                </small>
              </div>
            );
          })}
        </div> */}

        {/*posts*/}
        <div className="overflow-y-auto h-[670px] grid sm:grid-cols-1 md:grid-cols-2 gap-4 py-3">
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
              <div className="w-[60px] mb-1 relative bg-amber-500 rounded-lg">
                <div className=" text-center text-white text-sm font-semibold leading-normal">
                  Article
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
