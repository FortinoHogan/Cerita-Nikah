import React, { ChangeEvent } from 'react'
import { useGalleryContext } from '../../../context/gallery-context/GalleryContext'
import Button from '../../button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../services/redux/Store'
import ImagePreview from '../../image-preview/ImagePreview'
import { ADD_IMAGE_GALLERY, DELETE_IMAGE_GALLERY, IGallery, SET_LINK_VIDEO } from '../../../services/redux/template-slice/TemplateSlice'
import { v4 as uuidv4 } from "uuid";
import Textarea from '../../input-group/textarea/Textarea'

const GalleryImagePage = () => {
  const { gallery } = useSelector((state: RootState) => state.template);
  const dispatch = useDispatch();

  const newImage = (imageUrl: string, imageFile: File): IGallery => ({
    imageId: uuidv4(),
    image: imageUrl,
    file: imageFile
  })

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(ADD_IMAGE_GALLERY(newImage(imageUrl, file)))
    }
  }

  const handleDeleteImage = (imageId: string) => {
    dispatch(DELETE_IMAGE_GALLERY(imageId))
  }

  return (
    <div>
      <h1 className='font-semibold text-lg text-custom-gray'>Upload images to use in the gallery (Max 4)</h1>
      <p className='font-semibold text-sm text-custom-light-gray'>Subscribers can upload to 20 images<span className='text-custom-pink'>*</span></p>
      <div className='flex flex-col gap-5'>
        <Button onClick={() => { }} className="text-custom-white w-full mt-4">
          <label className="flex flex-col items-center justify-center w-full cursor-pointer">
            <div className='flex items-center justify-center gap-2'>
              <img src="assets/images/select.png" alt="select" className='w-5'/>
              <p>Add Image</p>
            </div>
            <input type="file" className="hidden" onChange={handleImageChange} />
          </label>
        </Button>
        {gallery && gallery.map((img, index) => (
          <ImagePreview key={index} image={img.image} handleDeleteImage={() => { handleDeleteImage(img.imageId) }} />
        ))}
      </div>
    </div>
  )
}

const GalleryVideoPage = () => {
  const dispatch = useDispatch();
  const { linkVideo } = useSelector((state: RootState) => state.template);

  const handleVideoLinkChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(SET_LINK_VIDEO(e.target.value))
  }

  return (
    <div>
      <h1 className='font-semibold text-lg text-custom-gray'>Copy the video link into the field</h1>
      <p className='font-semibold text-sm text-custom-light-gray'>This feature used by “Do It Youself” subscribers<span className='text-custom-pink'>*</span></p>
      <div className='mt-5'>
        <Textarea placeholder="Copy youtube, drive link here" value={linkVideo} onChange={handleVideoLinkChange} />
      </div>
    </div>
  )
}

const GalleryForm = () => {
  const { galleryState } = useGalleryContext()
  return (
    <div className='overflow-y-auto scrollbar-hidden'>
      {galleryState === 'images' ? <GalleryImagePage /> : <GalleryVideoPage />}
    </div>
  )
}

export default GalleryForm