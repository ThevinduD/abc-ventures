'use client';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";   // Location
import { MdEmail } from "react-icons/md";          // Email
import { FaPhoneAlt } from "react-icons/fa";       // Phone

const Contact = () => {
  return (
    <div className='px-20 mt-32 flex w-full justify-around'>
        <div className='max-w-[350px] px-5'>
            <div className='text-yellow-500'>
                <h1 className='text-4xl'><span className='text-[#8a1739]'>Get</span> in Touch</h1>
                <p className='uppercase mt-2 font-semibold flex items-center justify-end'>connect with us</p>
            </div>
            <div className='mt-6'>
                <p className='text-sm'>Ready to experience the finest in hospitality? <br /> Contact us to learn more about our restuarants, <br /> services or partnership opportunities</p>
            </div>
            <div className='mt-6'>
                <div className='flex gap-8 items-center p-5'>
                    <div>
                        <FaLocationDot className='text-3xl'/>
                    </div>
                    <div>
                        <p>Visit Us</p>
                        <p className='text-sm'>City, Country</p>
                    </div>
                </div>
                <div className='flex gap-8 items-center p-5'>
                    <div>
                        <MdEmail className='text-3xl'/>
                    </div>
                    <div>
                        <p>Email Us</p>
                        <p className='text-sm'>ABC@info.com</p>
                    </div>
                </div>
                <div className='flex gap-8 items-center p-5'>
                    <div>
                        <FaPhoneAlt className='text-3xl'/>
                    </div>
                    <div>
                        <p>Call Us</p>
                        <p className='text-sm'>0759498916</p>
                    </div>
                </div>
            </div>
        </div>


        <div className='ml-20 py-10 px-5'>
            <h1 className='text-lg'>Send your message</h1>
            <div className='flex mt-2 gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor="" className='py-1'>Full name</label>
                    <input id='name' type="text" placeholder='name' className='bg-gray-200 w-60 p-2 rounded-tl-2xl rounded-br-2xl text-sm'/>
                </div>
                
                <div className='flex flex-col'>
                    <label htmlFor="" className='py-1'>Email</label>
                    <input id='email' type="text" placeholder='Email' className='bg-gray-200 w-60 p-2 rounded-tl-2xl rounded-br-2xl text-sm'/>
                </div>
            </div>

            <div className='flex flex-col mt-3'>
                <label htmlFor="">Subject</label>
                <input id='subject' type="text" className='bg-gray-200 w-full p-2 rounded-tl-2xl rounded-br-2xl text-sm' placeholder='subject'/>
            </div>

            <div className='flex flex-col mt-3'>
                <label htmlFor="">Message</label>
                <textarea id='message' type="text" className='bg-gray-200 w-full p-2 h-32 rounded-tl-2xl rounded-br-2xl text-sm' placeholder='message'/>
            </div>
            <div className='flex justify-end mt-6'>
                <button
                    onClick={() => {
                        const name = document.getElementById('name').value;
                        const email = document.getElementById('email').value;
                        const subject = document.getElementById('subject').value;
                        const message = document.getElementById('message').value;

                        window.location.href = `mailto:thevindund@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
                        )}`;
                    }}
                    className='bg-[#8a1739] py-2 px-3 text-white rounded-tl-2xl rounded-br-2xl'
                >
                    Send Message
                </button>
            </div>
        </div>
    </div>
  )
}

export default Contact