import React from 'react'
import 'remixicon/fonts/remixicon.css'

const CenterFlex = () => {
  return (
    <div className='mt-78 bg-red-100 text-white relative z-10 flex items-end justify-between w-100'>
      <div className='flex bg-black items-center gap-6 px-2 py-2 pl-10 rounded-e-full'>
        <h2 className=' leading-none'>Located <br />in the <br />Netherlands</h2>
        <div className='bg-gray-500 flex items-center justify-center h-19 w-19 rounded-full'>
          <i className="ri-global-line text-5xl rotate-12 font-thin"></i>
        </div>
      </div>
      <div className='flex flex-col'>
        <i class="ri-arrow-right-down-line text-4xl"></i>
        <h2 className='text-2xl font-normal leading-none '>FreeLance <br />Designer and Developer</h2>
        </div>
    </div>
  )
}

export default CenterFlex