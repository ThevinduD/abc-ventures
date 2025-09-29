import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='p-20 w-full flex justify-between bg-[#8a1739] text-white rounded-tl-4xl gap-10'>
        <div>
            <div>
                <h2 className='text-xl font-bold'>
                    A &nbsp; B &nbsp; C
                </h2>
            </div>
            <div className='text-xs tracking-widest'>
                VENTURES
            </div>

            <p className='text-xs mt-4 text-gray-400'>Ready to experience the finest in hospitality?
            Contact us <br /> to learn more about our restuarants,
            services <br /> or partnership opportunities</p>

            <p className='mt-4'>Connect with us</p>

            <div className='flex gap-5 mt-2'>
                <FaFacebook/>
                <FaInstagram/>
                <FaYoutube/>
            </div>

        </div>



        <div className='flex justify-center gap-10'>
            <div>
                <p>Quick Links</p>
                <div className='flex flex-col'>
                    <a href="">a</a>
                    <a href="">b</a>
                    <a href="">c</a>
                </div>
            </div>
            <div>
                <p>Restaurent Categories</p>
                <div className='flex flex-col'>
                    <a href="">a</a>
                    <a href="">b</a>
                    <a href="">c</a>
                </div>
            </div>
        </div>

        <div className='flex flex-col max-w-[350px]'>
            <h1>Stay Connected</h1>
            <p className='text-xs mt-4 text-gray-400'>Contact us to learn more about our restuarants, services or partnership opportunities</p>
            <input type="text" placeholder='name' className='bg-gray-200 mt-4 w-72 p-2 rounded-tl-2xl rounded-br-2xl text-sm'/>
            <div className='flex justify-end mt-4'>
                <button className='bg-[#8a1739] py-2 px-3 w-30 text-white rounded-tl-2xl rounded-br-2xl border border-white'>
                    Subscribe
                </button>
            </div>
        </div>
    </div>

    
  )
}

export default Footer