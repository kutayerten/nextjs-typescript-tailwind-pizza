"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
    {
        id:1,
        title:"fresh and hot",
        image: "/slide1.png",
    },
    {
        id:2,
        title:"We deliver , wherever you are",
        image: "/slide2.png",
    },
    {
        id:3,
        title:"To The World",
        image: "/slide3.jpg",
    }
    
]

const Slider = () => {

    const [currentSlider , setCurrentSlider] = useState(0);

    useEffect(()=> {
        const interval = setInterval(
            ()=> setCurrentSlider((prev) => (prev === data.length -1 ? 0 : prev + 1)),
             3000)
        return () => clearInterval(interval)
    },[])

  return (
    <div className='flex flex-col md:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
        <div className='h-1/2 md:h-full flex flex-1 items-center justify-center flex-col gap-4 md:gap-8 text-white bg-green-500 font-bold'>
            <h1 className='text-3xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl'>{data[currentSlider].title}</h1>
            <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
        </div>
        <div className='w-full h-1/2 md:h-full relative flex-1'>
            <Image src={data[currentSlider].image} alt='' fill  className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider