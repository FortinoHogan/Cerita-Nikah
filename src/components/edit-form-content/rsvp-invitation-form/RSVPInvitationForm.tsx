import React, { useState } from 'react'
import Button from '../../button/Button'

interface IRsvp {
  name: string
  isAttend: boolean
}

interface IGuest {
  guests: IRsvp[]
}

const RenderGuest = (props: IGuest) => {
  const { guests } = props
  return (
    <table className="font-semibold text-xl">
      <thead>
        <tr className='text-[#3d3d3d]'>
          <th className='text-start py-5'>Name</th>
          <th className='text-start py-5'>Status</th>
        </tr>
      </thead>
      <tbody>
        {guests.map((person, index) => (
          <tr key={index} className='border-b-[3px] border-[#aeacac] w-full'>
            <td className='text-[#3d3d3d] py-4 w-[50%] max-w-[150px] overflow-hidden whitespace-nowrap text-ellipsis'>{person.name}</td>
            <td className={`py-4 w-[50%] ${person.isAttend ? "text-[#3ADD87]" : "text-[#F01E2C]"}`}>
              {person.isAttend ? "Attend" : "Absent"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const RSVPInvitationForm = () => {
  const [isActivated, setIsActivated] = useState(false);

  const handleClick = () => {
    setIsActivated(!isActivated);
  }

  const tempData: IRsvp[] = [
    {
      name: "Steven",
      isAttend: true
    },
    {
      name: "Samuel",
      isAttend: false
    },
    {
      name: "Amanda",
      isAttend: true
    },
    {
      name: "Christine",
      isAttend: true
    },
    {
      name: "Chris",
      isAttend: false
    }
  ]

  return (
    <div className='flex flex-col gap-5'>
      <div>
        <h1 className='font-semibold text-lg text-custom-gray'>With the RSVP feature, you can easily track who will attend or not, helping you manage your guest list efficiently</h1>
        <p className='font-semibold text-sm text-[#a8a8a8]'>Only Subscribers can activated RSVP feature<span className='text-custom-pink'>*</span></p>
      </div>
      <Button children={isActivated ? "Deactivate" : "Activate"} className='w-full text-custom-white font-semibold' onClick={handleClick} />
      {isActivated && <div className='flex flex-col gap-4 mt-4'>
        <h1 className='font-semibold text-lg text-custom-gray'>Guest Lists(5)</h1>
        <div className='flex gap-5 w-full'>
          <p className='text-custom-gray p-3 border-2 border-custom-pink rounded-xl font-semibold text-2xl w-[50%] text-center'><span className='text-[#3d3d3d]'>3</span> Attend</p>
          <p className='text-custom-gray p-3 border-2 border-custom-pink rounded-xl font-semibold text-2xl w-[50%] text-center'><span className='text-[#3d3d3d]'>2</span> Absent</p>
        </div>
        <RenderGuest guests={tempData}/>
      </div>}
    </div>
  )
}

export default RSVPInvitationForm