"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nailPolishData from "@/components/data/nail-polish";
import useCartStore from "@/store/cart-sotre";

function NailPolishDetail() {
  const pathname = usePathname();
  const id = pathname.slice(13);
  const itemId = id ? parseInt(id, 10) : null;

  // Find the corresponding item based on the ID
  const selectedItem = itemId
    ? nailPolishData.find((item) => item.id == itemId)
    : null;

  const { addToCart } = useCartStore();

  // Add item to cart
  const addToCartHandler = () => {
    if (selectedItem) {
      // Update the cart items using setCartItems method
      addToCart(itemId, selectedItem);

      // Display toast notification
      toast.success("محصول به سبد خرید افزوده شد!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container min-h-[400px] p-4 bg-white w-[90%] md:w-[70%] rounded-lg  m-10  mt-8">
      {selectedItem ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:flex items-center  md:text-right lg:grid-cols-3 gap-8"
        >
          <div className="relative  mx-auto mb-4 text-center w-[20rem] h-[22rem]">
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              layout="fill"
              className="object- mx-auto mb-4"
            />
          </div>
          <div className="!w-full">
            <h1 className="text-3xl font-bold mb-2 whi">
              جزئیات ناخن‌پولیش - {selectedItem.title}
            </h1>
            <p className="text-gray-600 mb-4">{selectedItem.description}</p>
            <p className="text-lg font-bold mb-2">
              قیمت: ${selectedItem.price.toFixed(2)}
            </p>
            <button
              onClick={addToCartHandler}
              className="flex mx-auto md:mx-0  my-5 items-center gap-3 text-white bg-black px-4 py-2 rounded"
            >
              <FaShoppingCart className="" />
              افزودن به سبد خرید
            </button>
          </div>
        </motion.div>
      ) : (
        <p>محصول یافت نشد</p>
      )}
      <ToastContainer />
    </div>
  );
}

export default NailPolishDetail;
