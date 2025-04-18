import React from 'react'
import { Link } from 'react-router-dom';

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

      <div className='md:px-30 px-10'>
        <div className='flex gap-3 pt-30 font-jakarta text-5xl'>
          <h1 className='font-medium'>Let's</h1>
          <h1 className='font-extrabold italic text-[#021167]'>Connect</h1>
      
        </div>
        <hr class="h-px my-8 border-2 bg-gray-700"></hr>
        
        <div className='md:flex pt-10 md:pr-40'>
          <div className='md:pr-30'>
            <img className='pb-5 md:place-self-start place-self-center' src="src\assets\Footers\LogoAlt.svg" alt="Logo Alt" />
            <p className='font-jakarta font-medium text-gray-400 text-justify'>You can easily connect with me through my social media or LinkedIn for any inquiries, collaborations, or professional networking. Whether you have questions, ideas to share, or opportunities to discuss, I’d love to connect and engage with you!</p>

          
          
          </div>

          <div className='flex gap-4 md:py-10 pt-10 md:hidden place-content-center'>
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
          

          <div className='pt-10 md:pt-0'>
          <div className='md:pr-30 font-jakarta font-medium '>
            <h1 className='mb-4 text-[#0019a5]'>Navigation</h1>
            <ul className=''>
            <li className='mb-4'>
  <Link to='/' className='cursor-pointer text-gray-400 hover:text-black transition'>
    Home
  </Link>
</li>
<li className='mb-4'>
  <Link to='/Services' className='cursor-pointer text-gray-400 hover:text-black transition'>
    Services
  </Link>
</li>
<li className='mb-4'>
  <Link to='/ComingSoon' className='cursor-pointer text-gray-400 hover:text-black transition'>
    Projects
  </Link>
</li>
<li className='mb-4'>
  <Link to='/About' className='cursor-pointer text-gray-400 hover:text-black transition'>
    Contact
  </Link>
</li>
            </ul>
          </div>

          <div className='pr-30 font-jakarta font-medium py-10 md:py-0'>
            <h1 className='mb-4 text-[#0019a5]'>Contact</h1>
            <ul className=''>
              <li className='mb-4 text-gray-400 hover:text-black transition'>chrispradayana@gmail.com</li>
            </ul>
          </div>
        </div>
        </div>

        <div className='md:flex gap-4 py-10 hidden'>
        <a
  href="https://github.com/umlittlethings"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer hover:scale-110 transition"
>
  <img src="src/assets/Footers/GITHUB.svg" alt="Github" />
</a>

<a
  href="https://www.instagram.com/wchrispradayana"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer hover:scale-110 transition"
>
  <img src="src/assets/Footers/IG.svg" alt="Instagram" />
</a>

<a
  href="https://www.linkedin.com/in/chrispradayana/"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer hover:scale-110 transition"
>
  <img src="src/assets/Footers/IN.svg" alt="LinkedIn" />
</a>

<a
  href="https://discord.com/users/604938815030689794"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer hover:scale-110 transition"
>
  <img src="src/assets/Footers/DC.svg" alt="Discord" />
</a>
        </div>
        
      </div>

      <div className='md:py-5 py-2 bg-gradient-to-r from-[#FFE100] via-[#FFB545] to-yellow-400 '>
          <p className='md:px-30 place-self-center md:place-self-start font-jakarta italic text-[6.38px] md:text-[14px]'>Chris’s website no need to add copyright. All rights reserved.</p>
      </div>
    </div>

  )
}

export default FooterDown