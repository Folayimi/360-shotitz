"use client";
import React from "react";

import { photoDetails } from "../components/Interface";

const ImageDetails = ({ imageDetails }: { imageDetails: photoDetails }) => {
  return (
    <div className="w-full min-h-[100vh] h-[100vh] overflow-y-scroll py-24 fixed top-0 left-0 right-0 bg-[black]/70 z-[9999999999] flex flex-col gap-6 justify-center items-center">
      <div className="relative bg-black w-[90%] md:w-[600px] rounded-lg p-3 min-h-[90dvh] px-4 md:px-10 py-6 pb-10 shadow-2xl flex gap-6 flex-col justify-start items-start">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full">
            <div>
              <div className="flex flex-col gap-5 mt-8">
                <div>
                  <label htmlFor="project_name">Project Name</label>
                  <p>Name</p>
                </div>
                <div>
                  <label htmlFor="date_and_time">Date & Time</label>
                  <p>Time</p>
                </div>

                <div>
                  <label htmlFor="project_url">Project URL</label>
                  <p>Project Url</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
