import React from 'react'

const About = () => {
  return (
    <div>
      <div className='flex md:gap-30 gap-5 place-items-center justify-center md:py-30 py-20'>
        <img className='md:w-30 w-10' src="Footers\Asterisk 2.svg" alt="" />
        <div className='flex gap-3 md:text-[56px] text-[30px]'>
          <h1 className='font-jakarta font-medium'>Contact</h1>
          <h1 className='font-jakarta font-extrabold italic text-blue-950'>Me!</h1>
        </div>
        <img className='md:w-30 w-10' src="About\Stars.svg" alt="" />
      </div>

      <div className='md:px-30 px-10 md:py-20 py-5'>
        <div className='font-jakarta text-justify md:place-items-start place-items-center'>
          <h2 className='font-black text-[#0C1FD1] md:text-5xl text-[30px]'>Let's Connect!</h2>
          <p className='py-10 md:pr-150 text-gray-500 md:text-xl text-[15px] place-self-center'>You can easily connect with me through my social media or LinkedIn for any inquiries, collaborations, or professional networking. </p>
        </div>
        
        <ol className='font-jakarta font-medium'>
          <li className='flex place-items-center gap-3 py-4 md:text-2xl text-[15px]'>
            <img className='md:w-20 w-10' src="About\Mail icon.svg" alt="" />
            <p>chrispradayana@gmail.com</p>
          </li>
          <li className='flex place-items-center gap-3 md:text-2xl text-[15px]'>
            <img className='md:w-20 w-10' src="About\Linkedin icon.svg" alt="" />
            <p>W. Christian Pradayana</p>
          </li>
          <li className='flex place-items-center gap-3 py-4 md:text-2xl text-[15px]'>
            <img className='md:w-20 w-10' src="About\ig icon.svg" alt="" />
            <p>@wchrispradayana</p>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default About