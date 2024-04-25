"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCamera, FaMicrophone, FaSearch } from "react-icons/fa";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoMdClose, IoMdSend } from "react-icons/io";
import { TbSend2 } from "react-icons/tb";

const dummy = {
  text: "Hi, how can I help you",
};

const App = () => {
  const [image, setImage] = useState<File>();
  const [show, setShow] = useState<any>(null);
  const [txt, setTxt] = useState<string>("");

  useEffect(() => {
    if (image) {
      setShow(URL.createObjectURL(image));
    }
  }, [image]);

  const handleClick = () => {
    // api call
    setShow(null);
    setImage(undefined);
  };

  return (
    <>
      <div className="w-[98%] md:w-[90%]  bg-white shadow-2xl mt-4 justify-between flex items-center p-4 space-x-2 text-2xl rounded-full">
        <div className="flex items-center min-w-[80%] md:min-w-[90%] space-x-2">
          <div className="text-slate-400">
            <FaSearch />
          </div>

          <input
            type="text"
            placeholder="Ask Something"
            className="w-full text-lg outline-none"
            onChange={(e) => setTxt(e.target.value)}
            value={txt}
          />
        </div>
        <div className="flex space-x-2">
          {!txt && !image && (
            <Link href={"/chat/recording"}>
              <div className="text-gray-600">
                <HiOutlineMicrophone />
              </div>
            </Link>
          )}

          <div className="text-red-400 flex relative">
            <input
              type="file"
              accept="image/*"
              className="absoute top-0 bottom-0 left-0 right-0 z-10  w-6 h-6 opacity-0"
              onChange={(e: any) => setImage(e.target.files?.[0])}
            />
            <div className="absolute top-0 bottom-0 left-0 right-0">
              <Image src={"/cam.png"} height={24} width={24} alt="cam" />
            </div>
          </div>

          {(txt || image) && (
            <div className="text-gray-600" onClick={handleClick}>
              <TbSend2 />
            </div>
          )}
        </div>
      </div>
      {show && image && (
        <div className="border bg-white mt-4 p-2 relative">
          <img src={show} alt="img" className="w-16 h-16" />
          <div
            onClick={() => {
              setImage(undefined);
              setShow("");
            }}
            className="absolute top-2 right-2 bg-slate-900 rounded-sm text-white"
          >
            <IoMdClose />
          </div>
        </div>
      )}
      <div className="w-full flex flex-col items-center px-[5vw] mt-5">
        <BotMsg response={dummy} />
      </div>
    </>
  );
};

export default App;

const BotMsg = ({ response }: any) => {
  return (
    <div className="w-full text-lg font-semibold text-white bg-gray-800 p-2 rounded-md">
      {response.text}
    </div>
  );
};
