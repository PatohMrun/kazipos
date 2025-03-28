"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FiEye, FiEyeOff, FiMail } from "react-icons/fi";
import Image from "next/image";
import { Contact } from "@/components/icons";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    // Check if passwords match
    if (data.password !== data.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Remove confirm_password before sending to backend
      const { confirm_password, ...submitData } = data;
      console.log(submitData);
      

      // Make signup request
      await axios.post('/api/auth/signup', submitData);

      // Show success toast
      toast.success("Account created successfully!");

      // Redirect to sign-in page after 2 seconds
      setTimeout(() => {
        router.push('/sign_in');
      }, 2000);

    } catch (error) {
      console.log(error); 
      // Handle signup errors
      if (error.response) {
        // Backend returned an error response
        toast.error(error.response.data.message || "Signup failed. Please try again.");
      } else if (error.request) {
        // Request was made but no response received
        toast.error("No response from server. Please check your connection.");
      } else {
        // Something else went wrong
        console.error("Error during signup:", error.message);
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };




  return (
    <main className="flex pt-30 2xl:pt-48 justify-center md:justify-between  gap-2 py-8 px-4 sm:px-10 md:px-20 min-h-screen bg-white font-inter">
      <div className="w-full max-w-md 2xl:max-w-2xl">
        <h1 className="text-3xl 2xl:text-6xl text-red_republic mb-16 font-almarena-bold">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div>
            {/* Name Field */}
            <div className="block sm:flex sm:gap-2 ">
              {/* first name */}
              <div className="mb-4">
                <label
                  htmlFor="first_name"
                  className="block text-sm 2xl:text-2xl font-medium text-[#061448] mb-1"
                >
                  First Name
                </label>
                <div className="relative">
                  <input
                    id="first_name"
                    type="text"
                    placeholder="First Name"
                    className={`w-full px-4 py-2 2xl:px-6    2xl:py-4 2xl:text-2xl bg-red_shimmer rounded-md   outline-red_shimmer ${
                      errors.first_name ? "border border-red-500" : ""
                    }`}
                    {...register("first_name", {
                      required: "First Name is required",
                    })}
                  />
                </div>
                {errors.first_name && (
                  <p className="mt-1 text-xs text-red_republic">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              {/* last name */}
              <div className="mb-4">
                <label
                  htmlFor="last_name"
                  className="block text-sm 2xl:text-2xl font-medium text-[#061448] mb-1"
                >
                  Last Name
                </label>
                <div className="relative">
                  <input
                    id="last_name"
                    type="text"
                    placeholder="Last Name"
                    className={`w-full px-4 py-2 2xl:px-6  2xl:py-4 2xl:text-2xl bg-red_shimmer rounded-md   outline-red_shimmer ${
                      errors.last_name ? "border border-red-500" : ""
                    }`}
                    {...register("last_name", {
                      required: "Last Name is required",
                    })}
                  />
                </div>
                {errors.last_name && (
                  <p className="mt-1 text-xs text-red_republic">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm 2xl:text-2xl font-medium text-[#061448] mb-1"
            >
              Your Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="Email"
                className={`w-full px-4 py-2 2xl:px-6  2xl:py-4 2xl:text-2xl bg-red_shimmer rounded-md   outline-red_shimmer ${
                  errors.email ? "border border-red-500" : ""
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
              <p className="mt-1 text-xs text-red_republic">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm 2xl:text-2xl font-medium text-[#061448] mb-1"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`w-full px-4 py-2 2xl:px-6  2xl:py-4 2xl:text-2xl bg-red_shimmer rounded-md pr-10  outline-red_shimmer ${
                  errors.password ? "border border-red-500" : ""
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

          {/* confirm password */}
          <div className="mb-4">
            <label
              htmlFor="confirm_password"
              className="block text-sm 2xl:text-2xl font-medium text-[#061448] mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirm_password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className={`w-full px-4 py-2 2xl:px-6  2xl:py-4 2xl:text-2xl bg-red_shimmer rounded-md pr-10  outline-red_shimmer ${
                  errors.password ? "border border-red-500" : ""
                }`}
                {...register("confirm_password", {
                  required: "Confirm Password is required",
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FiEyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <FiEye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.confirm_password && (
              <p className="mt-1 text-xs text-red_republic">
                {errors.confirm_password.message}
              </p>
            )}
          </div>

          <div className="text-center mt-6">
            <p className="text-sm 2xl:text-2xl mb-10 text-red_reign">
              Already having an account?{" "}
              <Link href="/sign_in" className="text-baragon_brown hover:underline">
                Sign In
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className={`w-full  text-white px-4 py-2 2xl:px-6  2xl:py-4 2xl:text-2xl rounded-full hover:bg-red-700 transition duration-200 ${isSubmitting ? 'bg-red-300':'bg-red_republic' }`}
          disabled={isSubmitting}
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>

      <div className="hidden md:flex relative  w-full h-[95vh]  justify-center items-center">
        <Image
          src="/assets/Login_Image.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
        <button className="absolute md:bottom-28 lg:bottom-16 lg:right-32 2xl:right-80 xl:right-52 rounded-md px-4 py-2 2xl:px-6  2xl:py-4 2xl:text-2xl bg-red_reign text-white flex items-center gap-2 font-inter font-semibold">
          <Contact />
          <Link href="#">Support</Link>
        </button>
      </div>
      <Toaster/>
    </main>
  );
};

export default SignUpForm;

