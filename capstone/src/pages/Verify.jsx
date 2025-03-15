import React from 'react'
import Image from "../assets/mdvImage.jpg"
import {useState, useEffect} from "react"
function Verify() {
  const [otp, setOtp] = useState(null);
  const [error, setError] = useState(null);
  const handleLogin = async () => {
    try {
      // Validate OTP
      const response = await fetch('https://example.com/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({otp}),
      });
      if (!response.ok) {
        throw new Error('Failed to validate OTP');
      }
      // If OTP is valid, redirect to home page
      window.location.href = '/';
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className=' w-180 h-100 flex flex-row bg-white rounded-xl shadow-[0px_0px_6px_6px_rgba(0,_0,_0,_0.1)]'>
        <div className='image-container flex justify-center items-center h-full w-170 bg-cover opacity-70 rounded-l-xl' style={{backgroundImage: `url(${Image})`}}>
            <h1 className='text-3xl text-center text-white font-bold'>MDV Inflatables and Catering</h1>
        </div>
        <div className='flex p-5  flex-col justify-center items-center w-full'>
            <h1 className='text-2xl font-semibold'>One more step</h1>
            <form action="" className=' p-5 pt-10 h-full w-full'>
                <div className='flex flex-col p-3'>
                    <div>
                      <div className='text-red-500 text-sm text-center'>{error}</div>
                    </div>
                    <input type="number" id="otp" name="otp" placeholder='Enter your OTP here' className='border-2 rounded-full h-10 p-3' required />
                    <div className='flex flex-row justify-between p-1 items-center'>
                      <p>Check your email</p>
                      <button className='p-1 pl-2 pr-2  bg-blue-500 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-[300ms] ease-in'>Resend</button>
                    </div>
                </div>
                <div className='flex justify-center items-center p-5'>
                    <button type="submit" className='bg-blue-500 p-2 pl-15 pr-15 rounded-full text-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-[300ms] ease-in'>Verify</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Verify
