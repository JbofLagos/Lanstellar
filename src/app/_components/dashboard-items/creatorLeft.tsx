import React from 'react'
import { ArrowDown, ArrowUp, EllipseSm, EllipseXl } from '~/app/assets/icons/icons'

const CreatorLeft = () => {
  return (
    <div className='flex flex-col items-center justify-around w-full'>
       <span className='cursor-pointer'>
         <ArrowUp />
       </span>

       <span className='flex items-center flex-col gap-1 '>
            <EllipseXl />
            <EllipseSm />
       </span>

       <span className='cursor-pointer'>
            <ArrowDown />
       </span>
    </div>
  )
}

export default CreatorLeft