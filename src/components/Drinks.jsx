import React, { useEffect } from "react";
import cherrycan from "../assets/Images/cherrycan.png";
import applecan from "../assets/Images/applecan.png";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const Variant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -100 },
};
const Drinks = () => {
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
      <h1 className="uppercase flex gap-2 justify-center lg:text-6xl md:text-4xl text-xl py-6 text-white font-extrabold font-montserrat">
        Hazolt ENERGY{" "}
        <span className="text-yellowGreen">
          <Typewriter
            options={{
              strings: ["DRINKS"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
      <motion.div
        ref={ref1}
        variants={Variant}
        initial="hidden"
        animate={control1}
        className="flex justify-center sm:gap-28 mt-9 py-6 gap-10"
      >
        <img
          src={cherrycan}
          alt="cherry can bottle"
          className="w-20 sm:w-32 h-auto hover:scale-110 transform transition duration-300 ease-in-out"
        />
        <img
          src={applecan}
          alt="apple can bottle"
          className="w-20 sm:w-32 h-auto hover:scale-110 transform transition duration-300 ease-in-out"
        />
      </motion.div>
      <div className="flex justify-center py-14">
      <Link to={'/products'}>
        <button
          className="relative bg-black border-2 border-coral-gray hover:border-green-600 text-white font-bold py-2 sm:px-9 px-6 
        rounded-sm transform skew-x-12 hover:-skew-x-12 transition duration-300 ease-in-out"
        >
          <span className="absolute inset-y-0 left-0 bg-yellowGreen w-2"></span>
          View All Drinks
        </button>
        </Link>
      </div>
    </>
  );
};

export default Drinks;
