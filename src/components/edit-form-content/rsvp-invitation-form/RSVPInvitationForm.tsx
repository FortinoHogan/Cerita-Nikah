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
    <div className="relative min-h-96">
      <table className="font-semibold text-xl w-full">
        <thead>
          <tr className='text-[#3d3d3d]'>
            <th className='text-start py-5'>Name</th>
            <th className='text-start py-5'>Status</th>
          </tr>
        </thead>
        <tbody>
          {guests.length > 0 ? guests.map((person, index) => (
            <tr key={index} className='border-b-[3px] border-[#aeacac] w-full'>
              <td className='text-[#3d3d3d] py-4 w-[50%] max-w-[150px] overflow-hidden whitespace-nowrap text-ellipsis'>{person.name}</td>
              <td className={`py-4 w-[50%] ${person.isAttend ? "text-[#3ADD87]" : "text-[#F01E2C]"}`}>
                {person.isAttend ? "Attend" : "Absent"}
              </td>
            </tr>
          )) :
            <div className='absolute mt-5 flex justify-center flex-col items-center w-full'>
              <img src='assets/images/no-attendee.png' className='w-[35%]' />
              <p className='text-custom-gray font-semibold'>No Attendee</p>
            </div>}
        </tbody>
      </table>
    </div>
  )
}

const RSVPInvitationForm = () => {
  const [isActivated, setIsActivated] = useState(false);

  const handleClick = () => {
    setIsActivated(!isActivated);
  }

  const tempData: IRsvp[] = []

  const attendCount = tempData.filter((guest) => guest.isAttend).length;
  const absentCount = tempData.length - attendCount;

  return (
    <div className='flex flex-col gap-5 overflow-y-auto scrollbar-hidden'>
      <div>
        <h1 className='font-semibold text-lg text-custom-gray'>With the RSVP feature, you can easily track who will attend or not, helping you manage your guest list efficiently</h1>
        <p className='font-semibold text-sm text-[#a8a8a8]'>Only Subscribers can activated RSVP feature<span className='text-custom-pink'>*</span></p>
      </div>
      <Button children={isActivated ? "Deactivate" : "Activate"} className='w-full text-custom-white font-semibold' onClick={handleClick} />
      {isActivated && <div className='flex flex-col gap-4 mt-4'>
        <h1 className='font-semibold text-lg text-custom-gray'>Guest Lists({tempData.length})</h1>
        <div className='flex gap-5 w-full'>
          <p className='text-custom-gray p-3 border-2 border-custom-pink rounded-xl font-semibold text-2xl w-[50%] text-center'><span className='text-[#3d3d3d]'>{attendCount}</span> Attend</p>
          <p className='text-custom-gray p-3 border-2 border-custom-pink rounded-xl font-semibold text-2xl w-[50%] text-center'><span className='text-[#3d3d3d]'>{absentCount}</span> Absent</p>
        </div>
        <RenderGuest guests={tempData} />
      </div>}
    </div>
  )
}

export default RSVPInvitationForm