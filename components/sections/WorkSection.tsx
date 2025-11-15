// src/components/sections/WorkSection.tsx
'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: "Online Learning Platform",
    company: "PTPN IV Regional V (BUMN Merdeka Internship)",
    description: "sebuah aplikasi pembelajaran online berbasis web dimana peserta dapat membaca, menonton, mengerjakan pre-test dan post-test, jika sesuai passing grade dapat mendapatkan sertifikat.",
    tech: ["Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
    imageUrl: "/images/lms.png",
    liveUrl: "https://onlinelearning.reg5palmco.com/",
  },
  {
    title: "Overtime Control System",
    company: "PTPN IV Regional V (BUMN Merdeka Internship)",
    description: "di web ini saya mengembangkan dengan membuat halaman admin dengan tujuan admin dapat mengelola data overtime karyawan dengan mudah.",
    tech: ["Laravel", "MySQL", "HTML/CSS", "Git"],
    imageUrl: "/images/ocs.png",
    liveUrl: "https://ocs.reg5palmco.com/",
  },
  {
    title: "FoodHub – Campus Food Delivery",
    company: "Academic Project",
    description: "Flutter mobile app for campus food ordering with Firebase backend.",
    tech: ["Flutter", "Firebase", "Dart"],
    imageUrl: "/images/food.png",
    githubUrl: "#",
  },
  {
    title: "CATE – Desktop POS System",
    company: "Academic Project",
    description: "Java desktop app for sales and inventory management with SQLite.",
    tech: ["Java", "SQLite", "JavaFX"],
    imageUrl: "/images/cati.png",
    githubUrl: "#",
  },
  {
    title: "Cloud Architecture – High Availability Web Setup",
    company: "System Design Project",
    description: "Designed a scalable cloud infrastructure with a load balancer, 2 web servers (LAMP), 1 database, and phpMyAdmin to handle high traffic while ensuring redundancy and uptime.",
    tech: ["Linux", "Apache", "MySQL", "PHP", "Load Balancing"],
    imageUrl: "/images/deploy.png",
    githubUrl: "#",
  },
];

export default function WorkSection() {
  return (
    <section className="fullpage-section bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-12 text-center">
          My Portfolio
        </h2>

        {/* Grid 2-3 kolom */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}