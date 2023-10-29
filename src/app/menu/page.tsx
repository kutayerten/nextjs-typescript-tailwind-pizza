import Link from 'next/link'
import React from 'react'
import { menu } from '../data'

const MenuPage = () => {
  return (
    <div className='flex flex-col md:flex-row items-center p-4 lg:px-20 xl:px-40 mt-10 '>
      {menu.map(category => (
        <Link 
        href={`/menu/${category.slug} `}
        key={category.id} 
        className='w-full h-1/3 bg-cover p-8 md:h-1/2' 
        style={{backgroundImage:`url(${category.img})`}}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h3 className='uppercase font-bold text-3xl'>{category.title}</h3>
            <p className='text-sm my-8'>{category.desc}</p>
            <button 
            className={`hidden xl:block  text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md hover:!bg-black hover:text-red-600 duration-300`} style={{backgroundColor:`${category.color}`}}>
              Explore
              </button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage