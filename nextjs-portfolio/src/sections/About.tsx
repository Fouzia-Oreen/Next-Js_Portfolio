'use client'
import ChromeIcon from '@/assets/icons/chrome.svg';
import CssIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import BookImage from '@/assets/images/book-cover.png';
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import SectionHeader from '@/components/SectionHeader';
import ToolboxItems from '@/components/ToolboxItems';
import {motion} from 'framer-motion'
import Image from 'next/image';
import { useRef } from 'react';

const toolboxItems = [
    {
       title: "HTML5",
       iconType: HtmlIcon 
    },
    {
        title: "CSS3",
        iconType: CssIcon 
    },    
    {
        title: "JavaScript",
        iconType: JavaScriptIcon 
    },    
    {
        title: "TypeScript",
        iconType: GithubIcon 
    },    
    {
        title: "ReactJS",
        iconType: ReactIcon 
    },    
    {
        title: "NextJS",
        iconType: ReactIcon 
    },    
    {
        title: "Express",
        iconType: ChromeIcon 
    },    
    {
        title: "MongoDB",
        iconType: JavaScriptIcon 
    },    
    {
        title: "NodeJS",
        iconType: ChromeIcon 
    },    
    {
        title: "MySQL",
        iconType: HtmlIcon 
    }
]

const hobbies = [
    {
      title: 'Painting',
      emoji: '🎨',
      left: '5%',
      top: '5%',
    },
    {   title: 'Photography',
        emoji: '📸',
        left: '50%',
        top: '5%',
    },    
    {
       title: 'Gaming',
      emoji: '🎮',
      left: '10%',
      top: '35%',
    },      
    {
        title: 'Music',
        emoji: '🎼',
        left: '35%',
        top: '40%',
    },    
    {
        title: 'Cycling',
        emoji: '🚴‍♀️',
        left: '70%',
        top: '45%',
    },    
    {
        title: 'Baking',
        emoji: '🎂',
        left: '5%',
        top: '65%',
    },
    {
        title: 'Reading',
        emoji: '📚',
        left: '45%',
        top: '70%',
    },
]

const AboutSection = () => {
    const constrainRef = useRef(null)
  return (
    <section className="py-20 lg:py-28">
    <div className='container'>
      <SectionHeader 
      title="About Me" 
      content="A Glimps Into My World" 
      description='Learn more about who I am, what I do, and what inspires me' />
      <div className='mt-20 flex flex-col gap-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
        {/* books */}
        <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
            <CardHeader 
            title="My Reads" 
            description="Explore the books shaping my perspective" />
            <div className='w-40 mx-auto mt-2 md:mt-0'>
            <Image src={BookImage} alt="bookImage" />
            </div>
        </Card>
        {/* toolbox */}
        <Card className='h-[320px]  md:col-span-3 lg:col-span-2'>
        <CardHeader 
        title="My Toolbox" 
        description="Explore the technologies and tols I used to craft exceptional digital experinces" 
        className=''/>
            <ToolboxItems items={toolboxItems} itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
            <ToolboxItems items={toolboxItems} className='mt-6 ' itemsWrapperClassName=" animate-move-right [animation-duration:15s]"/>
        </Card>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
        {/* hobbies */}
        <Card className='h-[320px]  flex flex-col md:col-span-3 lg:col-span-2'>
        <CardHeader 
        title="Beyond the Code" 
        description="Explore my interests and hobbies beyond the digital realm" className='px-6 py-6'/>
            <div className='relative flex-1' ref={constrainRef}>
                {hobbies.map((hobby) => (
                    <motion.div 
                    key={hobby.title} 
                    className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute' 
                    style={{ 
                        left:hobby.left, 
                        top:hobby.top
                    }}
                    drag
                    dragConstraints={constrainRef}
                    >
                       
                        <span className='font-medium text-gray-950'>
                            {hobby.title}
                        </span>
                        <span>{hobby.emoji}</span>
                    </motion.div>
                ))}
            </div>
        </Card>
        {/* map */}
        <Card className='h-[320px]  relative md:col-span-2 lg:col-span-1'>
            <Image src={mapImage} alt="mapImage" className='w-full h-full object-cover object-left-top'/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:3s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
            <Image src={smileEmoji} alt="emoji" className='size-20'/>
            </div>
        </Card>
        </div>
      </div>
    </div>
    </section>
  )
}

export default AboutSection
