import React from 'react'
import { IImageInput } from './IImageInput'

const ImageInput = (props: IImageInput) => {
    const { handleImageChange } = props;
    return (
        <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#ef8ab0] border-dashed rounded-xl cursor-pointer bg-[#f8c8d9]">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img src="assets/images/input-image.png" alt="input-image" className='w-16'/>
                    <p className="mb-2 text-sm text-custom-pink font-semibold">Click here to upload image</p>
                </div>
                <input type="file" className="hidden" onChange={handleImageChange}/>
            </label>
        </div>
    )
}

export default ImageInput