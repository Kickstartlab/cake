import React from 'react'
import x from '../assets/x.png';
import insta from '../assets/insta.png';
import telegram from '../assets/telegram.png';
import footer from '../assets/footer-img.png';
import heart1 from '../assets/heart1.png';




export default function Footer() {
  return (
    <div className="bg-wave1 lg:-mt-20">

      <div>
        <img src={heart1} alt='heart' className='absolute left-0 lg:mt-52 mt-12 lg:w-44 w-12 animate-beat'></img>
        <img src={heart1} alt='heart' className='absolute lg:right-24 right-6 mt-36 lg:w-28 w-10 rotate-45 animate-beat1'></img>
      </div>

      <footer className='container mx-auto lg:px-20 px-5 lg:pt-24 lg:pb-8 py-6'>

        <div className='text-center mb-6'>
          <p data-aos='fade-in' className='md:text-5xl text-3xl text-pink-100 font-nerko'>
            Be in the Know
          </p>
          <h3 data-aos='fade-in' className='md:text-8xl text-4xl tracking-tighter text-white-100 shadow-text font-nerko'>
            And Keep the Fun Flow
          </h3>
          <p className='pt-3'>Get News From Foxes, Events, Campaigns, Airdrop and Bonuses!</p>
        </div>

        <div className='space-y-4'>
          <div className='flex items-center gap-5 justify-center'>
            <a href='/'>
              <img src={x} alt='X'></img>
            </a>
            <a href='/'>
              <img src={telegram} alt='telegram'></img>
            </a>
            <a href='/'>
              <img src={insta} alt='insta'></img>
            </a>
          </div>

          <nav>
            <ul className="flex justify-center gap-6 items-center font-thin flex-wrap">
              <li><a href="#about" className="duration-100 hover:font-bold uppercase">about</a></li>
              <li><a href="#audit" className="duration-100 hover:font-bold uppercase">audit</a></li>
              <li><a href="#tokenomics" className="duration-100  hover:font-bold uppercase">tokenomics</a></li>
              <li><a href="#features" className=" duration-100 hover:font-bold uppercase">features</a></li>
              <li><a href="#faq" className=" duration-100 hover:font-bold">FAQ's</a></li>
            </ul>
          </nav>

          <p className='flex lg:w-7/12 mx-auto text-center'>
            Cryptocurrency markets can experience significant price fluctuations within short periods.
            Past performance is not indicative of future results, and there is no guarantee of profit or protection against losses.
          </p>

          <img data-aos='zoom-in-up' src={footer} alt='' className='flex mx-auto'></img>
        </div>
      </footer>
    </div>

  )
}
