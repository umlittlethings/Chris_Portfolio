import React from 'react'

const FooterDown = () => {
  const items = ["App Development", "UI/UX", "Design", "Website Development"];
  return (
    <div>
      <div className="relative overflow-hidden bg-gradient-to-r from-[#021167] to-[#1819D4] py-2">
        <div className="flex w-max gap-10">
          {[...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items,].map((item, index) => (
            <div key={index} className=" text-white text-xl flex items-center gap-10 font-jakarta font-extrabold">
              {item}
              <img src="src/assets/Asterisk Orange.svg" alt="Asterisk" className="w-10 h-5" />
            </div>
          
          
          ))}
        </div>
      </div>

      <div className='px-30'>
        <div className='flex gap-3 pt-30 font-jakarta text-5xl'>
          <h1 className='font-medium'>Let's</h1>
          <h1 className='font-extrabold italic text-[#021167]'>Connect</h1>
      
        </div>
        <hr class="h-px my-8 border-2 bg-gray-700"></hr>
        
        <div className='flex pt-10 pr-40'>
          <div className='pr-30'>
            <img className='pb-5' src="src\assets\Footers\LogoAlt.svg" alt="Logo Alt" />
            <p className='font-jakarta font-medium text-gray-400 text-justify'>You can easily connect with me through my social media or LinkedIn for any inquiries, collaborations, or professional networking. Whether you have questions, ideas to share, or opportunities to discuss, I’d love to connect and engage with you!</p>

          
          
          </div>

          <div className='pr-30 font-jakarta font-medium '>
            <h1 className='mb-4 text-[#0019a5]'>Navigation</h1>
            <ul className=''>
              <li className='mb-4'>
                <button className='cursor-pointer text-gray-400 hover:text-black transition'>Home</button>
              </li>
              <li className='mb-4'>
                <button className='cursor-pointer text-gray-400 hover:text-black transition'>Services</button>
              </li>
              <li className='mb-4'>
                <button className='cursor-pointer text-gray-400 hover:text-black transition'>Projects</button>
              </li>
              <li className='mb-4'>
                <button className='cursor-pointer text-gray-400 hover:text-black transition'>Contact</button>
              </li>
            </ul>
          </div>

          <div className='pr-30 font-jakarta font-medium'>
            <h1 className='mb-4 text-[#0019a5]'>Contact</h1>
            <ul className='cursor-pointer'>
              <li className='mb-4 text-gray-400 hover:text-black transition'>chrispradayana@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className='flex gap-4 py-10'>
          <button className='cursor-pointer hover:scale-110 transition'>
            <img src="src\assets\Footers\GITHUB.svg" alt="Github" />
          </button>

          <button className='cursor-pointer hover:scale-110 transition'>
            <img src="src\assets\Footers\IG.svg" alt="Github" />
          </button>

          <button className='cursor-pointer hover:scale-110 transition'>
            <img src="src\assets\Footers\IN.svg" alt="Github" />
          </button>

          <button className='cursor-pointer hover:scale-110 transition'>
            <img src="src\assets\Footers\DC.svg" alt="Github" />
          </button>
        </div>
        
      </div>

      <div className='py-5 bg-gradient-to-r from-[#FFE100] via-[#FFB545] to-yellow-400 '>
          <p className='px-30 font-jakarta italic'>Chris’s website no need to add copyright. All rights reserved.</p>
      </div>
    </div>

  )
}

export default FooterDown