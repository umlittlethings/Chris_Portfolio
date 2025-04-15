import React from 'react'
import FlowingMenu from './FlowingMenu';
import SeeMore from '../SeeMore';

const ThingsIdoMain = () => {
    const demoItems = [
        { link: '#', text: 'Website Development', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'UI/UX Design', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'Mobile App Development', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'Graphic Design', image: 'https://picsum.photos/600/400?random=4' }
      ];
  return (
    <div className='container place-content-center'>
      <br />
      <div className='flex gap-3 py-10 md:px-30 px-10 place-self-center md:place-self-start'>
        <h1 className='font-jakarta font-medium italic text-3xl '>Things</h1>
        <h1 className='font-jakarta font-black text-3xl md:pr-220 '>I do</h1>
        <button className='hidden md:block'>
          <SeeMore/>
        </button>
      </div>
        <div className='container md:px-30 px-10 mx-auto' style={{ height: '600px', position: 'relative' }}>
            <FlowingMenu items={demoItems} />
        </div>

        <button className='block md:hidden place-self-center mt-5'>
          <SeeMore/>
        </button>
    </div>
  )
}

export default ThingsIdoMain