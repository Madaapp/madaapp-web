import Image from "next/image";
import Link from "next/link";
import { FaCamera, FaMicrophone, FaSearch } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import React from "react";

export default function Home() {
  const cardConstants = [
    { name: "Education", url: "https://www.google.com/" },
    {
      name: "Architecture",
      url: "https://www.google.com/",
    },

    {
      img: "/bg1.jpg",
      url: "https://www.google.com/",
    },
    { url: "https://www.google.com/", img: "/bg2.jpg" },
    {
      name: "Innovation",
      url: "https://www.google.com/",
    },
    { name: "Comms", url: "https://www.google.com/" },
  ];

  return (
    <>
      <div className="w-full h-[10vh] flex flex-col items-center">
        <p className="text-4xl font-bold text-[#0B336D]">MaDa</p>
        {/* search box: navigates */}
        <div className="w-[98%] md:w-[90%] bg-white shadow-2xl mt-4 justify-between flex items-center p-4 space-x-2 text-2xl rounded-full">
          <div className="flex items-center space-x-2">
            <div className="text-slate-400">
              <FaSearch />
            </div>
            <Link href={"/chat"}>
              <p className="text-lg text-slate-400">Ask Something</p>
            </Link>
          </div>
          <div className="flex space-x-2">
            <Link href={"/chat/recording"}>
              <div className="text-blue-500">
                <FaMicrophone />
              </div>
            </Link>
            <Link href={"/chat"}>
              <div className="text-red-400">
                <FaCamera />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* circles */}
      <div className="relative h-[80vh] w-full flex md:mt-0 mt-10 items-center justify-center">
        <div className="md:w-[20rem] md:h-[20rem] w-[12rem] h-[12rem] rounded-full bg-white shadow-2xl flex items-center justify-center">
          <Image src="/mada.png" alt="logo" width={150} height={150} />
        </div>
        <div className="grid grid-cols-2 absolute h-full grid-rows-3 mt-6 w-full z-40 place-content-center">
          {cardConstants.map(({ name, url, img }) => (
            <div
              key={name}
              className="w-full h-full flex items-center justify-center"
            >
              <LinkCircles name={name} url={url} img={img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const LinkCircles = ({
  name,
  url,
  img,
}: {
  name?: string;
  url?: string;
  img?: string;
}) => (
  <>
    {img && (
      <div
        className={`md:w-[12rem] w-[8rem]  h-[8rem] overflow-hidden  md:h-[12rem] bg-white flex md:text-xl text-lg font-bold items-center justify-center shadow-2xl rounded-full `}
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        {name}
      </div>
    )}
    {!img && (
      <div
        className={`md:w-[12rem] w-[8rem]  h-[8rem] overflow-hidden  md:h-[12rem] bg-white flex md:text-xl text-lg font-bold items-center justify-center shadow-2xl rounded-full `}
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        {name}
      </div>
    )}
  </>
);
