import React from 'react';

const ContactMe = () => {
  return (
    <div className="relative inline-flex items-center justify-center gap-4 group">
      <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-[#021678] to-[#0429DE] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
      <a role="button" className="group relative inline-flex items-center justify-center text-base rounded-4xl bg-gradient-to-r from-[#021678] to-[#0429DE] px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30" title="payment" href="#">Contact Me!<svg aria-hidden="true" viewBox="0 0 10 10" height={10} width={10} fill="none" className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2">
          <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100" />
          <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]" />
        </svg>
      </a>
    </div>
  );
}

export default ContactMe;