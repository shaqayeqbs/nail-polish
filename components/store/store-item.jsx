"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function StoreItem({ id, title, price, description, image }) {
  return (
    <Link
      href={`/nail-polish/${id}`}
      passHref
      className="bg-white rounded-lg p-4 shadow-md"
    >
      <motion.a whileHover={{ scale: 1.1 }}>
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </motion.a>
    </Link>
  );
}

// Export StoreItem component
export default StoreItem;
