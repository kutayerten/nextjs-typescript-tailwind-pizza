import Image from 'next/image'
import React from 'react'
import { featuredProducts } from '../data'
import Link from 'next/link'

const Featured = () => {
  return (
    <div className='w-full overflow-auto text-red-500'>
        {/*wrapper*/}
        <div className='w-max flex'>

           { 
            featuredProducts.map((item) => (

            
           <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-green-500 hover:text-white transition-all md:w-[50vw]  xl:w-[33vw] xl:h-[90vh]'>

               { item.img && (  
               <div className="relative flex-1 w-full hover:rotate-[60deg] duration-500">
                    <Image src={item.img} alt='' fill className='object-contain'/> 
                </div>
                )}
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-2">
                   <h3 className='text-xl font-bold uppercase '>{item.title}</h3>
                   <p className='p-4 2xl:p-8'>{item.desc}</p>
                   <span className='font-bold text-md'>{item.price}$</span>
                   <button className='bg-red-500 text-white p-2 rounded'><Link href="/menu/cart">Add To Cart</Link></button>
                </div>
            </div>
            ))}

        </div>
    </div>
  )
}

export default Featured