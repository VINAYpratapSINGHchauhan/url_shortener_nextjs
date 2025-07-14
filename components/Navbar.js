import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex h-16 justify-between items-center px-4 text-white bg-purple-700'>
        <div className="logo">
            <span className='text-3xl font-black '><Link href="/" >BitLinks</Link>
</span>
        </div>
        <ul className='flex items-center justify-center gap-5'>
            <Link href="/" ><li>Home</li></Link>
            <Link href="/about" ><li>About</li></Link>
            <Link href="/shorten" ><li>Shorten</li></Link>
            <Link href="/contact" ><li>Contact</li></Link>
            <li className='flex gap-5'>
                <Link href="/shorten" ><button className='hover:bg-purple-900 bg-purple-500 shadow-lg p-3 font-bold py-1 cursor-pointer rounded-lg'>Try Now</button></Link>
                <Link href="/github" ><button className='hover:bg-purple-900 bg-purple-500 shadow-lg p-3 font-bold py-1 cursor-pointer rounded-lg'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
