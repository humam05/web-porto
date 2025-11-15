// src/components/sections/ContactSection.tsx
'use client';

import { motion } from 'framer-motion';
import Particles from '../Particles';

export default function ContactSection() {
  return (
    <section className="fullpage-section w-full h-screen bg-black relative">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#e0e0e0"]}
          particleCount={200}
          particleSpread={8}
          speed={0.05}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full max-w-2xl mx-auto text-center px-4"
        style={{ pointerEvents: 'none' }}
      >
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-white">
          Let’s Connect
        </h2>
        <p className="text-gray-300 mb-8">
          Open to collaborations, internships, or just a chat about web development.
        </p>
        <a
          href="mailto:fatahumamasadillah@gmail.com"
          className="inline-block px-6 py-3 border border-white/50 text-white rounded-full hover:bg-white/10 transition"
          style={{ pointerEvents: 'auto' }}
        >
          Email Me
        </a>
        <div className="mt-8 flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/fatahumamasadillah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
            style={{ pointerEvents: 'auto' }}
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/fatahumam_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
            style={{ pointerEvents: 'auto' }}
          >
            Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
}