"use client";

import { useState, useCallback } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search, Calendar, MapPin, Sparkles } from "lucide-react";

interface SearchFilters {
  query: string;
  date: string;
  city: string;
}

export default function Hero() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    date: "",
    city: "",
  });

  // Filter handlers
  const handleSearchChange = useCallback((value: string) => {
    setFilters((prev) => ({ ...prev, query: value }));
  }, []);

  const handleDateChange = useCallback((value: string) => {
    setFilters((prev) => ({ ...prev, date: value }));
  }, []);

  const handleCityChange = useCallback((value: string) => {
    setFilters((prev) => ({ ...prev, city: value }));
  }, []);

  const handleSearch = useCallback(() => {
    console.log("Searching with filters:", filters);
  }, [filters]);

  // Handle keyboard navigation
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") handleSearch();
    },
    [handleSearch]
  );

  return (
    <header className="relative">
      <div className="bg-gradient-to-br from-[#0C0C2E] via-[#2E2278] to-[#9B5AD4] rounded-b-3xl border border-black shadow-2xl pb-20 px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center py-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">EventTier</div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-white/30 text-white bg-transparent hover:bg-white/20 hover:text-white transition-all duration-400 rounded-full px-6 cursor-pointer"
              aria-label="Learn how to attend events"
            >
              How To Attend
            </Button>

            <Button
              variant="default"
              className="text-white bg-gray-900 hover:bg-black transition-all duration-400 rounded-full px-6 cursor-pointer"
            >
              Sign In
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center text-white pt-15">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Your trusted <span className="italic font-serif">event</span>{" "}
            platform
          </h1>

          <p className="text-lg sm:text-xl text-white/90 leading-snug max-w-3xl mx-auto mb-8">
            Discover exclusive events tailored to your membership tier. From
            free community gatherings to premium VIP experiences.
          </p>
        </div>
      </div>
    </header>
  );
}
