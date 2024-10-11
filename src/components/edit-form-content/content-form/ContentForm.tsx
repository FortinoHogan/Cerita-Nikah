import React, { ChangeEvent, useState } from 'react'
import Textarea from '../../input-group/textarea/Textarea'
import { useContentContext } from '../../../context/content-context/ContentContext'
import SwtichButton from '../../switch-button/SwitchButton'
import ImageInput from '../../image-input/ImageInput'
import Input from '../../input-group/input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../services/redux/Store'
import { SET_CONTENT_REGARDS, SET_CONTENT_PROFILE } from '../../../services/redux/template-slice/TemplateSlice'
import ImagePreview from '../../image-preview/ImagePreview'

const ContentRegardsPage = () => {
  const { openingRemarks, closingRemarks } = useSelector((state: RootState) => state.template)
  const dispatch = useDispatch()
  const handleOpeningRemarksChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const openingRemarks = e.target.value
    dispatch(SET_CONTENT_REGARDS({ openingRemarks: openingRemarks, closingRemarks: closingRemarks }))
  }

  const handleClosingRemarksChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const closingRemarks = e.target.value
    dispatch(SET_CONTENT_REGARDS({ closingRemarks: closingRemarks, openingRemarks: openingRemarks }))
  }

  return (
    <div className='flex flex-col gap-6'>
      <Textarea label="Give opening remarks as an opening to the invitation" placeholder="Fill with greetings or quotes" value={openingRemarks} onChange={handleOpeningRemarksChange} />
      <Textarea label="Provide closing remarks or thanks" placeholder="Contains words of thanks" value={closingRemarks} onChange={handleClosingRemarksChange} />
    </div>
  )
}

const RenderContentProfilePage = (selected: string) => {
  const { groom, bride } = useSelector((state: RootState) => state.template);
  const dispatch = useDispatch();

  const handleInputChange = (key: string, value: string) => {
    if (selected === "Groom") {
      dispatch(SET_CONTENT_PROFILE({ groom: { ...groom, [key]: value }, bride }));
    } else {
      dispatch(SET_CONTENT_PROFILE({ groom, bride: { ...bride, [key]: value } }));
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (selected === "Groom") {
        dispatch(SET_CONTENT_PROFILE({ groom: { ...groom, picture: imageUrl }, bride }));
      } else {
        dispatch(SET_CONTENT_PROFILE({ groom, bride: { ...bride, picture: imageUrl } }));
      }
    }
  };

  const handleDeleteImage = () => {
    if (selected === "Groom") {
      dispatch(SET_CONTENT_PROFILE({ groom: { ...groom, picture: "" }, bride }));
    } else {
      dispatch(SET_CONTENT_PROFILE({ groom, bride: { ...bride, picture: "" } }));
    }
  };


  return (
    <div>
      <div className='flex flex-col gap-1 mt-7'>
        <p className='font-semibold text-custom-gray'>Upload the photo that will be used for the {selected}</p>{selected === 'Groom' && groom.picture ? (
          <ImagePreview image={groom.picture} handleDeleteImage={handleDeleteImage} />
        ) : selected === 'Bride' && bride.picture ? (
          <ImagePreview image={bride.picture} handleDeleteImage={handleDeleteImage} />
        ) : (
          <ImageInput handleImageChange={handleImageChange} />
        )}
      </div>
      <div className='mt-7 flex flex-col gap-3'>
        <Input
          label={`${selected}'s full name`}
          placeholder={`${selected === 'Groom' ? 'Man' : 'Woman'}'s full name`}
          value={selected === 'Groom' ? groom.fullName : bride.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />

        <Input
          label={`Father's name (Optional)`}
          placeholder={`Father's name`}
          value={selected === 'Groom' ? groom.fatherName : bride.fatherName}
          onChange={(e) => handleInputChange('fatherName', e.target.value)}
        />

        <Input
          label={`Mother's name (Optional)`}
          placeholder={`Mother's name`}
          value={selected === 'Groom' ? groom.motherName : bride.motherName}
          onChange={(e) => handleInputChange('motherName', e.target.value)}
        />

        <Input
          label={`What order do you come in your family (Optional)`}
          placeholder={`First, Second, Youngest, Only Child`}
          value={selected === 'Groom' ? groom.orderComeFamily : bride.orderComeFamily}
          onChange={(e) => handleInputChange('orderComeFamily', e.target.value)}
        />
      </div>
    </div>
  );
};


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