import React from "react";

function ContactUs() {
  const contactInfo = {
    address: "1234 Main Street, City, Country",
    email: "info@example.com",
    phone: "+1 123-456-7890",
  };

  return (
    <div className="container max-w-[90%] !text-right mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-8 text-center">تماس با ما</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mb-2">آدرس</h3>
          <p>{contactInfo.address}</p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mb-2">ایمیل</h3>
          <p>{contactInfo.email}</p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-2xl font-semibold mb-2">تلفن</h3>
          <p>{contactInfo.phone}</p>
        </div>
      </div>

      <form className="mt-8">
        <label className="block mb-4">
          نام و نام خانوادگی:
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="نام و نام خانوادگی خود را وارد کنید"
          />
        </label>
        <label className="block mb-4">
          ایمیل:
          <input
            type="email"
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="آدرس ایمیل خود را وارد کنید"
          />
        </label>
        <label className="block mb-4">
          پیام:
          <textarea
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="پیام خود را وارد کنید"
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-4 rounded hover:bg-blue-600 transition duration-300"
        >
          ارسال پیام
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
