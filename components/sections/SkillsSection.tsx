// src/components/sections/SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';
import LiquidEther from '../LiquidEther';

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend & Database",
    items: ["Laravel", "MySQL", "PHP"]
  },
  {
    category: "Animation & Interaction",
    items: ["Framer Motion", "GSAP", "Three.js"]
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Linux", "cPanel", "Vercel", "Figma"]
  }
];

export default function SkillsSection() {
  return (
    <section className="fullpage-section relative bg-black text-black overflow-hidden">
      {/* 🔸 LiquidEther sebagai background penuh */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* 🔹 Overlay gelap tipis biar teks readable */}
      <div className="absolute inset-0 z-10 bg-black/10 pointer-events-none" />

      {/* 🔸 Konten utama — di atas liquid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-20 max-w-4xl w-full mx-auto px-6 py-12"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-light tracking-tight mb-12 text-center text-white"
        >
          Skills & Tools
        </motion.h2>

        <div className="space-y-8">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-lg font-medium text-gray-100 mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.1 + itemIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(4px)",
                      color: "#ffffff",
                      transition: { duration: 0.2 },
                    }}
                    className="px-4 py-2.5 bg-white/10 text-gray-200 rounded-lg text-sm border border-white/20 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}