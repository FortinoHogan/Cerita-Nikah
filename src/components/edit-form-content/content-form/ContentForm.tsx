import React, { useState } from 'react'
import Textarea from '../../input-group/textarea/Textarea'
import { useContentContext } from '../../../context/content-context/ContentContext'
import SwtichButton from '../../switch-button/SwitchButton'
import ImageInput from '../../image-input/ImageInput'
import Input from '../../input-group/input/Input'

const ContentRegardsPage = () => {
  const [openingRemarks, setOpeningRemarks] = useState('')
  const [closingRemarks, setClosingRemarks] = useState('')
  return (
    <div className='flex flex-col gap-6'>
      <Textarea label="Give opening remarks as an opening to the invitation" placeholder="Fill with greetings or quotes" value={openingRemarks} onChange={(e) => { setOpeningRemarks(e.target.value) }} />
      <Textarea label="Provide closing remarks or thanks" placeholder="Contains words of thanks" value={closingRemarks} onChange={(e) => { setClosingRemarks(e.target.value) }} />
    </div>
  )
}

const RenderContentProfilePage = (selected: string) => {
  const [groomFullName, setGroomFullName] = useState('')
  const [brideFullName, setBrideFullName] = useState('')
  const [groomFatherName, setGroomFatherName] = useState('')
  const [brideFatherName, setBrideFatherName] = useState('')
  const [groomMotherName, setGroomMotherName] = useState('')
  const [brideMotherName, setBrideMotherName] = useState('')
  const [groomOrder, setGroomOrder] = useState('')
  const [brideOrder, setBrideOrder] = useState('')
  return (
    <div>
      <div className='flex flex-col gap-1 mt-7'>
        <p className='font-semibold text-custom-gray'>Upload the photo that will be used for the {selected}</p>
        {<ImageInput handleImageChange={() => {}}/>}
      </div>
      <div className='mt-7 flex flex-col gap-3'>
        <Input
          label={`${selected}'s full name`}
          placeholder={`${selected === 'Groom' ? 'Man' : 'Woman'}'s full name`}
          value={selected === 'Groom' ? groomFullName : brideFullName}
          onChange={(e) =>
            selected === 'Groom' ? setGroomFullName(e.target.value) : setBrideFullName(e.target.value)
          }
        />

        <Input
          label={`${selected === 'Groom' ? "Father's name (Optional)" : "Father's name (Optional)"}`}
          placeholder={`${selected === 'Groom' ? "Father's name" : "Father's name"}`}
          value={selected === 'Groom' ? groomFatherName : brideFatherName}
          onChange={(e) =>
            selected === 'Groom' ? setGroomFatherName(e.target.value) : setBrideFatherName(e.target.value)
          }
        />

        <Input
          label={`${selected === 'Groom' ? "Mother's name (Optional)" : "Mother's name (Optional)"}`}
          placeholder={`${selected === 'Groom' ? "Mother's name" : "Mother's name"}`}
          value={selected === 'Groom' ? groomMotherName : brideMotherName}
          onChange={(e) =>
            selected === 'Groom' ? setGroomMotherName(e.target.value) : setBrideMotherName(e.target.value)
          }
        />

        <Input
          label={`What order do you come in your family (Optional)`}
          placeholder={`First, Second, Youngest, Only Child`}
          value={selected === 'Groom' ? groomOrder : brideOrder}
          onChange={(e) =>
            selected === 'Groom' ? setGroomOrder(e.target.value) : setBrideOrder(e.target.value)
          }
        />
      </div>
    </div>
  )
}

const ContentProfilePage = () => {
  const [selected, setSelected] = useState('Groom')
  return (
    <div className='overflow-y-auto scrolbar-hidden'>
      <SwtichButton selected={selected} setSelected={setSelected} option1='Groom' option2='Bride' />
      {RenderContentProfilePage(selected)}
    </div>
  )
}

const ContentForm = () => {
  const { contentState } = useContentContext();
  return (
    <div className='overflow-y-auto scrollbar-hidden'>
      {contentState === 'regards' ? <ContentRegardsPage /> : <ContentProfilePage />}
    </div>
  )
}

export default ContentForm