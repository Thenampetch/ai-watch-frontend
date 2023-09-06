import { IPostData } from "@/app/page";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ReactStars from "react-rating-star-with-type";
import clsx from "clsx";

export type TagsType =
  | "all"
  | "articles"
  | "news"
  | "publications"
  | "websites";

interface IPanelProps {
  tags: TagsType;
}

export default function Panel({ tags }: IPanelProps) {
  const [post, setPost] = useState<IPostData[]>([]);
  const [star, setStar] = useState(5);
  const onChange = (nextValue: any) => {
    setStar(nextValue);
  };

  useEffect(() => {
    axios
      .get(
        `https://abdul.in.th/ai-news-api/post${
          tags !== "all" && `?tags=${tags}`
        }`
      )
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

  return (
    <div className="overflow-y-auto h-[670px] grid sm:grid-cols-1 md:grid-cols-2 gap-4 py-3">
      {post ? (
        post?.map((response) => {
          return (
            <div className="post-card">
              <div className="relative flex w-full h-fit flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                  <img
                    src={response.imageHeader}
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="py-3 px-5">
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
                  <h4 className="block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {response.title}
                  </h4>
                  <p className="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                    Published {response.publishedDate.substring(0, 10)}
                  </p>
                  <p className=" block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
                    {response.stat.view.count} views
                  </p>
                  <a className="inline-block" href={response.url}>
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-2 px-1 text-center align-middle font-sans text-xs font-bold uppercase text-purple-800 transition-all hover:bg-purple-400/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </a>
                  <span>
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
                  </span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p className="text-xs py-2">No Data</p>
        </div>
      )}
    </div>
  );
}
