// src/components/ui/ProjectCard.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagicBento from '../MagicBento';
import { X } from 'lucide-react';

export default function ProjectCard({
  title,
  company,
  description,
  tech,
  imageUrl,
  liveUrl,
  githubUrl
}: {
  title: string;
  company: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Ambil 1 baris pertama dari deskripsi
  const shortDescription = description.split('\n')[0].substring(0, 60) + '...';

  return (
    <>
      {/* Card Kecil */}
      <div onClick={openModal} className="cursor-pointer p-3">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={250}
          particleCount={8}
          glowColor="132, 0, 255"
          className="h-50 w-64 rounded-xl overflow-hidden border border-gray-200"
        >
          <div className="h-full flex flex-col">
            <div className="w-full h-34 overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 bg-gray-50 text-gray-900 text-xs">
              <h3 className="font-medium line-clamp-1">{title}</h3>
              <p className="text-[10px] text-gray-600 mt-1">{company}</p>
              {/* 🔸 Tambahkan deskripsi singkat */}
              <p className="text-[10px] text-gray-700 mt-1 line-clamp-1">
                {shortDescription}
              </p>
            </div>
          </div>
        </MagicBento>
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-xl max-w-2xl w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Foto besar di atas */}
              <div className="w-full h-48 md:h-56 overflow-hidden">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Konten di bawah foto */}
              <div className="p-6 text-black">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
                >
                  <X size={20} />
                </button>

                <h3 className="text-2xl font-medium mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-4">{company}</p>
                <p className="text-gray-700 mb-6">{description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-medium hover:bg-cyan-700 transition"
                    >
                      View Live
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}