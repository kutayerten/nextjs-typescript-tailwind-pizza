"use client"
import React, { useEffect, useState } from 'react'

type Props ={
    price:number;
    id:number;
    options?: {title: string; additionalPrice: number}[]
}

const Price = ({price,id,options} : Props) => {

    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(()=>{
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price)
        )},[quantity, selected , options , price])

  return (
    <div className='flex flex-col gap-4 w-full '>
        <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
        <div className='flex gap-4 md:gap-4'>
            {options?.map((option, index) => (
                <button key={option.title} className='min-w-[4rem] md:min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
                style={{
                    background: selected === index ? "rgb(248 113 113)" : "white",
                    color : selected === index ? "white" : "red",
                }}
                onClick={()=>setSelected(index)}
                >
                    {option.title}
                </button>
            ))}
        </div>

        <div className=' flex justify-between items-center ring-1 ring-red-500'>
            <div className='flex justify-between items-center w-full flex-1 p-3 '>
                <span>Quantity</span>
                <div className=' flex font-bold text-xl gap-4'>
                    <button onClick={() => setQuantity(prev=>(prev>1 ? prev-1 : 1))} className='flex -mt-0.5'>{'-'}</button>
                    <span className='w-6 text-center'>{quantity}</span>
                    <button onClick={() => setQuantity(prev=>(prev<10 ? prev+1 : 10))} className=''>{'+'}</button>
                </div>
            </div>

            <button className=' flex h-full items-center uppercase bg-red-500 text-white  py-3 px-6 0 hover:bg-green-500 duration-300'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Price