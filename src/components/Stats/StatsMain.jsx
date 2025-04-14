import React from 'react'
import StatsText from './StatsText'

const StatsMain = () => {
  return (
    <div className='container bg-[#FFB545]'>
        <div className='flex px-30 py-20'>
            <div className='px-10 place-content-center scale-170'>
                <img src="src/assets/Group 64.svg" alt="" />
            </div>

            <StatsText/>

        </div>
    </div>
  )
}

export default StatsMain