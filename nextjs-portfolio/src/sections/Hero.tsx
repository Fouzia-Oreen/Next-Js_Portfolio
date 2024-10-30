'use client'
import SparkleIcon from '@/assets/icons/sparkle.svg';
import StarIcon from '@/assets/icons/star.svg';
import grainImage from '@/assets/images/grain.jpg';
import Me from '@/assets/images/me.png';
import { HeroOrbit } from '@/components/HeroOrbit';
import Image from 'next/image';
import Link from 'next/link';
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";

const HeroSection = () => {
  return (
    <section className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip' id='home'>
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage:`url(${grainImage.src})`}}></div>
        {/* rings */}
        <div className=" size-[620px] hero-ring"></div>
        <div className=" size-[820px] hero-ring"></div>
        <div className=" size-[1020px] hero-ring"></div>
        <div className=" size-[1220px] hero-ring"></div>
            {/* star-orbits */}
            <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration="10s">
            <SparkleIcon className="size-8 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='33s' shouldSpin spinDuration="10s">
            <SparkleIcon className="size-5 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s' >
            <div className="size-2 rounded-full bg-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' >
            <SparkleIcon className="size-10 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration="12s">
            <StarIcon className="size-12 text-emerald-300" />
            </HeroOrbit>
            <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration="8s">
            <StarIcon className="size-8 text-emerald-300" />
            </HeroOrbit>
            <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s' >
            <div className="size-2 rounded-full bg-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration="20s">
            <SparkleIcon className="size-14 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
            <div className="size-3 rounded-full bg-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration="10s">
            <StarIcon className="size-20 text-emerald-300 " />
            </HeroOrbit>
        </div>
        <div className="container">
            <div className='flex flex-col items-center'>
                <div className='bg-slate-400/15 rounded-full -mb-3 size-[100px]'>
                <Image src={Me} alt='heroImage'className='object-fit'/>
                </div>
            
            <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                <div className='bg-green-500 size-2.5 rounded-full relative'>
                <div className='bg-green-500 size-2.5 rounded-full animate-ping-large absolute inset-0'> 
                    </div>
                </div>
                <div className='text-sm font-medium'>Available for new projects</div>
            </div>
            </div>
            <div className="max-w-lg mx-auto">
            <h1 className='font-serif text-3xl md:text-5xl text-center mt-4 tracking-wide'>Hello I&apos;m Fouzia from Bangladesh</h1>
            <p className='mt-4 text-center text-white/60 md:text-lg'>I specialized in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next Project</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
                <Link href='#projects' className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl bg-white/10'>
                    <span>Explore My Work</span> 
                    <GoArrowDown className="size-5" />
                </Link>
                <Link href='@/assets/images/CV.jpg' className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl'>
                    <span>👋</span> 
                    <span className="font-semibold">Let&apos;s Connect</span> 
                </Link>
                <div className='flex gap-4'>
                    <Link href="https://www.linkedin.com/in/fouzia-oreen/" 
                        className=" p-4 inline-flex items-center h-12 rounded-full bg-white/10  cursor-pointer" target="_blank">
                            <BsLinkedin />
                    </Link>
                    <Link href="https://github.com/Fouzia-Oreen" 
                        className="p-4 inline-flex items-center h-12 rounded-full bg-white/10 cursor-pointer" target="_blank">
                            <FaGithubSquare />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
