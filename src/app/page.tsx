"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCamera, FaMicrophone, FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { GrInstall, GrInstallOption } from "react-icons/gr";

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

export default function Home() {
  const [prompt, setPrompt] = useState<any>(null);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleEvent = (e: any) => {
      e.preventDefault();
      setPrompt(e);

      if (!window.matchMedia("(display-mode: standalone)").matches) {
        setShow(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleEvent);
  }, []);

  const handleClick = () => {
    if (prompt) {
      prompt.prompt();

      prompt.useChoice.then((res: any) => {
        if (res.outcome === "accepted") {
          setShow(false);
          setPrompt(null);
        }
      });
    }
  };

  return (
    <div className="relative h-full w-full">
      <div className="w-full h-[10vh] relative flex flex-col items-center">
        <p className="text-4xl mt-2 font-bold text-[#0B336D]">MaDa</p>
        {show && (
          <div
            onClick={handleClick}
            className="rounded-md absolute top-2 right-2 cursor-pointer p-2 bg-gray-700 text-white"
          >
            <GrInstallOption />
          </div>
        )}

        {/* search box: navigates */}
        <div className="w-[98%] md:w-[90%] bg-white shadow-2xl justify-between mt-2 flex items-center p-2 px-4 space-x-2 text-2xl rounded-full">
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
      <div className="relative h-[90vh] w-full flex items-center justify-center">
        <div className="md:w-[20rem] md:h-[20rem] w-[12rem] h-[12rem] rounded-full bg-white shadow-2xl flex items-center justify-center">
          <Image src="/mada.png" alt="logo" width={150} height={150} />
        </div>
        <div className="grid grid-cols-2 absolute h-full grid-rows-3 mt-6 w-full z-40">
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
    </div>
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
        className={`w-32  h-32  md:h-[15vh] md:w-[15vh]  overflow-hidden bg-white flex md:text-xl text-md font-bold items-center justify-center shadow-2xl rounded-full `}
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        {name}
      </div>
    )}
    {!img && (
      <div
        className={`w-32  h-32 md:h-[15vh] md:w-[15vh]  overflow-hidden bg-white flex md:text-xl text-md font-bold items-center justify-center shadow-2xl rounded-full `}
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        {name}
      </div>
    )}
  </>
);
