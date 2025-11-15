// src/components/sections/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';
import ProfileCard from '../ProfileCard';
import DarkVeil from '../DarkVeil';

export default function AboutSection() {
  return (
    <section className="relative fullpage-section overflow-hidden bg-black text-white">
      {/* 🔸 DarkVeil — sebagai background penuh */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>

      {/* 🔹 Konten utama — teks & card */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center px-6 md:px-12 gap-12 py-12">
        {/* ──────────────── TEKS KIRI ──────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-[1.06rem]">
            I’m Fata Humam Asadillah, a fresh graduate of D3 Informatics Engineering (2025) from Majalengka, West Java.
          </p>

          <p className="text-gray-300 leading-relaxed text-[1.06rem]">
            During my studies, I’ve sharpened my technical skills by building web projects using HTML, CSS, JavaScript, Laravel, and Git.
          </p>

          <p className="text-gray-300 leading-relaxed text-[1.06rem]">
            From September 2024 to March 2025, I joined the BUMN Merdeka Internship Program at <strong className="text-white">PTPN IV</strong> as an IT Programmer.  
            The lanyard I wore each day became a symbol of responsibility, growth, and my first step into the professional world.
          </p>

          <p className="text-gray-300 leading-relaxed text-[1.06rem]">
            Raised far from my parents since childhood, I learned to be independent, proactive, and responsible — qualities that shape the way I work and grow.
          </p>
        </motion.div>

        {/* ──────────────── PROFILE CARD — KANAN ──────────────── */}
        <div className="md:w-1/2 flex justify-center items-start">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full max-w-xs"
          >
            <ProfileCard
              name="Fata Humam Asadillah"
              title="Web Developer"
              handle="fatahumam_"
              status="Available"
              contactText="Say Hello"
              avatarUrl="/images/humamm.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.location.href = 'mailto:fatahumamasadillah@gmail.com'}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}