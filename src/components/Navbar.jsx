import { useState } from "react"
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/index"
const Navbar = () => {

  const [toogle,setToogle]=useState(false);
  return (
    <nav className="flex items-center justify-between w-full py-6 navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[20px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white `}>
            <a href={`#${nav.id}`}>
              
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-end flex-1 sm:hidden">
<img src={toogle ? close : menu} alt="" 
className="w-[28px] h-[28px] object-contain"
onClick={()=> setToogle((prev)=>!prev )}/>
<div className={`${toogle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
<ul className="flex flex-col items-center justify-end flex-1 list-none">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white `}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

</div>
      </div>
    </nav>
  )
}

export default Navbar