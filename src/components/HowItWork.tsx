import { motion } from "framer-motion";
const HowItWork = () => {
  const steps = [
  {
    title: "Connect Your Inbox",
    description:
      "Securely connect your Gmail or Outlook account in seconds. SellSharp syncs your inbox safely so you can send emails directly without switching platforms.",
  },
  {
    title: "Generate AI Emails",
    description:
      "Provide basic details about your lead and campaign goals. Our AI instantly generates personalized, human-like sales emails tailored to each prospect.",
  },
  {
    title: "Send, Track & Optimize",
    description:
      "Launch your campaigns and track opens, replies, and engagement in real time. Use insights to optimize messaging and close more deals faster.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

  return (
   
   <section className="px-6 md:px-10 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center"
        >
          How It Works
        </motion.h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Launch high-converting email campaigns in just three simple steps.
          SellSharp handles the heavy lifting so your sales team can focus on closing deals.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <span className="text-blue-600 font-bold text-lg">
                0{index + 1}
              </span>

              <h3 className="text-xl font-semibold mt-4">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

  );
}
  


export default HowItWork


 
