import hero from '../assets/hero.svg'
import { motion } from "framer-motion";
const Hero = () => {
  const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
  return (
    <div>

        <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ">
            Turn Cold Leads into
            <span className="text-blue-600"> Conversations</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
            SellSharp uses AI to generate highly personalized sales emails
            that increase replies and save hours every week.
          </p>

           <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Start Free Trial
            </button>
            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Watch Demo
            </button>
           </motion.div>

          <p className="mt-4 text-sm text-gray-500">
            No credit card required
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
       <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <img className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto"
        src={hero}
        alt="hero"
      />
          </motion.div>
      </div>
       <div className="flex justify-center gap-10 px-50 ">
              <img src="https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg" />
              <img src="https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" />
              <img src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" />
              <img src="https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg" />
            </div>
    </section>

    </div>
  )
}

export default Hero
