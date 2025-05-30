import { motion } from "motion/react";
const HeroBanner = () => {
  return (
    <section className="bg-base-100">
      <div
        className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
        bis_skin_checked="1"
      >
        <div
          className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
          bis_skin_checked="1"
        >
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Ac mattis
            <motion.div
              initial={{ scale: 0.5, x: -1200, opacity: 0 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1,
              }}
              className="dark:text-green-600"
            >
              senectus
            </motion.div>
            erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div
            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
            bis_skin_checked="1"
          >
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-green-600 dark:text-gray-50"
            >
              Suspendisse
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              Malesuada
            </a>
          </div>
        </div>
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          bis_skin_checked="1"
        >
          <img
            src="https://mambaui.com/assets/svg/Business_SVG.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
