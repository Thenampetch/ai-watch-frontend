import Heroai from "@/components/heroai";

export default function Hero() {
  return (
    <div className="Hero-Ai w-full min-h-[75vh] bg-gradient-to-r from-slate-700 via-indigo-800 to-purple-600 rounded-tl-[48px] rounded-tr-[48px] rounded-bl-[48px] rounded-br-[300px] p-32">
      <div className="w-full h-full flex-col justify-start items-start gap-[15px] inline-flex">
        <div className="w-full h-full flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[15px] flex">
            <div className="self-stretch text-white text-[24px] font-bold leading-normal">
              AI ecosystem for Thai better living
            </div>
            <div className="whitespace-pre-line self-stretch text-white text-[60px] font-bold leading-10">
              AI THAI WATCH
            </div>
            <div className="w-3/4 whitespace-normal self-stretch grow shrink basis-0 text-white text-[20px] --font-open-sans">
              Unlock AI's possibilities with our website's insightful articles.
              Explore transformative AI content and embrace innovation.{" "}
            </div>
            <a href="#postsection">
              <button className="p-2.5 bg-slate-800 rounded-lg justify-start items-start gap-3 inline-flex">
                <div className="text-white text-[24px] font-bold leading-tight">
                  LET’S EXPLORE
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="30"
                  fill="none"
                  viewBox="0 0 31 19"
                >
                  <path
                    fill="#fff"
                    d="M14.243 18.247L.497 4.5a1.697 1.697 0 010-2.4L2.1.496A1.698 1.698 0 014.498.494l10.945 10.894L26.388.494a1.697 1.697 0 012.398.003L30.39 2.1a1.698 1.698 0 010 2.401L16.644 18.247a1.697 1.697 0 01-2.401 0z"
                  ></path>
                </svg>
              </button>
            </a>
            <div className="absolute left-2/3 top-60">
              <Heroai />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
