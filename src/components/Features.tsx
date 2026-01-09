import { motion } from "framer-motion";
import businessplan from '../assets/Business Plan-pana.svg'


const Features = () => {
  const features = [
  {
    title: "AI-Powered Personalization",
    description:
      "Generate highly personalized sales emails using AI that adapts tone, context, and intent for every prospect.",
  },
  {
    title: "Smart Lead Insights",
    description:
      "Analyze lead behavior, engagement patterns, and responses to optimize your outreach strategy.",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Track opens, clicks, and replies in real time to understand what works and improve conversions.",
  },
];


  return (
   <section className="px-6 md:px-10 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={businessplan}
            alt="SellSharp Features"
            className="w-full max-w-md h-auto"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">
            Powerful Features to
            <span className="text-blue-600"> Boost Sales</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
            SellSharp combines artificial intelligence and smart analytics
            to help sales teams close more deals with less effort.
          </p>

          <div className="mt-8 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>

  )
}

export default Features
