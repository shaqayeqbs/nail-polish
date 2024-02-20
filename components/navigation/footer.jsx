"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black md:!text-right text-white p-8">
      <div className="container md:text-right mx-auto items-center md:max-w-[80%] flex flex-col md:flex-row justify-between">
        <div className="md:w-1/4 mb-8 md:text-right">
          <h2 className="text-xl ">لوکسوری</h2>
          <p>خیابان اصلی ۱۲۳۴</p>
          <p>شهر، کشور</p>
          <p>کد پستی</p>
          <p>تلفن: +1 123-456-7890</p>
        </div>
        <div className="md:w-1/4 mb-8 md:text-right">
          <h3 className="text-lg font-semibold mb-4">لینک‌های سریع</h3>
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>
              <Link href="/contact-us">ارتباط با ما</Link>
            </li>
            <li>
              <Link href="/">فروشگاه</Link>
            </li>
          </ul>
        </div>
        <div className="m mb-8 text-center">
          <h3 className="text-lg font-semibold mb-4">ما را دنبال کنید</h3>
          <div className="flex space-x-4">
            <div className="mx-3">
              <FaFacebook />
            </div>
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; ۲۰۲۴ شرکت شما. تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
}

export default Footer;
