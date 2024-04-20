import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Variant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -100 },
};
const Variant2 = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100 },
};

const Card = ({ product }) => {
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
      <div className="bg-darkBlack border-2 border-zinc-700 pb-16">
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:padding-x">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Image Column */}
            <motion.div
              ref={ref1}
              variants={Variant}
              initial="hidden"
              animate={control1}
              className="md:w-1/3 md:order-1"
            >
              <img
                src={product.image}
                alt="About us"
                className="w-24 md:w-44 lg:w-56 btnHover rounded-lg shadow-lg"
              />
            </motion.div>
            {/* Text Column */}
            <motion.div
              ref={ref1}
              variants={Variant2}
              initial="hidden"
              animate={control1}
              className="md:w-1/2 md:order-2 px-3 pt-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellowGlight font-montserrat mb-4 relative">
                {product.name}
                <span className="absolute sm:block hidden -bottom-3 left-0 h-1 w-full bg-green-500"></span>
              </h2>

              <p className="text-lg text-gray-300 mt-6 leading-7 mb-6">
                {product.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
