import React from "react";
import { motion } from "framer-motion";

export default function LuxuryPortfolio() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen font-sans">
      {/* Hero */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          AI Automation Architect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Designing intelligent systems & high-converting AI agents using n8n automation.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-8 py-4 bg-white text-black rounded-2xl shadow-2xl"
        >
          Let’s Work
        </motion.button>
      </section>

      {/* Glass Cards Section */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          "200+ AI Agents Built",
          "2+ Years Experience",
          "Automation Specialist"
        ].map((item) => (
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-xl">
            <h3 className="text-xl">{item}</h3>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <h2 className="text-4xl text-center mb-12">Premium Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "AI Chatbots",
            "WhatsApp Automation",
            "Lead Generation Systems",
            "CRM Automation",
            "API Integrations",
            "Content Automation"
          ].map((service) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-6 bg-black/40">
        <h2 className="text-4xl text-center mb-12">Elite Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            "AI College Assistant",
            "CRIS Multi-Agent System",
            "Smart Price Agent",
            "Auto Posting Engine"
          ].map((project) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-3">{project}</h3>
              <p className="text-gray-400">
                High-performance AI automation system designed for scalability and business growth.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl mb-6">Ready to Automate Your Business?</h2>
        <p className="text-gray-400 mb-8">Let’s build something powerful together.</p>
        <button className="px-10 py-4 bg-white text-black rounded-2xl shadow-xl hover:scale-110 transition">
          Contact Now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500">
        © 2026 AI Automation Portfolio
      </footer>
    </div>
  );
}
