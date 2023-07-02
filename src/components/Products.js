import React from 'react'
import ProductCards from './ProductCards'

export const Products = () => {
  return (
    <div className='py-10'>
      <div className="flex flex-col items-center gap-4" >
        <h1 className='text-2xl bg-black text-white py-2 w-80
        text-center'>
          shopping every day
        </h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
        Discover a world of incredible products and unbeatable deals. We pride ourselves on offering a vast selection of top-quality items that cater to all your needs and desires. Whether you're searching for the latest fashion trends, cutting-edge gadgets, home essentials, or unique gifts, we've got you covered.
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto'> 
        <ProductCards/>
      </div>
    </div>
  )
}
