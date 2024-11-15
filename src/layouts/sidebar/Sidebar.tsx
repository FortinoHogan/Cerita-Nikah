import React, { useState } from 'react'
import SidebarButton from '../../components/sidebar-button/SidebarButton'
import { useFormContext } from '../../context/form-context/FormContext'

const Sidebar = () => {
    const [isActive, setIsActive] = useState('Templates')
    const { setFormState } = useFormContext()
    return (
        <div className='bg-[#F093B5] rounded-xl w-full h-full gap-5 flex flex-col py-5 overflow-y-auto scrollbar-hidden'>
            <SidebarButton text="Templates" onClick={() => { setIsActive('Templates'); setFormState('templates') }} image="assets/images/template.png" isActive={isActive} />
            <SidebarButton text="Cover" onClick={() => { setIsActive('Cover'); setFormState('cover') }} image="assets/images/cover.png" isActive={isActive} />
            <SidebarButton text="Content" onClick={() => { setIsActive('Content'); setFormState('content') }} image="assets/images/content.png" isActive={isActive} />
            <SidebarButton text="Event" onClick={() => { setIsActive('Event'); setFormState('event') }} image="assets/images/event.png" isActive={isActive} />
            <SidebarButton text="Love Story" onClick={() => { setIsActive('Love Story'); setFormState('loveStory') }} image="assets/images/love-story.png" isActive={isActive} />
            <SidebarButton text="Gallery" onClick={() => { setIsActive('Gallery'); setFormState('gallery') }} image="assets/images/gallery.png" isActive={isActive} />
            <SidebarButton text="Background Music" onClick={() => { setIsActive('Background Music'); setFormState('backgroundMusic') }} image="assets/images/background-music.png" isActive={isActive} />
            <SidebarButton text="RSVP Invitation" onClick={() => { setIsActive('RSVP Invitation'); setFormState('rsvpInvitation') }} image="assets/images/rsvp-invitation.png" isActive={isActive} />
            <SidebarButton text="Angpao" onClick={() => { setIsActive('Angpao'); setFormState('angpao') }} image="assets/images/angpao.png" isActive={isActive} />
            <SidebarButton text="Sub Domain" onClick={() => { setIsActive('Sub Domain'); setFormState('subDomain') }} image="assets/images/sub-domain-menu.png" isActive={isActive} />
        </div>
    )
}

export default Sidebar