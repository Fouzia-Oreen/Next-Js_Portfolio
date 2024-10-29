import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg'

const ContactSection = () => {
  return (
    <section className='py-16 pt-12'>
    <div className='container'>
    <div className='bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl text-gray-900 py-8 px-10 text-center relative overflow-hidden z-0'>
    <div className='absolute inset-0 opacity-5 -z-10' 
        style={{backgroundImage:`url(${grainImage})` }}></div>
    <div className="flex flex-col gap-8">
    <div>
      <h2 className='text-2xl font-serif'>Let&apos;s create something together</h2>
      <p className='text-sm mt-2'>Ready to bring your next project to life? Let;s connect and discuss how can I help you achieve your goals.</p>
      </div>
      <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8">
        <span className='font-semibold'>Contact Me</span>
        <ArrowUpRightIcon  className="size-4"/>
      </button>
    </div>
    </div>
    </div>
    </section>
  )
}

export default ContactSection
