import React from 'react'
import { GrPrevious } from "react-icons/gr";


function PreviousButton({onClick}: any) {
  return (
    <div className='absolute cursor-pointer z-50 top-[50%] translate-y-[-50%]' onClick={onClick}>
        <GrPrevious color='#ffab00' size={40} />
    </div>
  )
}

export default PreviousButton