import React, { useState } from 'react'
import ImageInput from '../../image-input/ImageInput'
import Input from '../../input-group/input/Input'

const CoverForm = () => {
  const [groomNickname, setGroomNickname] = useState('')
  const [brideNickname, setBrideNickname] = useState('')

  return (
    <div>
      <p className='font-semibold text-custom-gray pr-16 mb-2 text-justify'>Upload image that will be used as the main photo on the cover</p>
      <ImageInput />
      <div className='mt-10 flex flex-col gap-5'>
        <Input label={`Groom's nickname`} placeholder='Man' onChange={(e) => setGroomNickname(e.target.value)} value={groomNickname}/>
        <Input label={`Bride's nickname`} placeholder='Woman' onChange={(e) => setBrideNickname(e.target.value)} value={brideNickname}/>
      </div>
    </div>
  )
}

export default CoverForm