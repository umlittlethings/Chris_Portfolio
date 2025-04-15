import React from 'react'
import StatsText from './StatsText'

const StatsMain = () => {
  return (
    <div className='container bg-[#FFB545]'>
      
        <div className='md:flex md:px-30 py-20 flex-row'>
        <div className='md:hidden flex place-self-center space-x-3 text-[62px]'>
            <h1 className='font-jakarta font-normal'>My</h1>
            <h1 className='font-jakarta font-black italic'>Stats</h1>
        </div>
            <div className='px-10 place-content-center md:scale-170'>
                <img src="src/assets/Group 64.svg" alt="" />
            </div>

            <StatsText/>

        </div>
    </div>
  )
}

export default StatsMain