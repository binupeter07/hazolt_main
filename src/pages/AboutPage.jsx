import React from "react";
import can from "../assets/Images/cherrycan.png";

const AboutPage = () => {
  return (
    <div className="bg-darkBlack">
      <div className="mx-auto max-w-7xl  sm:px-6   lg:px-8">
        <div className="relative isolate overflow-hidden bg-darkBlack px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Welcome to Hazolt, where our passion for refreshing moments is
              poured into every bottle. Born from a desire to create something
              truly unique in the beverage world, Hazolt stands as a beacon of
              innovation and taste in the sea of soft drink options.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              At Hazolt, we believe in the power of quality ingredients and
              creative flavor combinations. Our lineup, from the classic appeal
              of our apple flavor to the exotic zest of our cherry option, is
              crafted to offer something for everyone. We're not just another
              soft drink company; we're a community of taste adventurers seeking
              to make every sip an experience
            </p>
          </div>
          <div className="relative mt-16 h-80 md:h-screen lg:mt-8">
            <img
              className="absolute left-20 md:left-32 sm:top-12 w-[120px] sm:w-[250px] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={can}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
