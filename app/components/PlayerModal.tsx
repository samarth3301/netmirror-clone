
"use client";

import { X, Maximize2, Minimize2, Share2 } from "lucide-react";
import { Movie } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PlayerModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export default function PlayerModal({ movie, onClose }: PlayerModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (movie) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [movie]);

  if (!movie) return null;

  const playerUrl = movie.type === 'movie' 
    ? `https://player.videasy.net/movie/${movie.id}?color=8B5CF6&overlay=true`
    : `https://player.videasy.net/tv/${movie.id}/1/1?color=8B5CF6&overlay=true`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center modal-overlay p-4 md:p-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10"
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div>
              <h2 className="text-xl font-bold text-white">{movie.title}</h2>
              <p className="text-xs text-zinc-400">Streaming via Videasy</p>
            </div>
            <div className="flex items-center gap-4">
               <button className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
                <Share2 className="h-5 w-5" />
              </button>
              <button 
                onClick={onClose}
                className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Iframe */}
          <iframe
            src={playerUrl}
            className="h-full w-full border-0"
            allowFullScreen
            scrolling="no"
          />

          {/* Controls Bar (Visual only, to match UI) */}
          <div className="absolute bottom-4 left-6 right-6 z-10 hidden flex-row items-center justify-center rounded-full bg-white/5 px-6 py-3 backdrop-blur-xl md:flex">
             <span className="text-xs font-semibold text-zinc-400">
                Enjoy {movie.title} in HD • Netflix Clone Preview
             </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
