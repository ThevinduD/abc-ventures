import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MealCard = ( { name, img, desc, price, font } ) => {
  return (
    <div>
        <div className="w-[340px] h-[250px]">
            <Link href={`/${encodeURIComponent(name)}`}>
                <Image
                    src={img}
                    alt="bannerimg"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full rounded-tl-2xl rounded-br-2xl cursor-pointer"
                />
            </Link>
        </div>

        <div className='py-3 flex justify-between'>
            <div className='w-full'>
                <div className='flex justify-between'>
                    <h1 className='font-medium'>{name}</h1>
                    <h1 className='text-yellow-500 font-medium'>USD {price}</h1>
                </div>
                <p className='text-sm text-gray-700'>{desc}</p>
            </div>
        </div>
        
        <div className={`flex justify-between mt-2 ${font.className} text-sm font-medium tracking-wide`}>
            <Link href='#'>
                <button className='bg-white text-[#8a1739] border border-[#8a1739] rounded-tl-2xl rounded-br-2xl px-4 py-2 cursor-pointer'>View Menu</button>
            </Link>
            <Link href={`/${encodeURIComponent(name)}`}>
                <button className='bg-[#8a1739] text-white rounded-tl-2xl rounded-br-2xl px-4 py-2 cursor-pointer'>Reserve Table Now</button>
            </Link>
        </div>
    </div>
  )
}

export default MealCard