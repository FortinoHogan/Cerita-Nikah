import React from 'react'
import { IFeatureCard } from './IFeatureCard'

const FeatureCard = (props: IFeatureCard) => {
    const { title, text, image } = props
    return (
        <div className='flex flex-col gap-5 bg-white rounded-xl m-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-12 transition-all duration-300 hover:scale-105'>
            <div className='flex items-center gap-5 relative h-auto overflow-hidden'>
                <img src={image} alt="title" className='w-[40px]'/>
                <h1 className='font-semibold text-xl text-custom-pink'>{title}</h1>
            </div>
            <p className='text-custom-pink'>{text}</p>
        </div>
    )
}

export default FeatureCard