import React from 'react'
import FeatureCard from '../../components/feature-card/FeatureCard'
import { featureCardData } from './FeatureCard.data'

const FeatureCardGrid = () => {
  const data = featureCardData
  return (
    <div className='grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-6 w-full px-[100px] max-2xl:px-5 justify-center'>
      {data.map((item, index) => (
        <FeatureCard
          key={index}
          title={item.title}
          text={item.text}
          image={item.image}
        />
      ))}
    </div>
  )
}

export default FeatureCardGrid