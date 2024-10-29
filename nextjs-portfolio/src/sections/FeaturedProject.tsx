/* eslint-disable react/jsx-no-undef */
'use client'
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import CheckCircle from '@/assets/icons/check-circle.svg';
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
    {
      company: "Acme Corp",
      year: "2022",
      title: "Dark Saas Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 35%" },
      ],
      link: "https://youtu.be/4k7IdSLxh6w",
      image: darkSaasLandingPage,
    },
    {
      company: "Innovative Co",
      year: "2021",
      title: "Light Saas Landing Page",
      results: [
        { title: "Boosted sales by 20%" },
        { title: "Expanded customer reach by 35%" },
        { title: "Increased brand awareness by 15%" },
      ],
      link: "https://youtu.be/7hi5zwO75yc",
      image: lightSaasLandingPage,
    },
    {
      company: "Quantum Dynamics",
      year: "2023",
      title: "AI Startup Landing Page",
      results: [
        { title: "Enhanced user experience by 40%" },
        { title: "Improved site speed by 50%" },
        { title: "Increased mobile traffic by 35%" },
      ],
      link: "https://youtu.be/Z7I5uSRHMHg",
      image: aiStartupLandingPage,
    },
  ];

const FeaturedProjectSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader title="Real-world Results" content="Featured Projects" description="See how I transformed concepts into engaging digital experiences"/>
        {/* cards */}
        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
            {portfolioProjects.map((project) => (
                <Card key={project.title} 
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">
                        <div className="uppercase font-bold tracking-widest text-sm inline-flex bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text gap-2">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                        </div>              
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result) => (
                            <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                                <CheckCircle className="size-5 md:size-6"/>
                                <span>{result.title}</span>
                            </li>
                        ))}
                    </ul>
                    <Link href={project.link}>
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold flex gap-2 items-center justify-center mt-8 md:w-auto px-6">
                            <span>Visit Live Site</span>
                            <ArrowUpRight className="size-4"/>
                        </button>
                    </Link>
                    </div>
                    <div className="relative">
                    <Image src={project.image} alt={project.title} className="mt-8 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none -mb-4 md:-mb-0"/>
                    </div>
                </div>
                </Card>
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectSection