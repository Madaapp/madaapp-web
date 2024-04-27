"use client";

import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { GrInstallOption } from "react-icons/gr";
import { HiOutlineMicrophone } from "react-icons/hi";

const cardConstants = [
  { word1: "Learning", word2: "Platform", url: "https://www.google.com/" },
  {
    word1: "Digital",
    word2: "Platform",
    url: "https://www.google.com/",
  },

  {
    word1: "Sales",
    word2: "Marketing",
    url: "https://www.google.com/",
  },
  { word1: "Coaching", url: "https://www.google.com/", word2: "Consulting" },
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
        <p className="text-4xl mt-2 font-bold text-[#0B336D]">
          {/* <span className="text-[#25AAE1]">M</span>
          <span className="text-[#D7DF21]">a</span>
          <span className="text-[#8CC63F]">D</span>
          <span className="text-[#D7DF21]">a</span> */}
          MaDa
        </p>
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
              <div className="text-gray-600">
                <HiOutlineMicrophone />
              </div>
            </Link>
            <Link href={"/chat"}>
              <div className="flex items-center justify-center">
                <Image src={"/cam.png"} height={24} width={24} alt="cam" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* circles */}
      <div className="relative h-[90vh] pb-6 w-full flex mt-6  items-center justify-center">
        <div className="grid grid-cols-2 h-full grid-rows-3 mt-6 w-full z-40">
          {cardConstants
            .slice(0, 2)
            .map(
              (
                {
                  word1,
                  word2,
                  url,
                }: { word1: string; word2: string; url: string },
                index: number
              ) => (
                <div key={index} className="flex items-center justify-center">
                  <LinkCircles name={[word1, word2]} url={url} />
                </div>
              )
            )}
          <div className="col-span-2 flex items-center justify-center">
            <div className="md:w-[20rem] md:h-[20rem] w-[15rem] h-[15rem] rounded-full bg-blue-900 shadow-2xl flex items-center justify-center">
              <Image src="/mada.png" alt="logo" width={150} height={150} />
            </div>
          </div>
          {cardConstants
            .slice(2, 4)
            .map(
              (
                {
                  word1,
                  word2,
                  url,
                }: { word1: string; word2: string; url: string },
                index: number
              ) => (
                <div key={index} className="flex items-center justify-center">
                  <LinkCircles name={[word1, word2]} url={url} />
                </div>
              )
            )}
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
  name?: string[];
  url?: string;
  img?: string;
}) => (
  <>
    <div
      className={`w-32  h-32  md:h-[15vh] md:w-[15vh]  overflow-hidden bg-white flex flex-col md:text-xl text-md font-bold items-center justify-center shadow-2xl rounded-full `}
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
    >
      {name?.map((name: string) => (
        <p className="text-center text-gray-700">{name}</p>
      ))}
    </div>
  </>
);
