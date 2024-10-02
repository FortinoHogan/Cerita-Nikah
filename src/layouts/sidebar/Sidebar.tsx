import React, { useState } from 'react'
import SidebarButton from '../../components/sidebar-button/SidebarButton'

const Sidebar = () => {
    const [isActive, setIsActive] = useState('Templates')
    return (
        <div className='bg-[#F093B5] rounded-xl w-full h-full gap-5 flex flex-col py-5'>
            <SidebarButton text="Templates" onClick={() => {setIsActive('Templates')}} image="assets/images/template.png" isActive={isActive} />
            <SidebarButton text="Cover" onClick={() => {setIsActive('Cover')}} image="assets/images/cover.png" isActive={isActive} />
            <SidebarButton text="Content" onClick={() => {setIsActive('Content')}} image="assets/images/content.png" isActive={isActive} />
            <SidebarButton text="Event" onClick={() => {setIsActive('Event')}} image="assets/images/event.png" isActive={isActive} />
            <SidebarButton text="Love Story" onClick={() => {setIsActive('Love Story')}} image="assets/images/love-story.png" isActive={isActive} />
            <SidebarButton text="Gallery" onClick={() => {setIsActive('Gallery')}} image="assets/images/gallery.png" isActive={isActive} />
            <SidebarButton text="Background Music" onClick={() => {setIsActive('Background Music')}} image="assets/images/background-music.png" isActive={isActive} />
        </div>
    )
}

export default Sidebar