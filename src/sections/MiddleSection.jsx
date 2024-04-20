import React, { useEffect } from "react";
import applecan from "../assets/Images/applecan.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const Variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100 },
};

const MiddleSection = () => {
  const control1 = useAnimation();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView1) {
      control1.start("visible");
    } else {
      control1.start("hidden");
    }
  }, [inView1, control1]);
  return (
    <>
      <section className="overflow-hidden padding-x pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-darkBlack dark:bg-dark">
        <motion.div
          ref={ref1}
          variants={Variant}
          initial="hidden"
          animate={control1}
          className="container mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center ">
            <div className="w-full px-4 lg:w-5/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full  xl:w-1/2">
                  <div className="py-3 sm:py-4 flex justify-center items-center">
                    <img
                      src={applecan}
                      alt="can"
                      className="lg:w-full w-52 rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/3 xl:w-6/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-yellowGlight">
                  Hazolt
                </span>
                <h2 className="mb-5 text-3xl uppercase font-bold text-dark dark:text-white sm:text-6xl">
                  Set the beast <span className="text-yellowGreen">free!</span>
                </h2>
                <p className="mb-5 text-2xl text-body-color text-zinc-300 font-palanquin">
                  Pop the top on a Hazolt and awaken your inner dynamo!
                </p>
                <Link to={"/products"}>
                  <button className="text-black bg-gradient-to-br btnHover mt-4 from-yellowGlight to-green-500 transform skew-x-12 font-semibold py-2 px-7  shadow-md hover:from-green-500 hover:to-green-600 hover:shadow-lg transition-colors duration-300">
                    View All Drinks
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default MiddleSection;
