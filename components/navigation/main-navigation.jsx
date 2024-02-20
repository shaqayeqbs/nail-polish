"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SearchBox from "../search/search-box";
import { FaShoppingBag, FaUser } from "react-icons/fa";

function MainNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="shadow-md z-10 bg-background fixed w-full px-4 sm:px-10 py-2 flex items-center justify-between">
      {/* Mobile Sidebar Button */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-xl text-back focus:outline-none"
        >
          &#9776; {/* Unicode character for the hamburger menu */}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black text-white text-right w-60 z-50"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-xl text-primary focus:outline-none"
              >
                &times; {/* Unicode character for the close icon */}
              </button>
            </div>
            <nav className="flex flex-col items- px-10">
              <Link href="/contact-us" className="hover:text-primary">
                ارتباط با ما
              </Link>
              <Link href="/" className="hover:text-primary my-3">
                محصولات
              </Link>
              {/* Move the SearchBox into the Sidebar for mobile */}
              <div className="mt-3 w-fit">
                <SearchBox />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center">
        <Link href="/contact-us" className="hover:text-primary">
          ارتباط با ما
        </Link>
        <Link href="/" className="hover:text-primary mx-5">
          محصولات
        </Link>
        {/* SearchBox in the main navigation for laptops */}
        <div className="ml-auto">
          <SearchBox />
        </div>
      </nav>

      <div className="flex items-center space-x-4">
        <Link href="/basket" className="text-xl cursor-pointer">
          <FaShoppingBag />
        </Link>
        <Link href="/auth" className="text-xl !mx-3 block cursor-pointer">
          <FaUser />
        </Link>
        <Link href="/" className="text-2xl !mr-5 font-bold">
          Luxury
        </Link>
      </div>
    </div>
  );
}

export default MainNavigation;
