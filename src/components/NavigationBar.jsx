import React, {useState} from 'react'
import {menu, close} from '../assets'
import {navLinks} from '../constants'

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false)
  const backgroundColour = "#111032"; // kurzgesagt navigation blue
  return (
    <nav className={`w-full bg-[${backgroundColour}] text-white py-6 px-10 flex justify-start items-center`}>
        <div className='mr-10'>
          Logo
        </div>

        <ul className='list-none sm:flex items-center hidden'>
          {navLinks.map((nav, index) => <li key={nav.id} className='mr-10'>
            <a href={`${nav.id}`}>{nav.title}</a>
          </li> )}
        </ul>

        <div className='sm:hidden'>
          <img src={toggle ? close : menu} alt="menu" className='absolute right-10' 
            onClick={() => setToggle((prev) => !prev)}
          />

          <div className={`${toggle ? 'flex': 'hidden'} w-full h-full bg-[#120543] text-white absolute left-0 top-16`}>
            <ul className='list-none sm:hidden flex flex-col'>
              {navLinks.map((nav, index) => <li key={nav.id} className='mr-10'>
              <a href={`${nav.id}`}>{nav.title}</a>
            </li> )}
            </ul>
          </div>
          
        </div>

    </nav>
  )
}
export default NavigationBar