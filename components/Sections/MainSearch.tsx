// "use client";
// import React, { useState, useEffect } from "react";
// import { IoSearchOutline } from "react-icons/io5";
// import Image from "next/image";
// import { VscClose } from "react-icons/vsc";
// import { TfiClose } from "react-icons/tfi";
// import Link from "next/link";

// interface SearchResult {
//     featured_media_url: string;
//     id: number;
//     title: { rendered: string };
//     slug: string;
//     featured_media: number;
//   }
  
//   const MainSearch = () => {
//     const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
//     const [query, setQuery] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [showResults, setShowResults] = useState(false);
  
//     useEffect(() => {
//       const fetchMedia = async () => {
//         const mediaPromises = searchResults.map((result) =>
//           fetch(
//             `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/media/${result.featured_media}`
//           ).then((response) => response.json())
//         );
//         const mediaData = await Promise.all(mediaPromises);
//         const updatedResults = searchResults.map((result, index) => ({
//           ...result,
//           featured_media_url: mediaData[index].source_url,
//         }));
//         setSearchResults(updatedResults);
//         setLoading(false);
//       };
  
//       if (searchResults.length > 0) {
//         fetchMedia();
//       }
//     }, [searchResults]);
  
//     useEffect(() => {
//       if (query.length > 0) {
//         const timeoutId = setTimeout(() => {
//           handleSearch();
//         }, 500); // debounce time
  
//         return () => clearTimeout(timeoutId);
//       } else {
//         setSearchResults([]);
//         setShowResults(false);
//       }
//     }, [query]);
  
//     const handleSearch = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URLS}/wp-json/wp/v2/posts?search=${query}`
//         );
//         const data: SearchResult[] = await response.json();
//         setSearchResults(data);
//         setShowResults(true); // Show the search results
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//         setLoading(false);
//       }
//     };

//   return (
//     <div className='max-w-[800px] mx-auto'>
//       <div className='bg-white shadow rounded-lg py-3 w-full'>
//         <div className='flex justify-between items-center gap-2 px-5 border-b-[1px] border-slate-200 mb-5 pb-4'>
//           <div className="w-full">
//             <form className='flex justify-start items-center gap-3 w-full'>
//               <label htmlFor="search"><IoSearchOutline className='text-slate-300' /></label>
//               <input
//                 type="text"
//                 className='w-full bg-transparent outline-none ring:outline-none text-slate-300'
//                 placeholder='Search...'
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//               />
//             </form>
//           </div>
//           <div className=''>
//             <button className='bg-slate-200 h-6 w-6 mask mask-squircle flex justify-center items-center' onClick={() => setQuery('')}>
//               <VscClose className='text-slate-950' />
//             </button>
//           </div>
//         </div>

//         <div className='py-16'>
//           {loading ? (
//             <p className='text-slate-500 text-center'>Loading...</p>
//           ) : searchResults.length > 0 ? (
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2'>
//               {searchResults.map((result) => (
//                 <div key={result.id} className='mb-4 px-5'>
//                   {result.featured_media_url && (
//                     <Link href={`/blog/${result.slug}`}>
//                       <Image
//                         src={result.featured_media_url}
//                         alt={result.title.rendered}
//                         width={400}
//                         height={300}
//                         className='rounded-lg'
//                         layout='responsive'
//                         sizes='(max-width: 768px) 100vw, 33vw'
//                         quality={100}
//                         priority
//                         placeholder='blur'
//                         blurDataURL={result.featured_media_url}
//                       />
//                     </Link>
//                   )}
//                   <h3 className='text-xl text-black transition-all hover:text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600 font-bold leading-[28px] mt-3 mb-3'>
//                     <Link href={`/blog/${result.slug}`}>{result.title.rendered}</Link>
//                   </h3>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className='text-slate-500 text-center'>No recent searches</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainSearch;

import React from 'react'

const MainSearch = () => {
  return (
    <div>MainSearch</div>
  )
}

export default MainSearch