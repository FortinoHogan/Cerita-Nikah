import React from 'react'
import { IMusicDisplay } from './IMusicDisplay'

const MusicDisplay = (props: IMusicDisplay) => {
  const { active, text } = props
  return (
    <div>
      {active ?
        <div className='flex gap-2 items-center'>
          <img src="assets/images/music.png" alt="music" className='w-6'/>
          <p className='text-custom-pink font-semibold text-xl'>{text}</p>
        </div>
        :
        <div className='flex gap-2 items-center'>
          <img src="assets/images/no-music.png" alt="no-music" className='w-6'/>
          <p className='text-[#a8a8a8] font-semibold text-xl'>No Music</p>
        </div>}
    </div>
  )
}

export default MusicDisplay