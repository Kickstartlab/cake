import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import top from '../assets/top.png';
import heart from '../assets/heart.png';
import f_1 from '../assets/f_1.png';
import f_2 from '../assets/f_2.png';
import f_3 from '../assets/f_3.png';
import Accordion from './Accordion';
import about from '../assets/about.png';
import tokenomics from '../assets/tokenomics.png';
import stars from '../assets/stars.png';
import star from '../assets/star.png';
import candle from '../assets/candle.png';
import cupcake from '../assets/cupcake.png';
import cake1 from '../assets/cake1.png';
import arrow1 from '../assets/arrow1.png';
import arrow2 from '../assets/arrow2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 500,
            mirror: false
        });
    }, [])

    const accordionData = [
        {
            title: 'What is CAKE 6900?',
            content: `Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit. `
        },
        {
            title: 'What Makes CAKE 6900 Unique?',
            content: `Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit. `
        },
        {
            title: `How Can I Join the Presale?`,
            content: `Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.`
        }
    ];


    return (
        <div className="font-nunito overflow-hidden text-black-100 font-thin bg-white-100">

            <div className="lg:px-20 px-5 bg-pink-50">
                <div className='container mx-auto'>

                    <Menu />

                    <div className="lg:flex justify-center items-start gap-x-8 lg:pt-20 lg:pb-28 py-6 lg:space-y-0 space-y-10">

                        <div data-aos="fade-right" className="">

                            <div className='flex items-start gap-x-8'>
                                <h1 className='md:text-10xl text-6xl tracking-tighter text-white-100 shadow-text font-nerko'>
                                    CAKE 6900
                                </h1>

                                <img data-aos="fade-in" data-aos-delay='150' src={stars} alt="stars" className='lg:w-40 lg:block hidden' />
                            </div>

                            <p className='py-6'>
                                Become a cornerstone of the foxy movement. Let's create a world<br></br>
                                where cunning and charm reign supreme.
                            </p>

                            <div className='flex items-center gap-x-5'>
                                <a href=''>
                                    <button className='bg-pink-100 hover:bg-white-100 border-2 border-black-50 py-2 px-5 rounded-full duration-100'>
                                        Buy Now!
                                    </button>
                                </a>

                                <a href=''>
                                    <button className='bg-white-100 hover:bg-pink-100 border-2 border-black-50 py-2 px-5 rounded-full duration-100'>
                                        Learn More
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div data-aos="fade-left" className=" lg:space-y-0 space-y-8">
                            <img src={top} alt="Logo" className='lg:float-right sm:flex mx-auto lg:w-full w-11/12' />
                        </div>

                    </div>
                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5 bg-wave1 lg:-mt-20">
                <div className='container mx-auto'>

                    <div className="lg:flex justify-center items-center lg:pt-24 py-6 lg:space-y-0 space-y-8">

                        <div data-aos="fade-down-right" className="lg:w-6/12">

                            <img src={star} alt="Logo" className='absolute lg:w-12 w-6 mt-32 left-0 lg:ml-5 animate-ping duration-100' />

                            <p className='md:text-6xl text-3xl font-semibold text-pink-100 font-nerko'>
                                CAKE
                            </p>

                            <img src={star} alt="Logo" className='absolute lg:w-12 w-6 left-1/4 lg:ml-12 ml-20 animate-ping duration-300 delay-200' />

                            <h2 className='md:text-8xl text-5xl tracking-tight text-white-100 shadow-text font-nerko'>
                                What is
                            </h2>

                            <p className='py-6'>
                                Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>

                            <div className='flex items-center gap-x-5'>
                                <a href=''>
                                    <button className='bg-green-50 hover:bg-white-100 border-2 border-black-50 py-2 px-5 rounded-full duration-100'>
                                        Audit
                                    </button>
                                </a>

                                <a href=''>
                                    <button className='bg-white-100 hover:bg-green-50 border-2 border-black-50 py-2 px-5 rounded-full duration-100'>
                                        Whitepaper
                                    </button>
                                </a>
                            </div>

                            <img src={star} alt="Logo" className='absolute lg:w-12 w-6 lg:left-1/4  animate-ping duration-100' />

                        </div>

                        <div data-aos="zoom-in-up" className=" lg:space-y-0 space-y-8 lg:w-5/12">
                            <img src={about} alt="Logo" className='lg:float-right sm:flex mx-auto' />
                        </div>

                    </div>
                </div>
            </div>

            {/* tokenomics section */}

            <div id='tokenomics' className=''>

                <div className="lg:px-20 px-5 bg-blue-100 lg:py-20 py-6 text-white-100 bg-wave2 lg:h-screen">
                    <div className='container mx-auto sparkle'>

                        <h3 data-aos='fade-in' className='md:text-8xl text-5xl tracking-tighter mb-12 text-white-100 shadow-text font-nerko text-center'>
                            Tokenomics
                        </h3>

                        <div>
                            <div className='md:flex items-center justify-center lg:gap-x-52 gap-6 lg:pb-12 md:space-y-0 space-y-6'>
                                <p data-aos='fade-right' className='md:text-5xl text-3xl font-nerko'>Name: CAKE6900</p>
                                <p data-aos='fade-right' className='md:text-5xl text-3xl font-nerko'>Ticker: CAKE</p>
                            </div>

                            <div className='md:flex items-start justify-center pt-5 md:space-y-0 space-y-6'>

                                <div data-aos='fade-right' className='lg:space-y-6 space-y-6 lg:w-4/12'>
                                    <div className='lg:flex flex-col items-end justify-center gap-y-4'>
                                        <p className='md:text-4xl text-2xl font-nerko'>Team Tokens : Zero</p>
                                        <img src={arrow1} alt='arrow' className='w-36 lg:block hidden'></img>
                                    </div>

                                    <div className='lg:flex flex-col items-end justify-center gap-y-4'>
                                        <p className='md:text-4xl text-2xl font-nerko'>Liquidity 100% Burnt</p>
                                        <img src={arrow1} alt='arrow' className='w-36 lg:block hidden'></img>
                                    </div>
                                </div>

                                <div data-aos='zoom-in-up' className='lg:w-4/12'>
                                    <img src={tokenomics} alt='tokenomics' className='lg:ml-12'></img>
                                </div>

                                <div data-aos='fade-left' className='lg:space-y-6 space-y-6 lg:w-4/12'>

                                    <div className='flg:lex flex-col items-start justify-center'>
                                        <p className='md:text-4xl text-2xl font-nerko'>Total Supply 1,000,000,000 (1 Billion)</p>
                                        <img src={arrow2} alt='arrow' className='w-36 lg:block hidden'></img>
                                    </div>

                                    <div className='lg:flex flex-col items-start justify-center gap-y-4'>
                                        <p className='md:text-4xl text-2xl font-nerko'>Zero Taxes</p>
                                        <img src={arrow2} alt='arrow' className='w-36 lg:block hidden'></img>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {/* <img src={wave3} alt="Logo" className='lg:-mt-20 left-0 right-0 translate-y-1 -mt-4 absolute w-full' /> */}

                <img src={cake1} alt="Logo" className='absolute left-0 ml-12 mt-12 lg:block hidden float' />

                <div className='bg-wave1 lg:-mt-20'>
                    <div className='lg:pt-64 lg:pb-20 py-6 container mx-auto lg:px-20 px-5'>

                        <img src={cupcake} alt="Logo" className='absolute right-0 mr-12 lg:mt-12 mt-28 lg:w-72 w-56 float lg:block hidden' />

                        <div className='text-center space-y-6'>
                            <p data-aos='fade-in' className='md:text-5xl text-3xl text-blue-50 font-nerko'>
                                The Fun Behind The
                            </p>
                            <h3 data-aos='fade-in' className='md:text-8xl text-5xl tracking-tight text-white-100 shadow-text font-nerko'>
                                CAKE 6900 Tokens
                            </h3>

                            <div className='flex items-center justify-center gap-x-24'>
                                <p className='md:text-5xl text-3xl font-nerko'>
                                    28.692.610.753
                                </p>

                                <p className='md:text-5xl text-3xl font-nerko'>
                                    $CAKE
                                </p>
                            </div>

                            <div className='lg:flex items-center justify-center gap-6 pt-12 lg:space-y-0 space-y-6'>

                                <div data-aos='flip-left' data-aos-delay='100' className='py-5 md:px-12 px-6 bg-blue-50 rounded-3xl border-2 border-black-100'>
                                    <p className='md:text-3xl text-2xl font-semibold font-nerko'>
                                        11.477.044.301
                                    </p>
                                    <p>Community & Ecosystem</p>
                                </div>

                                <div className='space-y-6'>
                                    <div data-aos='flip-right' data-aos-delay='200' className='py-5 md:px-12 px-6 bg-blue-50 rounded-3xl border-2 border-black-100'>
                                        <p className='md:text-3xl text-2xl font-semibold font-nerko'>
                                            7.173.152.688
                                        </p>
                                        <p>Development & Operations</p>
                                    </div>

                                    <div data-aos='flip-left' data-aos-delay='300' className='py-5 md:px-12 px-6 bg-blue-50 rounded-3xl border-2 border-black-100'>
                                        <p className='md:text-3xl text-2xl font-semibold font-nerko'>
                                            5.738.522.151
                                        </p>
                                        <p>Token Sale Extravaganza</p>
                                    </div>
                                </div>

                                <div data-aos='flip-right' className='py-5 md:px-12 px-6 bg-blue-50 rounded-3xl border-2 border-black-100'>
                                    <p className='md:text-3xl text-2xl font-semibold font-nerko'>
                                        4.303.891.613
                                    </p>
                                    <p>Reserve Fund Jackpot</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>


            {/* How it Works */}

            <div id='features' className="">

                <div className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='space-y-3 text-center lg:mb-36 mb-8'>
                        <img data-aos='zoom-in' src={heart} alt='heart' className='flex mx-auto lg:w-64 w-36'></img>

                        <p data-aos='fade-in' className='md:text-5xl text-3xl text-pink-100 font-nerko'>
                            Who Can Resist To These
                        </p>
                        <h3 data-aos='fade-in' className='md:text-8xl text-5xl tracking-tighter text-white-100 shadow-text font-nerko'>
                            Delicious Features
                        </h3>
                    </div>

                    <div className='lg:flex items-start justify-center gap-5 lg:space-y-0 space-y-6'>

                        <div data-aos='fade-up' className='space-y-4 border-2 border-black-100 rounded-3xl py-8 px-5 lg:w-80'>
                            <img src={f_1} alt='feature' className='lg:absolute lg:-mt-36 lg:-ml-6 md:w-36 w-28'></img>
                            <h5 className='font-nerko md:text-3xl text-2xl'>Tasty Frosting</h5>
                            <p>
                                Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='150' className='space-y-4 border-2 border-black-100 rounded-3xl py-8 px-5 lg:w-80'>
                            <img src={f_2} alt='feature' className='lg:absolute lg:-mt-36 lg:ml-16 md:w-44 w-32'></img>
                            <h5 className='font-nerko md:text-3xl text-2xl'>Deliciousness at its peak</h5>
                            <p>
                                Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='250' className='space-y-4 border-2 border-black-100 rounded-3xl py-8 px-5 lg:w-80'>
                            <img src={f_3} alt='feature' className='lg:absolute lg:-mt-32 lg:ml-36 md:w-36 w-28'></img>
                            <h5 className='font-nerko md:text-3xl text-2xl'>Exciting
                                Tasting Events</h5>
                            <p>
                                Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                    <div className='md:mt-20 mt-8'>
                        <a href=''>
                            <button className='hover:bg-white-100 bg-green-50 border-2 border-black-50 py-2 px-5 rounded-full duration-100 mx-auto flex items-center gap-3'>
                                <i className='fa fa-telegram'></i>
                                Join Telegram
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* faq section */}

            <img src={stars} alt='stars' className='absolute lg:right-56 right-5 animate-pulse lg:w-52 w-20 lg:-mt-16 -mt-8'></img>

            <div id="faq" className='lg:pt-12 lg:pb-40 py-12 lg:px-20 px-5 bg-wave2 bg-blue-100'>
                <div className="container mx-auto">

                    <div className='text-center lg:mb-12 mb-6 flex items-end justify-center gap-x-5'>
                        <img data-aos='fade-down' src={candle} alt='candle' className='lg:w-8 w-3'></img>
                        <div>
                            <p data-aos='fade-in' data-aos-delay='150' className='md:text-5xl text-3xl text-white-100 font-nerko'>
                                Frequently Asked
                            </p>
                            <h3 data-aos='fade-in' data-aos-delay='150' className='md:text-8xl text-5xl tracking-tighter text-white-100 shadow-text font-nerko'>
                                Questions?
                            </h3>
                        </div>
                    </div>

                    <div className='flex mx-auto lg:w-9/12'>
                        <div className='w-full'>
                            {accordionData.map(({ title, content }) => (
                                <Accordion title={title} content={content} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </div >
    )
}
