
import Image from 'next/image'
import React from 'react'
import { playfair } from '../layout'
import { getCollection } from './../../lib/db.js';
import CartButton from './../../components/CartButton';
import { NextResponse } from 'next/server';

const page = async (props) => {

  const { id } = await props.params;
  const decodedName = decodeURIComponent(id);
  console.log(decodedName);

  const mealCollection = await getCollection('meal');
  const meal = await mealCollection.findOne({ name: decodedName });
  console.log(meal);

  async function POST(req) {
    const body = await req.json(); // this will have img, name, price

    const collection = await getCollection('cart'); // your MongoDB cart collection
    const result = await collection.insertOne(body);

    return NextResponse.json({ success: result.acknowledged, id: result.insertedId });
  }

  return (
    <>
      <div className='flex items-center justify-center w-full mt-10'>
            <h1 className={`text-3xl ${playfair.className} font-bold text-[#8a1739]`}>ABC Ventures
            <span className='text-yellow-500'> - City A</span></h1>
      </div>

      <div className='flex w-full items-center justify-center mt-1 pl-88'>
            <p className='uppercase text-sm font-medium text-yellow-500'>the best city view dining</p>
      </div>

      <div className='flex items-center justify-end mt-10 mr-20'>
            <div className='gap-10 flex text-white'>
                <a href="" className='bg-[#D0CFCF] text-[#8a1739] py-1 px-2 rounded-tl-xl rounded-br-xl'>All</a>
                <a href="" className='bg-[#D0CFCF] py-1 px-2 rounded-tl-xl rounded-br-xl'>Breakfast</a>
                <a href="" className='bg-[#D0CFCF] py-1 px-2 rounded-tl-xl rounded-br-xl'>Lunch</a>
                <a href="" className='bg-[#D0CFCF] py-1 px-2 rounded-tl-xl rounded-br-xl'>Dinner</a>
                <a href="" className='bg-[#D0CFCF] py-1 px-2 rounded-tl-xl rounded-br-xl'>Events</a>
                <a href="" className='bg-[#D0CFCF] py-1 px-2 rounded-tl-xl rounded-br-xl'>Offerss</a>
            </div>
      </div>


      <div className='px-28 my-14 flex'>
        <div className="flex flex-col w-[480px] bg-white shadow-lg overflow-hidden">
            <div className="w-full h-[300px] relative">
                <Image
                src={meal.img}
                alt="Main meal"
                fill
                className="object-cover rounded-tl-2xl rounded-br-2xl"
                />
            </div>

            <div className="flex flex-row gap-8 mt-8">
                <div className="relative flex-1 h-[100px]">
                    <Image
                    src={meal.img}
                    alt="meal-Img"
                    fill
                    className="object-cover rounded-tl-2xl rounded-br-2xl"
                    />
                </div>
                <div className="relative flex-1 h-[100px]">
                    <Image
                    src={meal.img}
                    alt="meal-Img"
                    fill
                    className="object-cover rounded-tl-2xl rounded-br-2xl"
                    />
                </div>
                <div className="relative flex-1 h-[100px]">
                    <Image
                    src={meal.img}
                    alt="meal-Img"
                    fill
                    className="object-cover rounded-tl-2xl rounded-br-2xl"
                    />
                </div>
            </div>
        </div>

        <div className='ml-20 w-[600px]'>
            <p className='text-sm text-gray-700 mb-3'>{meal.name}</p>
            <p className='text-sm mb-3'>{meal.desc}</p>

            <hr className="border-t border-yellow-500" />

            <p className='text-[#8a1739] font-semibold mt-4 mb-3'>{meal.category} time</p>

            <p className='text-sm mb-3'>Price - USD {meal.price} net per person</p>
            <p className='text-xs text-gray-700 mb-3'>*Availability: In stock</p>

            <hr className="border-t border-yellow-500" />

            <p className='text-[#8a1739] py-3 font-semibold'>USD {meal.price}</p>

            <hr className="border-t border-yellow-500 mb-3" />

            <p className='text-xs text-gray-700 mb-3'>*Date selection</p>
            <input type='date'/>

            <div className='flex mt-20 justify-end gap-5 relative'>
                <button className='bg-white text-[#8a1739] border border-[#8a1739] rounded-tl-2xl rounded-br-2xl px-3 py-1 cursor-pointer' >View Menu</button>
                
                <CartButton img={meal.img} name={meal.name} price={meal.price}/>
            </div>
        </div>

      </div>
    </>
    
  )
}

export default page