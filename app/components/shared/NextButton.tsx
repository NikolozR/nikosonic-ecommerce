import React from 'react'
import { GrNext } from "react-icons/gr";
function NextButton({onClick}: any) {

  return (
    <div className='absolute cursor-pointer z-50 top-[50%] translate-y-[-50%] right-[0px]' onClick={onClick}>
        <GrNext color='#ffab00' size={40} />
    </div>
  )
}

export default NextButton