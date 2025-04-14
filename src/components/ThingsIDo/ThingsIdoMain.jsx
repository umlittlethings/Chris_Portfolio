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
      <div className='flex gap-3 py-10 px-30'>
        <h1 className='font-jakarta font-medium italic text-3xl '>Things</h1>
        <h1 className='font-jakarta font-black text-3xl  pr-220'>I do</h1>
        <button className=''>
          <SeeMore/>
        </button>
      </div>
        <div className='container px-30 mx-auto' style={{ height: '600px', position: 'relative' }}>
            <FlowingMenu items={demoItems} />
        </div>
    </div>
  )
}

export default ThingsIdoMain