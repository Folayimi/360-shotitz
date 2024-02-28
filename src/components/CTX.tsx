import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import WhiteSpace from "@/components/WhiteSpace";

// Image
import Wavy_pattern from "../../public/wavy_pattern.png";

interface ICtx {
  id: number;
  image: string;
  text: string;
}

const CTX: ICtx[] = [
  {
    id: 1,
    image: "shoot1.jpeg",
    text: "Best Background",
  },
  {
    id: 2,
    image: "shoot1.jpeg",
    text: "Best Camera's",
  },
  {
    id: 3,
    image: "shoot1.jpeg",
    text: "Best Editor's",
  },
];

const PhotographCTX = () => {
  return (
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
        <div className="w-full flex flex-col gap-12">
          <div className="w-full text-center flex flex-col gap-4 max-w-3xl mx-auto">
            <h1 style={{ lineHeight: 1.5 }} className="text-4xl font-bold">
              <span className="text-primary"> &apos;&apos; A Photograph</span>{" "}
              Is Usually Looked At - Seldom Looked into. &apos;&apos;
            </h1>

            <p
              style={{ lineHeight: 1.7 }}
              className="text-lg font-normal text-white opacity-65 normal_text"
            >
              We are an innovative photography group with a team of experienced
              talents, allowing us to bring your imagination to life.
            </p>
          </div>
          <div className="w-full h-full flex flex-wrap md:flex-nowrap gap-x-12 gap-y-6 items-center">
            {CTX.map((data: ICtx) => {
              return (
                <div className="w-full flex flex-col gap-1" key={data.id}>
                  <div className="rounded">
                    <Image
                      src={`/${data.image}`}
                      alt="wedding shoot"
                      width="100"
                      height="100"
                      className="w-full object-cover rounded h-[350px]"
                    />
                  </div>
                  <div className="text-white py-2 flex justify-between gap-4">
                    <p className="text-lg"> {data.text} </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-center items-center">
            <Link href="/about">
              <button className="py-3 px-6 shadow inline-flex bg-[var(--primary-color)] hover:text-main justify-center items-center gap-2 rounded-full font-medium text-white align-middle transition-all text-md">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </WhiteSpace>
    </div>
  );
};

export default PhotographCTX;
