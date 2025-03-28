"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FiEye, FiEyeOff, FiMail } from "react-icons/fi";
import Image from "next/image";
import { Contact, MailIcon } from "@/components/icons";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.post('/api/auth/login', data);
      toast.success("Login successful!");
      setTimeout(() => {
        router.push("/");
      }, 2000);

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Login failed. Please try again.");
      } else if (error.request) {
        toast.error("No response from server. Please check your connection.");
      } else {
        // console.error("Error during login:", error.message);
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };



const handleForgotPassword = async (data) => {
  try {
    await axios.post("/api/auth/forgot-password", data);
    toast.success("Reset link sent to your email!");
    setIsModalOpen(false);
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to send reset link.");
  }
};

  return (
    <main className="bg-white flex  pt-36 2xl:pt-48 justify-center md:justify-between  gap-4 py-8 px-4  md:px-10 lg:px-20 min-h-screen items-center">
      <div className="w-full max-w-md -mt-50">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl font-bold text-red_republic mb-16 font-almarena-bold">
          Sign In
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
<div className="mb-4">
  <label
    htmlFor="email"
    className="block text-sm 2xl:text-2xl font-medium text-[#061448] mb-1 font-inter"
  >
    Your Email
  </label>
  <div className="relative">
    {/* Email Icon */}
    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
      <MailIcon/>
    </div>

    {/* Input Field */}
    <input
      id="email"
      type="email"
      placeholder="Email"
      className={`w-full pl-10 pr-4 py-2 2xl:pl-14 2xl:pr-6 2xl:py-4 2xl:text-2xl bg-red_shimmer rounded-md ${
        errors.email ? "border-red-500" : ""
      }`}
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      })}
    />
  </div>
  {errors.email && (
    <p className="mt-1 text-xs text-red_republic">{errors.email.message}</p>
  )}
</div>
          {/* Password */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm 2xl:text-2xl font-medium text-[#061448] mb-1 font-inter"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className={`w-full px-4 py-2 2xl:px-6  2xl:py-4 2xl:text-2xl bg-red_shimmer rounded-md pr-10  ${
                  errors.password ? "" : ""
                }`}
                {...register("password", { required: "Password is required" })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff className="h-5 w-5 text-red_reign" />
                ) : (
                  <FiEye className="h-5 w-5 text-red_reign" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red_republic">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-start mb-6">
          <button type="button" className="text-sm 2xl:text-2xl text-red_reign hover:underline font-inter" onClick={() => setIsModalOpen(true)}>Forgot Password?</button>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm 2xl:text-2xl mb-10 text-red_reign font-inter">
              Don&apos;t have an account?{" "}
              <Link href="/sign_up" className="text-baragon_brown hover:underline">
                Sign Up
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-red_republic text-white px-4 py-2 2xl:px-6  2xl:py-4 2xl:text-2xl rounded-full  transition duration-200 disabled:cursor-not-allowed disabled:bg-red-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging In..." : "Log In"}
          </button>
        </form>
      </div>

      <div className="hidden md:flex relative  w-full md:h-[95vh] lg:h-[105vh]  justify-center items-center">
        <Image
          src="/assets/Login_Image.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
        <button className="absolute md:bottom-28 lg:bottom-16 lg:right-32 xl:right-52 rounded-md px-4 py-2 2xl:px-6  2xl:py-4 2xl:text-2xl bg-red_reign text-white flex items-center gap-2 font-inter font-semibold">
          <Contact />
          Support
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0  flex justify-center items-center">
          <div className="w-full h-full bg-black opacity-50 absolute" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-10">
            <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
            <form onSubmit={handleSubmit(handleForgotPassword)}>
              <label className="block mb-2">Enter your email:</label>
              <input type="email" {...register("email", { required: "Email is required" })} className="w-full p-2 border rounded" placeholder="Your email" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              <div className="flex justify-between mt-4">
                <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded">Send Reset Link</button>
              </div>
            </form>
          </div>
        </div>
      )}
       <Toaster />
     </main>
   );
 };

export default SignInForm;

