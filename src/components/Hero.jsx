import Link from 'next/link'
import React from 'react'

const Hero = ( { playfair, poppins } ) => {
  return (
    <div className='flex flex-col w-full h-[450px] bg-cover bg-center items-center justify-center' style={{ backgroundImage: "url('https://res.cloudinary.com/dsb7osiry/image/upload/v1759137612/Bannerimg_1_fckxfx.png')" }}>
        <div className='flex text-sm items-center justify-center text-black w-[80%] mt-14'>
            <select name="Restaurant" id="" className='w-full bg-white p-3 rounded-tl-2xl border-r-1 border-yellow-500'>
                <option value="">ABC Ventures - City A</option>
                <option value="">ABC Ventures - City B</option>
                <option value="">ABC Ventures - City C</option>
            </select>
            <select name="Restaurant" id="" className='w-full bg-white p-3 border-r-1 border-yellow-500'>
                <option value="">June 13, 25, Breakfast</option>
                <option value="">B</option>
                <option value="">C</option>
            </select>
            <select name="Restaurant" id="" className='w-full bg-white p-3 border-r-1 border-yellow-500'>
                <option value="">01 Adults</option>
                <option value="">B</option>
                <option value="">C</option>
            </select>
            <select name="Restaurant" id="" className='w-full bg-white p-3'>
                <option value="">Table No - 15</option>
                <option value="">B</option>
                <option value="">C</option>
            </select>
            <button className={`flex-none cursor-pointer bg-[#8a1739] text-white py-[13px] items-center justify-center rounded-br-2xl tracking-wide w-36 text-sm ${playfair.className}`}>
                <p>Reserve Now</p>
            </button>
        </div>

        <div className={`text-white flex w-[75%] mt-12 items-center justify-center ${playfair.className} tracking-wide text-lg`}>
            <Link href='#' className='w-full'>
                <p className='text-center'>ABC Ventures - City A</p>
            </Link>
            <Link href='#' className='w-full'>
                <p className='text-center'>ABC Ventures - City B</p>
            </Link>
            <Link href='#' className='w-full'>
                <p className='text-center'>ABC Ventures - City C</p>
            </Link>
            <Link href='#' className='w-full'>
                <p className='text-center'>ABC Ventures - City D</p>
            </Link>
        </div>
        
    </div>
  )
}

export default Hero