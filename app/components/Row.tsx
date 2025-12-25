
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Movie } from "../data";
import MovieCard from "./MovieCard";

interface RowProps {
  title: string;
  movies: Movie[];
  onPlay: (movie: Movie) => void;
}

export default function Row({ title, movies, onPlay }: RowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: "left" | "right") => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-full space-y-2 px-6 md:px-12">
      <h2 className="w-56 cursor-pointer text-lg font-bold text-zinc-100 transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeft
          className={`absolute left-2 top-0 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        
        <div
          ref={rowRef}
          className="flex items-center gap-4 overflow-x-scroll scrollbar-hide hide-scrollbar px-2 py-4"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onPlay={onPlay} />
          ))}
        </div>

        <ChevronRight
          className="absolute right-2 top-0 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
