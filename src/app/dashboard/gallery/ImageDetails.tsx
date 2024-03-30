"use client";
import React, { Dispatch, SetStateAction } from "react";

import { photoDetails } from "../components/Interface";

const ImageDetails = ({
  imageDetails,
  setPopUp,
}: {
  imageDetails: photoDetails;
  setPopUp: Dispatch<SetStateAction<Boolean>>;
}) => {
  console.log(imageDetails)
  return (
    <div
      className="w-full h-[100vh] overflow-y-scroll py-24 fixed top-0 left-0 right-0 z-[9999999999] flex gap-6 justify-center items-center cursor-default"
      onClick={() => {
        setPopUp(false);        
      }}
    >
      <div
        className="relative bg-black w-[90%] md:w-[400px] rounded-lg p-3 border-[1px] px-4 md:px-10 py-6 pb-10 shadow-2xl flex gap-6 justify-start items-start"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex flex-col gap-5 mt-8">
          <div>
            <label className="font-bold text-primary" htmlFor="project_name">Project Name</label>
            <p>Name</p>
          </div>
          <div>
            <label className="font-bold text-primary" htmlFor="date_and_time">Date & Time</label>
            <p>Time</p>
          </div>

          <div>
            <label className="font-bold text-primary" htmlFor="project_url">Project URL</label>
            <p className="cursor-pointer underline">Project Url</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
