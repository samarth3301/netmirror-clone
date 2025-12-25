
"use client";

import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { Movie } from "../data";
import { motion } from "framer-motion";

interface MovieCardProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
}

export default function MovieCard({ movie, onPlay }: MovieCardProps) {
  return (
    <div className="group relative min-w-[200px] cursor-pointer md:min-w-[250px]">
      <div className="movie-card relative aspect-video w-full overflow-hidden rounded-md bg-zinc-900 border border-zinc-800">
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        
        {/* Hover Information Layer */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end bg-black/60 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center gap-2 pb-2">
            <button 
                onClick={(e) => { e.stopPropagation(); onPlay(movie); }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:bg-zinc-200"
            >
              <Play className="h-4 w-4 fill-black text-black" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-500 text-white transition hover:border-white">
              <Plus className="h-4 w-4" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-500 text-white transition hover:border-white">
              <ThumbsUp className="h-4 w-4" />
            </button>
            <div className="ml-auto">
              <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-500 text-white transition hover:border-white">
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white line-clamp-1">{movie.title}</h3>
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <span className="text-green-400">98% Match</span>
              <span className="rounded border border-zinc-500 px-1 text-zinc-400">HD</span>
              <span className="text-zinc-400">{movie.release_date.split('-')[0]}</span>
            </div>
            <p className="text-[10px] text-zinc-300 line-clamp-2">
                {movie.genre.slice(0, 3).join(' • ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
