"use client";

import FormModal from "@/app/components/beam-form-modal";
import { motion } from "framer-motion";
import FramesFormModal from "./components/frames-form-modal";
import { MathPatterns } from "./components/math-patterns";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-gray-900 via-emerald-950 to-teal-900 relative overflow-hidden">
      <MathPatterns />
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 leading-tight"
            >
              FRAMES ANALYSIS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-gray-300"
            >
              Revolutionize your structural engineering calculations with our
              advanced analysis tools.
            </motion.p>

            <FramesFormModal />
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {[
              {
                icon: "🎯",
                title: "Precision Engineering",
                desc: "Highly accurate structural analysis",
                color: "from-teal-500 to-emerald-500",
              },
              {
                icon: "📊",
                title: "Real-Time Insights",
                desc: "Stay ahead with live data visualization",
                color: "from-emerald-400 to-teal-400",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
