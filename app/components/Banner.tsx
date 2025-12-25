
"use client";

import { Play, Info } from "lucide-react";
import { Movie } from "../data";
import { motion } from "framer-motion";

interface BannerProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
}

export default function Banner({ movie, onPlay }: BannerProps) {
  return (
    <header className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-side-gradient" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl space-y-4"
        >
          <span className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
            Featured {movie.type === 'movie' ? 'Movie' : 'TV Show'}
          </span>
          <h1 className="text-4xl font-black text-white md:text-6xl lg:text-7xl">
            {movie.title}
          </h1>
          <p className="line-clamp-3 text-sm leading-relaxed text-zinc-300 md:text-lg">
            {movie.overview}
          </p>
          
          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={() => onPlay(movie)}
              className="flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-black transition hover:bg-zinc-200 active:scale-95"
            >
              <Play className="h-5 w-5 fill-black" />
              Watch Now
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-zinc-500/40 px-8 py-3 font-bold text-white backdrop-blur-md transition hover:bg-zinc-500/60 active:scale-95">
              <Info className="h-5 w-5" />
              More Info
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md md:right-12">
        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
        {movie.vote_average.toFixed(1)} TMDB Rating
      </div>
    </header>
  );
}
