import React from 'react';
import MealCard from './MealCard';
import { getCollection } from './../lib/db.js';

const Body = async ( { playfair }) => {

    const mealCollection = await getCollection('meal');
    
    let meals = [];
    if (mealCollection) {
        meals = await mealCollection.find({}).toArray();
    } else {
    }

  return (
    <div>
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


        <div className='flex flex-col w-full px-20 mt-14'>
            <div className='breakfast mb-14'>
                <h1 className={`${playfair.className} text-[#8a1739] text-xl mb-5 font-semibold tracking-wide`}>Breakfast</h1>
                <div className='flex justify-between items-center'>
                    {meals
                        .filter((meal) => meal.category === "Breakfast")
                        .map((meal) => (
                            <MealCard
                                key={meal._id}
                                name={meal.name}
                                img={meal.img}
                                desc={meal.desc}
                                price={meal.price}
                                font={playfair}
                            />
                        ))
                    }
                </div>
            </div>

            <div className='lunch mb-14'>
                <h1 className={`${playfair.className} text-[#8a1739] text-xl mb-5 font-semibold tracking-wide`}>Lunch</h1>
                <div className='flex justify-between items-center'>
                    {meals
                        .filter((meal) => meal.category === "Lunch")
                        .map((meal) => (
                            <MealCard
                                key={meal._id}
                                name={meal.name}
                                img={meal.img}
                                desc={meal.desc}
                                price={meal.price}
                                font={playfair}
                            />
                        ))
                    }
                </div>
            </div>

            <div className='dinner mb-14'>
                <h1 className={`${playfair.className} text-[#8a1739] text-xl mb-5 font-semibold tracking-wide`}>Dinner</h1>
                <div className='flex justify-between items-center'>
                    {meals
                        .filter((meal) => meal.category === "Dinner")
                        .map((meal) => (
                            <MealCard
                                key={meal._id}
                                name={meal.name}
                                img={meal.img}
                                desc={meal.desc}
                                price={meal.price}
                                font={playfair}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Body