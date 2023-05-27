import React, {useState} from 'react'
import logo from '../assets/RheMartlogo.png' 
import logo1 from '../assets/Vector.png'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import IonIcon from '@reacticons/ionicons';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10  fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <div className='flex'>
                    <img src={logo1} alt="" />
                    <img src={logo} alt="" />
                </div>
                <ul className='hidden md:flex font-semibold'>
                    <li>Solutions</li>
                    <li>Industries</li>
                    <li>Fees</li>
                    <li>About Rareblocks</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'> 
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-3'>Get free account</button>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>Solutions</li>
            <li className='border-b-2 border-zinc-300 w-full'>Industries</li>
            <li className='border-b-2 border-zinc-300 w-full'>Fees</li>                
            <li className='border-b-2 border-zinc-300 w-full'>About Rareblocks</li>

            <div className='flex flex-col my-4'> 
                <button className=' bg-transparent  px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Get free account</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar
