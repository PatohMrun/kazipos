'use client'
import { useState } from 'react';
import { Send } from './icons';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [focused, setFocused] = useState({
    email: false,
    firstName: false,
    lastName: false,
    phone: false
  });
  const [agreed, setAgreed] = useState(false);

  const handleFocus = (field) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    if (!field) {
      setFocused(prev => ({ ...prev, [field]: false }));
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/contact', data);
      toast.success('Message sent successfully!');
      reset();
      setAgreed(false);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-[16px] 2xl:space-y-[36px] min-h-screen md:pt-30 2xl:pt-44 bg-white px-[15px] md:px-[20px] lg:px-[78px] py-[65px] font-helvetica-regular text-neutral-dark"
    >
      <h3 className='text-[28px] md:text-[32px] 2xl:text-[3rem] font-helvetica-semibold'>Talk to our experts</h3>
      
      <div className="relative">
        <input
          id="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          type="email"
          className="peer w-full border border-gray-300 rounded-[10px] py-[20px] text-[14px] 2xl:text-[1.2rem] md:text-tiny px-4 pb-2 focus:outline-none focus:ring-2  focus:border-transparent"
          placeholder=" "
          onFocus={() => handleFocus('email')}
          onBlur={() => handleBlur('email')}
        />
        <label 
          htmlFor="email"
          className={`absolute text-[16px] 2xl:text-[1.4rem] ${
            focused.email ? 'text-xs -translate-y-3 ' : 'text-gray-500 translate-y-0'
          } left-4 top-4 transition-all duration-200 transform origin-left
          peer-focus:text-xs peer-focus:-translate-y-3 peer-focus: font-helvetica font-400`}
        >
          Work Email Address*
        </label>
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-1">
          <input
            id="firstName"
            {...register('firstName', { required: 'First name is required' })}
            type="text"
            className="peer w-full border border-gray-300 rounded-[10px] py-[20px] text-[14px] 2xl:text-[1.4rem] md:text-tiny px-4 pt-6 pb-2 focus:outline-none focus:ring-2  focus:border-transparent"
            placeholder=" "
            onFocus={() => handleFocus('firstName')}
            onBlur={() => handleBlur('firstName')}
          />
          <label 
            htmlFor="firstName"
            className={`absolute text-tiny 2xl:text-[1.4rem] ${
              focused.firstName ? 'text-xs 2xl:text-[1.4rem] -translate-y-3 ' : 'text-gray-500 translate-y-0'
            } left-4 top-4 transition-all duration-200 transform origin-left
            peer-focus:text-xs peer-focus:-translate-y-3 peer-focus:`}
          >
            First Name*
          </label>
          {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>}
        </div>

        <div className="relative flex-1">
          <input
            id="lastName"
            {...register('lastName', { required: 'Last name is required' })}
            type="text"
            className="peer w-full border border-gray-300 rounded-[10px] py-[20px] text-[14px] 2xl:text-[1.4rem] md:text-tiny px-4 pt-6 pb-2 focus:outline-none focus:ring-2  focus:border-transparent"
            placeholder=" "
            onFocus={() => handleFocus('lastName')}
            onBlur={() => handleBlur('lastName')}
          />
          <label 
            htmlFor="lastName"
            className={`absolute text-tiny 2xl:text-[1.4rem] ${
              focused.lastName ? 'text-xs 2xl:text-[1.4rem] -translate-y-3 ' : 'text-gray-500 translate-y-0'
            } left-4 top-4 transition-all duration-200 transform origin-left
            peer-focus:text-xs peer-focus:-translate-y-3 peer-focus:`}
          >
            Last Name*
          </label>
          {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="relative">
        <input
          id="phone"
          {...register('phone', { required: 'Phone number is required' })}
          type="tel"
          className="peer w-full border border-gray-300 rounded-[10px] py-[20px] text-[14px] 2xl:text-[1.2rem] md:text-tiny px-4 pt-6 pb-2 focus:outline-none focus:ring-2  focus:border-transparent"
          placeholder=" "
          onFocus={() => handleFocus('phone')}
          onBlur={() => handleBlur('phone')}
        />
        <label 
          htmlFor="phone"
          className={`absolute text-tiny 2xl:text-[1.4rem] ${
            focused.phone ? 'text-xs 2xl:text-[1.4rem] -translate-y-3 ' : 'text-gray-500 translate-y-0'
          } left-4 top-4 transition-all duration-200 transform origin-left
          peer-focus:text-xs peer-focus:-translate-y-3 peer-focus:`}
        >
          Phone Number*
        </label>
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div className="relative">
        <textarea
          id="message"
          {...register('message')}
          rows="6"
          className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 text-[14px] 2xl:text-[1.5rem] text-neutral-dark md:text-tiny  focus:border-transparent"
          placeholder="Message"
        ></textarea>
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="agreement"
            type="checkbox"
            className="h-4 w-4 2xl:h-7 2xl:w-7 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
        </div>
        <div className="ml-3 text-sm 2xl:text-[1.5rem] font-helvetica-regular">
          <label htmlFor="agreement" className="font-medium text-gray-700">
            I agree to receive communications from KaziPOS
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!agreed || isSubmitting}
          className="bg-red-800 text-white font-helvetica text-tiny 2xl:text-[1.9rem] px-6 py-2 2xl:px-8 2xl:py-4 rounded-full flex items-center font-400 hover:bg-red-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className='flex items-center gap-2 2xl:gap-4 font-helvetica-regular'>
            {isSubmitting ? 'Sending...' : 'Send'}
            <Send/>
          </span>
        </button>
      </div>
      <Toaster/>
    </form>
  );
}