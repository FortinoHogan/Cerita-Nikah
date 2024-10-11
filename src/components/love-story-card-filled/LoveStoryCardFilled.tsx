import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_LOVE_STORY, DELETE_LOVE_STORY } from '../../services/redux/template-slice/TemplateSlice'
import { ILoveStoryCardFilled } from './ILoveStoryCardFilled'

const LoveStoryCardFilled = (props: ILoveStoryCardFilled) => {
    const { storyId, storyTitle, storyDate, storyDescription, storyPhoto, storyIndex } = props
    const dispatch = useDispatch()
    
    const handleEdit = () => {
        dispatch(ADD_LOVE_STORY({ storyId, storyTitle, storyDate, storyDescription, storyPhoto }))
        dispatch(DELETE_LOVE_STORY(storyId))
    }

    const handleDelete = () => {
        dispatch(DELETE_LOVE_STORY(storyId))
    }

    return (
        <div className="flex flex-col gap-3 w-full outline-none rounded-lg p-3 font-semibold text-custom-gray border-custom-pink border-[3px] overflow-y-auto scrollbar-hidden">
            <div className='flex justify-between'>
                <h1>{storyIndex + 1}{storyIndex + 1 == 1 ? "st" : storyIndex + 1 == 2 ? "nd" : storyIndex + 1 == 3 ? "rd" : "th"} Story</h1>
                <div className='flex gap-3'>
                    <img src="assets/images/edit.png" alt="edit" className='cursor-pointer w-6 h-6' onClick={handleEdit} />
                    <img src="assets/images/delete.png" alt="delete" className='cursor-pointer w-5' onClick={handleDelete} />
                </div>
            </div>
            <div className='flex flex-col gap-3 w-full px-3'>
                <div>
                    <h1>{storyTitle}</h1>
                    <p className='text-custom-light-gray text-sm'>{storyDate}</p>
                </div>
                <p className='break-words'>{storyDescription}</p>
                <img src={storyPhoto} alt="story" className='w-full rounded-xl' />
            </div>
        </div>
    )
}

export default LoveStoryCardFilled