"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';

const Signup = () => {
    const [user, setUser]=useState({name:"",email:"",password:""})

    const onSignup=async()=>{
        
    }
  return (
    <div className="justify-center">
      <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
        aria-label="signup-form"
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Sign Up Form</h2>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your email address..."
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-end mb-5 text-slate-400">
          <p>Already have an account?</p>
          <a href="#" className="text-blue-500 underline">
            Sign In
          </a>
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Create an account
        </button>
      </form>
    </div>
  )
}

export default Signup