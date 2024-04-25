"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaMicrophone, FaStop } from "react-icons/fa";

const App = () => {
  const [recording, setRecording] = useState<boolean>(false);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div
        onClick={() => setRecording(!recording)}
        className="rounded-full bg-slate-800 flex items-center justify-center md:w-[20rem] md:h-[20rem] w-[12rem] h-[12rem] text-7xl md:text-9xl "
      >
        {recording ? <FaStop color="green" /> : <FaMicrophone color="red" />}
      </div>
      <Link href={"/chat"}>
        <div className="rounded-md p-2 absolute top-6 right-6 text-xl bg-gray-800 text-white">
          <CgClose />
        </div>
      </Link>
    </div>
  );
};

export default App;
