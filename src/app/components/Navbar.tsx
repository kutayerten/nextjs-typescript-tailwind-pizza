import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {
    
    const user = true;

  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 md:h-24 lg:px-20 xl:px-40'>
        {/* Left Link*/}
        
        <div className='hidden md:flex gap-4 flex-1'>
            <Link href="/">Homepage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
        </div>
        
        <div className='flex-1 md:text-center font-bold text-xl'>
            <Link href="/">Erten Pizza Show </Link>
        </div>

        <div className='md:hidden '>
            <Menu/>
        </div>
        {/* Right Link*/}
        <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
          
            <div className='md:absolute top-2 r-2 lg:static flex items-center justify-center bg-green-400 py-1 px-2 rounded-lg group  cursor-pointer'>
                <Image src="/phone.png" alt="" width={20} height={20} className='group-hover:scale-110 scale-95 transition-all'/>
                <span className='ml-1 group-hover:scale-100 scale-95 text-white transition-all'>987 654 321</span>
            </div>

           {!user ? ( <Link href="/">Homepage</Link>) :
            (<Link href="/menu">Menu</Link>)
            }
            <CartIcon />
        </div>
    </div>
  )
}

export default Navbar