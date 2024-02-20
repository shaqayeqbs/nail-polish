"use client";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCartStore from "@/store/cart-sotre";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import Link from "next/link";

function BasketPage() {
  const { cartItems, addToCart, removeFromCart } = useCartStore();

  console.log(cartItems, "dddddd");
  // Function to handle the payment process
  const handlePayment = () => {
    // Add your payment logic here
    alert("Proceeding to payment...");
  };
  return (
    <div className="min-h-[400px] md:max-w-[50%] mx-auto p-4 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">سبد خرید</h1>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md md:flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="mt-4 justify-center  flex items-center  space-x-4">
                <div className="flex justify-center ml-5 items-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 mx-1 font-bold"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="text-green-500 font-bold"
                  >
                    <FaPlusCircle />
                  </button>
                </div>
                <div className="text-lg font-bold">
                  <span className="mx-1">{item.price}</span>
                  تومان
                </div>
                <div className="text-lg font-bold">x{item.quantity}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[200px]">
          <p className="text-gray-600 text-lg font-bold">
            سبد خرید شما خالی است.
          </p>
          <Link href="/" className="mt-4 underline">
            خرید
          </Link>
        </div>
      )}

      {/* Payment Section */}
      {cartItems.length > 0 && (
        <div className="mt-8">
          <button
            onClick={handlePayment}
            className="bg-green-500 w-full text-white px-4 py-2 rounded"
          >
            پرداخت
          </button>
        </div>
      )}
    </div>
  );
}

export default BasketPage;
