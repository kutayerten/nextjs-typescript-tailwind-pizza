"use client";
import Image from 'next/image'
import Link from 'next/link';
import React , {useState} from 'react'
import CartIcon from './CartIcon';

const links = [
    {id: 1 , title : "Homepage" , url:"/" },
    {id: 2 , title : "Menu" , url:"/menu" },
    {id: 3 , title : "Working Hours" , url:"/" },
    {id: 4 , title : "Contact" , url:"/" },
]

const Menu = () => {

    const [open,setOpen] = useState(false);
    //TEMPRORAY
    const user = false;

  return (
    <div >
        {!open ? (<Image src="/open.png" alt="" width={20} height={20} onClick={() => setOpen(true)} className='cursor-pointer' /> )
        :
         (<Image src="/close.png" alt="" width={20} height={20} onClick={() => setOpen(false)} className='cursor-pointer' />) }
        
       { open && ( <div className='w-full flex flex-col items-center justify-center bg-green-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] gap-8 text-3xl z-10'>
            {links.map(item =>(
                <Link href={item.url} key={item.id} 
                className='hover:text-red-600 transition-colors'
                onClick={() => setOpen(false)}
                >{item.title}</Link>
            ))}

            {!user ? 
            (<Link href="/login"
            className='hover:text-red-600 transition-colors'
            onClick={() => setOpen(false)}>Login</Link>) :

            (<Link href="/orders" 
            className='hover:text-red-600 transition-colors'
            onClick={() => setOpen(false)}>Orders</Link>)}

            <Link href="/cart" 
            className='hover:text-red-600 transition-colors'
            onClick={() => setOpen(false)}>
            <CartIcon/>
            </Link>

        </div>)}

    </div>
  )
}

export default Menu