"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      return toast.error("شماره موبایل خود را وارد کنید");
    }
    // Send SMS with verification code logic would go here
    // For simplicity, let's just toggle isCodeSent state
    setIsCodeSent(true);
    toast.success("کد تایید ارسال شد");
  };

  const handleVerificationCodeSubmit = (e) => {
    e.preventDefault();
    // Verify the verification code logic would go here
    // For simplicity, let's just log the verification code
    console.log("Verification Code:", verificationCode);
    toast.success("ورود موفقیت آمیز بود!");
  };

  const handleBackClick = () => {
    setIsCodeSent(false);
    setVerificationCode(""); // Clear the verification code when going back
  };

  return (
    <div className="flex items-center justify-center min-h-[450px] ">
      <div className="w-full md:w-[26rem] p-8 bg-background rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          ورود به حساب کاربری
        </h2>

        {!isCodeSent ? (
          <form onSubmit={handlePhoneNumberSubmit}>
            <label className="block mb-4">
              شماره تلفن همراه:
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 mb-5 border border-gray-300 rounded"
                placeholder="09xxxxxxxxx"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded"
            >
              دریافت کد تایید
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerificationCodeSubmit}>
            <label className="block mb-4">
              کد تایید:
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full mb-4 p-2 border border-gray-300 rounded"
                placeholder="کد تایید را وارد کنید"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded"
            >
              ورود
            </button>
            <button
              type="button"
              onClick={handleBackClick}
              className="w-full text-sm hover:text-primary mt-4  p-2 rounded"
            >
              شماره را اشتباه وارد کرده اید؟
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
