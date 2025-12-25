
"use client";

import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import PlayerModal from "./components/PlayerModal";
import { MOVIES_DATA, Movie, CATEGORIES, getMoviesByCategory } from "./data";
import { Search } from "lucide-react";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePlay = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePlayer = () => {
    setSelectedMovie(null);
  };

  const featuredMovie = useMemo(() => {
    return MOVIES_DATA[0];
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery) return null;
    return MOVIES_DATA.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar onSearch={setSearchQuery} />
      
      <main className="pb-24">
        {searchQuery ? (
          <div className="pt-32 px-6 md:px-12">
            <div className="flex items-center gap-4 mb-10">
              <Search className="h-6 w-6 text-zinc-500" />
              <h1 className="text-3xl font-bold text-white">
                Search results for "<span className="text-primary">{searchQuery}</span>"
              </h1>
            </div>
            
            {searchResults && searchResults.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {searchResults.map((movie) => (
                  <div key={movie.id} className="space-y-3">
                    <div 
                      className="movie-card relative aspect-video w-full overflow-hidden rounded-md cursor-pointer ring-1 ring-white/10"
                      onClick={() => handlePlay(movie)}
                    >
                      <img
                        src={movie.backdrop_path}
                        alt={movie.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{movie.title}</h3>
                      <p className="text-xs text-zinc-500">{movie.release_date.split('-')[0]} • {movie.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-40 text-center">
                 <p className="max-w-md text-xl text-zinc-500">
                    Your search for "{searchQuery}" did not have any matches.
                 </p>
                 <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-6 text-primary hover:underline"
                 >
                    Clear search
                 </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Banner movie={featuredMovie} onPlay={handlePlay} />
            
            <section className="relative -mt-32 space-y-12 pb-10">
              {CATEGORIES.map((category) => (
                <Row
                  key={category.id}
                  title={category.title}
                  movies={getMoviesByCategory(category.id)}
                  onPlay={handlePlay}
                />
              ))}
            </section>
          </>
        )}
      </main>

      <PlayerModal 
        movie={selectedMovie} 
        onClose={handleClosePlayer} 
      />

      {/* Footer Decoration */}
      <footer className="border-t border-zinc-800 py-10 text-center">
         <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} NETMIRROR. Powered by TMDB & Videasy.
         </p>
      </footer>
    </div>
  );
}
