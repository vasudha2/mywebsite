import React from 'react'
import { bannerImg } from '../../assets';
const RightBanner = () => {
  return (
    <div className='w-1/2 flex justify-center items-center'>
        <img
        className='w-[400px] h-[500px] z-10' 
        src={bannerImg} alt='bannerImg'/>
    </div>
  )
}

export default RightBanner