'use client';
import React from 'react'

const CartButton = ( { img, name, price }) => {

    function addToCart() {
        fetch('/api/addToCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ img, name, price }), // send the props
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
            alert('Added to cart!'); // simple feedback
            } else {
            alert('Failed to add!');
            }
        })
        .catch(err => console.log(err));
    }

  return (
    <button onClick={addToCart} className='bg-[#8a1739] text-white rounded-tl-2xl rounded-br-2xl px-3 py-1 cursor-pointer'>Add To Cart</button>
  )
}

export default CartButton