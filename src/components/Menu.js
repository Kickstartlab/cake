import React, { useState } from 'react'
import twitter from '../assets/twitter.png';
import telegram1 from '../assets/telegram1.png';
import pill from '../assets/pill.png';




export default function Menu() {

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  return (

    <header className='pt-6'>

      <div className="px-6 bg-white-100 py-3 lg:w-10/12 hidden font-lilita lg:flex justify-between items-center shadow-blue border-4 border-black-100 rounded-full mx-auto">

        <div>
          <a href='/'>
            <p className='text-4xl font-nerko shadow-logo'>CAKE 6900</p>
          </a>
        </div>

        <nav>
          <ul className="text-xxl flex justify-center gap-12 items-center font-thin">
            <li><a href="#about" className="duration-100 hover:font-bold uppercase">about</a></li>
            <li><a href="#audit" className="duration-100 hover:font-bold uppercase">audit</a></li>
            <li><a href="#tokenomics" className="duration-100  hover:font-bold uppercase">tokenomics</a></li>
            <li><a href="#features" className=" duration-100 hover:font-bold uppercase">features</a></li>
            <li><a href="#faq" className=" duration-100 hover:font-bold">FAQ's</a></li>
          </ul>
        </nav>

        <div className='flex items-center gap-3'>
          <a href=''>
            <img src={twitter} alt='twitter'></img>
          </a>
          <a href=''>
            <img src={telegram1} alt='telegram1'></img>
          </a>
          <a href=''>
            <img src={pill} alt='pill'></img>
          </a>
        </div>

      </div>

      <div className="lg:hidden flex items-center justify-between pb-6" onClick={ToggleSidebar} >
        <a href='/'>
          <p className='text-3xl font-nerko shadow-logo'>CAKE 6900</p>
        </a>

        <i className="fa fa-bars text-2xl"></i>
      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
        <div className='p-5'>
          <div className="lg:hidden flex items-center justify-between pb-6" onClick={ToggleSidebar}>
            <a href='/'>
              <p className='text-3xl font-nerko shadow-logo'>CAKE 6900</p>

            </a>
            <i className="fa fa-times text-2xl text-white-100"></i></div>

          <div className="sd-body mt-20 font-fredoka">
            <ul onClick={ToggleSidebar} className='space-y-8 text-white-100 font-semibold'>
              <li><a href="#about" className="duration-100 hover:font-bold uppercase">about</a></li>
              <li><a href="#audit" className="duration-100 hover:font-bold uppercase">audit</a></li>
              <li><a href="#tokenomics" className="duration-100  hover:font-bold uppercase">tokenomics</a></li>
              <li><a href="#features" className="duration-100 hover:font-bold uppercase">features</a></li>
              <li><a href="#faq" className=" duration-100 hover:font-bold">FAQ's</a></li>
              <li>
                <div className='flex items-center gap-3'>
                  <a href=''>
                    <img src={twitter} alt='twitter'></img>
                  </a>
                  <a href=''>
                    <img src={telegram1} alt='telegram1'></img>
                  </a>
                  <a href=''>
                    <img src={pill} alt='pill'></img>
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
    </header >
  )
}
