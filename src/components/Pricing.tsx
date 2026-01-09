import { motion } from "framer-motion";
const Pricing = () => {
  const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individuals trying out SellSharp.",
    features: [
      "10 AI-generated emails",
      "Basic personalization",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for growing sales teams.",
    features: [
      "Unlimited AI emails",
      "Advanced personalization",
      "Real-time analytics",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large teams with custom needs.",
    features: [
      "Custom AI workflows",
      "Team collaboration",
      "Dedicated account manager",
      "24/7 support",
    ],
    highlighted: false,
  },
];
  return (
    <section className="px-6 md:px-10 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center"
        >
          Simple, Transparent Pricing
        </motion.h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Choose a plan that fits your needs. Upgrade or cancel anytime.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-8 rounded-xl shadow transition ${
                plan.highlighted
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p
                className={`mt-2 ${
                  plan.highlighted ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm"> / month</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span>✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-lg font-medium transition ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

  );
}

  


export default Pricing
