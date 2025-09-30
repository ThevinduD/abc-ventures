import Link from 'next/link';
import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";

const Header = ( { playfair, poppins }) => {
  return (
    <div className='w-full flex justify-between py-8 px-10 absolute top-0 left-0 text-white'>
        <div className={`section-1 ${playfair.className} cursor-pointer`}>
            <Link href='/'>
                <div>
                    <h2 className='text-3xl'>
                        A &nbsp; B &nbsp; C
                    </h2>
                </div>
                <div className='text-xs' style={{ fontSize: '0.6rem', letterSpacing: '0.80em' }}>
                    VENTURES
                </div>
            </Link>
        </div>

        <div className={`section-2 flex gap-10 text-sm justify-center tracking-wide items-center ${playfair.className}`}>
            <a href="/" className='hover:text-[#8a1739] hover:font-medium'>Home</a>
            <a href="" className='hover:text-[#8a1739] hover:font-medium'>About</a>
            <a href="" className='hover:text-[#8a1739] hover:font-medium'>Restaurant</a>
            <a href="" className='hover:text-[#8a1739] hover:font-medium'>Services</a>
            <a href="" className='hover:text-[#8a1739] hover:font-medium'>Contact</a>
        </div>
        <div>
            <Link href='cart'>
                <button className='flex cursor-pointer bg-[#8a1739] text-white px-4 py-2 gap-2 items-center justify-center rounded-tl-2xl rounded-br-2xl'>
                    <FaShoppingBasket/>
                    <p className={`${poppins.className} text-sm tracking-wide`}>0 items</p>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Header