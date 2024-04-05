import React from 'react'
import heropic from './heropic.jpg';
import ContactForm from './ContactForm';

function HeroSection() {
  return (
    <div className='w-screen min-h-screen text-white pt-10' 
    style={{
        backgroundImage: `url(${heropic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}>
        <div class='container mx-auto flex lg:w-7/12 px-5 py-24 items-start justify-start gap-10 mobile_view'>
         <div class='lg:w-5/12 w-full mt-10' style={{float:"right"}}>
            <h1 className='my-3 text-5xl font-bold leading-tight'>
                Safe and reliable Transport Solution
            </h1>
            <p className='text-2xl mb-8'>
                Turbocharge your product shipments 5-10x faster using our innovative transport solutions!
            </p>
            <div  className='flex justify-start mx-auto'>
                <button 
                  className='hover:underline bg-white text-gray-800 font-bold rounded-full py-2 px-4'>
                    <span style={{fontSize:20}}>Get a quote</span>
                    <span style={{marginLeft:4,fontSize:25}}>→</span>
                </button>
            </div>
         </div>
         <div class='lg:w-2/6 md:w-3/6 mt-1 object-cover object-right rounded-full' alt='hero' src={heropic}>
            <ContactForm />
        </div>
        </div>  
    </div>
  )
}

export default HeroSection
