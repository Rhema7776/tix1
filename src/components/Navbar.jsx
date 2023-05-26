import React from 'react'
import logo from '../images/RheMartlogo.png' 
import logo1 from '../images/Vector.png'
const Navbar = () => {
  return (
    <div className=''>
       <div className='container mx-auto'>
            <div className='sm:flex justify-around'>
                {/* Site logo */}
                <div className=' flex'>
                    <img src={logo1} alt="vector" className='mr-2' />
                    <img src={logo} alt="RheMartlogo" className=""/>
                </div>
                
                

                {/* Menu Items */}
                <ul className='text-black-400 sm:self-center text-xl border-t sm:border-none '>
                    <li className='sm:inline-block'>
                        <a href='#' className='p-3 font-sans '>Solutions</a>
                    </li>
                    <li className='sm:inline-block'>
                        <a href='#' className='p-3'>Industries</a>
                    </li>
                    <li className='sm:inline-block'>
                        <a href='#' className='p-3'>Fees</a>
                    </li>
                    <li className='sm:inline-block'>
                        <a href='#' className='p-3' >About Rareblocks</a>
                    </li>
                </ul>

                {/* Auth Items */}
                {/* <div  className='sm:inline-block text-xl'>
                    <a href='#' className='p-3 '>Sign In</a>
                    <a href='#' className='bg-blue-500 md btn p-2 text-white hover:text-xl rounded-xl'>Create free account</a>
                </div> */}

            </div>
        </div>
    </div>
  )
}

export default Navbar
