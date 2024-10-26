import React from 'react'
import FeatureCardGrid from '../feature-card-grid/FeatureCardGrid'

const HomePageFeatures = () => {
  return (
    <div className='relative min-h-screen flex flex-col gap-10 items-center justify-center'>
        <div className='flex items-center justify-center gap-3'>
            <h1 className='text-6xl max-sm:text-4xl font-semibold text-custom-pink'>Feature</h1>
            <span className='min-h-[5px] mt-3 min-w-[60px] bg-custom-pink max-sm:hidden'></span>
        </div>
        <FeatureCardGrid />
    </div>
  )
}

export default HomePageFeatures