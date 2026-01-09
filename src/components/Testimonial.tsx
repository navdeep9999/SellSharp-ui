import { motion } from "framer-motion";


const Testimonial = () => {
  const testimonials = [
  {
    name: "Amit Sharma",
    role: "Sales Lead",
    company: "Growthify",
    image: '/men.jpg', // local image
    feedback:
      "SellSharp helped our team write better outreach emails in minutes. We saw a noticeable increase in reply rates within the first week.",
  },
  {
    name: "Priya Patel",
    role: "Startup Founder",
    company: "LaunchNest",
    image: "/girl.jpg",
    feedback:
      "The UI is simple and intuitive. SellSharp saves us hours every week and keeps our messaging consistent and professional.",
  },
  {
    name: "Rahul Verma",
    role: "Marketing Manager",
    company: "LeadBoost",
    image: "/men2.jpg",
    feedback:
      "AI-powered personalization makes a huge difference. SellSharp is now a core part of our sales workflow.",
  },
];

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
          What Our Customers Say
        </motion.h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Real feedback from teams using SellSharp to improve sales outreach.
        </p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                “{item.feedback}”
              </p>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>


  );
}

  


export default Testimonial
