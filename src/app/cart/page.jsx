export const revalidate = 0;

import Image from 'next/image'
import React from 'react'
import { FaTrashCan } from 'react-icons/fa6'
import { playfair } from '../layout'
import { getCollection } from './../../lib/db.js'

const page = async () => {
    const cartCollection = await getCollection('cart', { cache: 'no-store' });
        
    let cart = [];
    if (cartCollection) cart = await cartCollection.find({}).toArray();
     

  return (
    <div className='flex flex-col gap-5 p-20'>

        {cart.map((meal) => (
            <div key={meal._id} className='flex gap-20 justify-around'>
                <div className='w-[120px] flex'>
                    <Image
                        src={meal.img}
                        alt="bannerimg"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full rounded-tl-2xl rounded-br-2xl"
                    />
                </div>

                <div className='flex flex-col justify-center gap-2'>
                    <h1 className={`text-[#8a1739] ${playfair.className} font-semibold tracking-wide text-lg`}>{meal.name}</h1>
                    <p className='text-sm'>01 Adults x USD {meal.price}</p>
                </div>

                <div className='flex flex-col justify-center gap-2'>
                    <p className='text-xs text-gray-700'>*Ticket type and quantity</p>
                    <p className='text-sm '>Adult Ticket x 01</p>
                </div>

                <div className='flex flex-col justify-center gap-2'>
                    <p className='text-xs text-gray-700'>*Date</p>
                    <input type="date" className='text-sm' />
                </div>

                <div className='flex flex-col items-center justify-center gap-2 cursor-pointer'>
                    <FaTrashCan/>
                    <p className='text-[#8a1739] text-sm font-medium'>Remove</p>
                </div>
            </div>
        ))}
        

        <hr className="border-t border-yellow-500" />

        <div className='flex justify-end w-full'>
            {/* <p className='font-semibold'>Total &nbsp; - &nbsp; 1000 USD</p> */}
        </div>

        <div className='flex w-full justify-end'>
            <button className={`bg-[#8a1739] text-white rounded-tl-2xl rounded-br-2xl w-32 py-2 ${playfair.className}`}>Checkout</button>
        </div>
    </div>
  )
}

export default page