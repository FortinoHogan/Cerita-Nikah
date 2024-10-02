import React from 'react'
import { IAnchor } from './IAnchor'
import { useNavigate } from 'react-router-dom'

const Anchor = (props: IAnchor) => {
    const { text, href, className } = props
    const nav = useNavigate()
    return (
        <div
            className={`${className} cursor-pointer text-[#49516F] font-semibold text-lg relative group hover:text-custom-pink`}
            onClick={() => nav(href)}
        >
            {text}
            <span className="block h-[2px] w-full bg-custom-pink absolute bottom-0 left-0 scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
        </div>

    )
}

export default Anchor