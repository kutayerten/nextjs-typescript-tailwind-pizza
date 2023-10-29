import { pizzas } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className=' flex flex-wrap text-red-500'>
      {pizzas.map(item => (
        <Link className="w-full h-[60vh] border-red-500 border-r-2 border-b-2 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-red-50 bg-white" href={`/product/${item.id}`} key={item.id}>
          {item.img && 
          (
          <div className='relative h-[80%]'>
            <Image src={item.img} alt='' fill className='object-contain' />
          </div>
          )}
          <div className='flex items-center justify-between font-bold'>
            <h3 className='text-lg uppercase p-2  '>{item.title}</h3>
            <h6 className='group-hover:hidden'>${item.price}</h6>
            <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md !text-sm hover:bg-green-500 duration-300'>Add to Cart</button>
          </div>
        </Link>
      ))}
    
    </div>
  )
}

export default CategoryPage