import memojiImage from "@/assets/images/memoji-computer.png";
import Image from 'next/image';
import { GoArrowDown } from "react-icons/go";
import grainImage from '@/assets/images/grain.jpg'
//import {StarIcon} from '@/assets/icons/star.svg';
import { LuSparkle } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
        <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage:`url(${grainImage.src})`}}></div>
        <div className=" size-[620px] hero-ring"></div>
        <div className=" size-[820px] hero-ring"></div>
        <div className=" size-[1020px] hero-ring"></div>
        <div className=" size-[1220px] hero-ring"></div>
        <div className="absolute">
            {/* <StarIcon className="sie-28 text-emerald-300" /> */}
            <LuSparkle className="sie-28 text-emerald-300"/>
        </div>

        <div className="container">
            <div className='flex flex-col items-center'>
            <Image src={memojiImage} alt='heroImage'className='size-[100px]'/>
            <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                <div className='bg-green-500 size-2.5 rounded-full'></div>
                <div className='text-sm font-medium'>Available for new projects</div>
            </div>
            </div>
            <div className="max-w-lg mx-auto">
            <h1 className='font-serif text-3xl md:text-5xl text-center mt-4 tracking-wide'>Building Exceptional User Experiences</h1>
            <p className='mt-4 text-center text-white/60 md:text-lg'>I specialized in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next Project</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
                <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
                    <span>Explore My Work</span> 
                    <GoArrowDown className="size-5" />
                </button>
                <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl'>
                    <span>👋</span> 
                    <span className="font-semibold">Let&apos;s Connect</span> 
                </button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
