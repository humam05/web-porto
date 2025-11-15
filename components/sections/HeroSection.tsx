"use client";

import { motion } from "framer-motion";
import Orb from "../Orb";

export default function HeroSection() {
  return (
    <section className="fullpage-section relative bg-black">
      {/* Orb sebagai latar belakang — tetap interaktif */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={200}
          forceHoverState={false}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>

      {/* Konten teks — biar hover tembus */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto"
        style={{ pointerEvents: "none" }} // 🔥 INI KUNCI!
      >

        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white">
          Fata Humam Asadillah
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-2">Web Developer</p>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mt-6">
          From ideas that once lived only in memory —<br />
          now rendered into worlds you can see, feel, and interact with.
        </p>
      </motion.div>
    </section>
  );
}
