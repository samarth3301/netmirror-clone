
"use client";

import { Search, Bell, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onSearch: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all duration-500 md:px-12",
        isScrolled ? "glass-header scrolled shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-black tracking-tighter text-primary">
          NET<span className="text-white">MIRROR</span>
        </h1>
        <ul className="hidden gap-6 text-sm font-medium text-zinc-300 md:flex">
          <li className="cursor-pointer transition hover:text-white">Home</li>
          <li className="cursor-pointer transition hover:text-white">TV Shows</li>
          <li className="cursor-pointer transition hover:text-white">Movies</li>
          <li className="cursor-pointer transition hover:text-white">New & Popular</li>
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <div className={cn(
          "flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300",
          isSearchOpen ? "bg-zinc-800 ring-1 ring-zinc-700" : "bg-transparent"
        )}>
          <Search 
            className="h-5 w-5 cursor-pointer text-zinc-400 hover:text-white"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          {isSearchOpen && (
            <input
              type="text"
              autoFocus
              placeholder="Titles, people, genres"
              className="bg-transparent text-sm text-white placeholder-zinc-500 outline-none w-40 md:w-60"
              value={searchQuery}
              onChange={handleSearchChange}
              onBlur={() => !searchQuery && setIsSearchOpen(false)}
            />
          )}
        </div>
        
        <Bell className="hidden h-5 w-5 cursor-pointer text-zinc-400 transition hover:text-white md:block" />
        
        <div className="h-8 w-8 cursor-pointer overflow-hidden rounded-md border border-zinc-700 transition hover:scale-105">
           <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-xs font-bold text-white">
              SM
           </div>
        </div>
        
        <Menu className="h-6 w-6 cursor-pointer text-white md:hidden" />
      </div>
    </nav>
  );
}
