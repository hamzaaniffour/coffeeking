"use client";
import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";
import Link from "next/link";

interface SearchResult {
  featured_media_url: string;
  id: number;
  title: { rendered: string };
  slug: string;
  featured_media: number;
}

const Search = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchMedia = async () => {
      const mediaPromises = searchResults.map((result) =>
        fetch(
          `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/media/${result.featured_media}`
        ).then((response) => response.json())
      );
      const mediaData = await Promise.all(mediaPromises);
      const updatedResults = searchResults.map((result, index) => ({
        ...result,
        featured_media_url: mediaData[index].source_url,
      }));
      setSearchResults(updatedResults);
      // console.log(updatedResults)
      setLoading(false);
    };

    if (searchResults.length > 0) {
      fetchMedia();
    }
  }, [searchResults]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/posts?search=${query}`
      );
      const data: SearchResult[] = await response.json();
      setSearchResults(data);
      setShowResults(true); // Show the search results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto">
        <h3 className="text-black text-xl text-left font-bold mb-2 uppercase">
          Where do you want to go?
        </h3>
        <form className="" onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block outline-none w-full p-3 pl-10 text-sm text-gray-900 border-2 transition-all border-black rounded bg-gray-50 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Search..."
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute right-[5.5px] bottom-[5.5px] bg-black focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded text-sm px-4 py-2"
            >
              <IoMdSearch className="text-xl font-bold" />
            </button>
          </div>
        </form>
      </div>
      {searchResults.length > 0 && showResults && (
        <div className="fixed inset-0 !z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white absolute left-0 right-0 top-0 bottom-0 px-5 lg:px-0 md:px-5 xl:px-0 py-10 rounded shadow-lg overflow-y-auto">
            <div className="max-w-[1300px] mx-auto">
              <div className="flex justify-end">
                <button
                  className="flex justify-center items-center"
                  onClick={() => setShowResults(false)}
                >
                  <TfiClose className="h-6 w-6 text-gray-400 relative right-4 -top-2 lg:relative lg:right-0 lg:-top-0 xl:relative xl:right-0 xl:-top-0" />
                </button>
              </div>
              <h2 className="text-3xl text-black font-bold mb-1.5">
                Search Results for:
              </h2>
              <p className="text-left text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600 font-bold mb-10">
                {query}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {loading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <div
                        key={index}
                        className="skeleton h-[280px] w-full rounded"
                      ></div>
                    ))
                  : searchResults.map((result) => (
                      <div key={result.id} className="mb-4">
                        {result.featured_media_url && (
                          <Link href={`/blog/${result.slug}`}>
                            <Image
                              src={result.featured_media_url}
                              alt={result.title.rendered}
                              width={400}
                              height={300}
                              className="rounded-lg"
                              layout="responsive"
                              sizes="(max-width: 768px) 100vw, 33vw"
                              quality={100}
                              priority
                              placeholder="blur"
                              blurDataURL={result.featured_media_url}
                            />
                          </Link>
                        )}
                        <h3 className="text-xl text-black transition-all hover:text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600 font-bold leading-[28px] mt-3 mb-3">
                          <Link href={`/blog/${result.slug}`}>{result.title.rendered}</Link>
                        </h3>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
