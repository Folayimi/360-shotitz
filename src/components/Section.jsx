import React from "react";
import Link from "next/link";

// Components
import WhiteSpace from "@/components/WhiteSpace";

// Image
import Wavy_pattern from "../../public/wavy_pattern.png";

const Section = () => {
  return (
    <>
      <div
        className="md:py-12"
        style={{
          background: `url(${Wavy_pattern.src}) 100px no-repeat`,
          backgroundPosition: "left top",
          backgroundSize: "400px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <WhiteSpace>
          <div className="w-full flex flex-col gap-[150px]">
            <div className="w-full flex justify-between gap-[30px] font-[400] items-center">
              <div className="h-[479px] w-[50%]">
                <img src="/shoot1.jpeg" className="w-full h-full" alt="shoot" />
              </div>
              <div className="w-[50%] flex flex-col text-[18px] gap-[20px]">
                <h1 className=" leading-[57px] text-[40px] text-[#FF6B00]">
                  About Us Excerpt
                </h1>
                <p className="text-justify">
                  We strive to offer the best photography and visual experience
                  available in Nigeria by delivering the perfect combination of
                  professionalism, quality, and innovation. Our company
                  specializes in event photography, fashion shoots, drone
                  services, visual creation, and many more, capturing the joy
                  and essence of every occasion with a combination of a keen eye
                  for detail and state-of-the-art equipment that leaves you
                  pleased forever.
                </p>
                <Link href="/about">
                  <button className="py-3 px-6 shadow inline-flex bg-[var(--primary-color)] hover:text-main justify-center items-center gap-2 rounded-full font-medium text-white align-middle transition-all text-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div className="w-full flex reverse justify-between gap-[30px] font-[400] items-center">
              <div className="w-[50%] flex flex-col text-[18px] gap-[20px]">
                <h1 className=" leading-[57px] text-[40px] text-[#FF6B00]">
                  What We Do
                </h1>

                <div className="text-justify">
                  <span className="solid">
                    WE DON’T SELL CAMERAWORK WE SELL INNOVATION
                  </span>
                  <p>
                    Innovation and quality delivery are what set us apart. With
                    over a decade of experience in event photography and visual
                    creation, we’ve established a process that brings unmatched
                    clarity to your content. Firstly, we listen keenly to your
                    needs. Then we refine and distill your important messages
                    prior to taking any shot. Finally, our experienced
                    photographers and content creators bring your message to
                    life with incredible shots, unmatched editing skills, and
                    state-of-the-art presentation. We bring your imagination to
                    life.
                  </p>
                </div>
                <Link href="/about">
                  <button className="py-3 px-6 shadow inline-flex bg-[var(--primary-color)] hover:text-main justify-center items-center gap-2 rounded-full font-medium text-white align-middle transition-all text-md">
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="h-[479px] w-[50%]">
                <img src="/shoot1.jpeg" className="w-full h-full" alt="shoot" />
              </div>
            </div>
          </div>
        </WhiteSpace>
      </div>
    </>
  );
};

export default Section;
