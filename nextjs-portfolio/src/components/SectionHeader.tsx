import React from 'react'

const SectionHeader = ({title, content, description} : {title:string, content:string, description:string}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">{title}</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{content}</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
        {description}
        </p>
    </>
  )
}

export default SectionHeader
