import React from 'react'
import { useFormContext } from '../../context/form-context/FormContext'
import TemplatesForm from '../../components/edit-form-content/templates-form/TemplatesForm';
import CoverForm from '../../components/edit-form-content/cover-form/CoverForm';
import ContentForm from '../../components/edit-form-content/content-form/ContentForm';
import EventForm from '../../components/edit-form-content/event-form/EventForm';
import LoveStoryForm from '../../components/edit-form-content/love-story-form/LoveStoryForm';
import GalleryForm from '../../components/edit-form-content/gallery-form/GalleryForm';
import BackgroundMusicForm from '../../components/edit-form-content/background-music-form/BackgroundMusicForm';
import { useContentContext } from '../../context/content-context/ContentContext';
import { useGalleryContext } from '../../context/gallery-context/GalleryContext';
import RSVPInvitationForm from '../../components/edit-form-content/rsvp-invitation-form/RSVPInvitationForm';
import AngpaoForm from '../../components/edit-form-content/angpao-form/AngpaoForm';
import SubDomainForm from '../../components/edit-form-content/sub-domain-form/SubDomainForm';

const EditTemplateForm = () => {
    const { formState } = useFormContext();
    const { contentState, setContentState } = useContentContext();
    const { galleryState, setGalleryState } = useGalleryContext();
    const renderFormContent = () => {
        switch (formState) {
            case 'subDomain':
                return <SubDomainForm />
            case 'templates':
                return <TemplatesForm />;
            case 'cover':
                return <CoverForm />;
            case 'content':
                return <ContentForm />;
            case 'event':
                return <EventForm />;
            case 'loveStory':
                return <LoveStoryForm />;
            case 'gallery':
                return <GalleryForm />;
            case 'backgroundMusic':
                return <BackgroundMusicForm />;
            case 'rsvpInvitation':
                return <RSVPInvitationForm />
            case 'angpao':
                return <AngpaoForm />
            default:
                return <TemplatesForm />;
        }
    };

    return (
        <div className='w-full h-full relative'>
            <div className={`border-2 border-custom-pink bg-[#fffcfc] rounded-xl w-full h-full gap-5 flex flex-col p-5 ${formState === 'content' || formState === 'gallery' ? 'rounded-tr-none' : ''}`}>
                {renderFormContent()}
            </div>
            {formState === 'content' && (
                <div className={`transform rotate-90 absolute top-[4.3rem] right-[-6.83rem] flex rounded-tl-xl rounded-tr-xl ${contentState === 'regards' ? '' : ''}`}>
                    <p className={` ${contentState === 'regards' ? 'bg-custom-pink' : 'bg-[#f2a3c0]'} text-custom-white py-2 px-4 rounded-tl-xl cursor-pointer text-center`} onClick={() => setContentState('regards')}>
                        Regards
                    </p>
                    <p className={`${contentState === 'profile' ? 'bg-custom-pink' : 'bg-[#f2a3c0]'} text-custom-white py-2 px-4 rounded-tr-xl cursor-pointer text-center`} onClick={() => setContentState('profile')}>
                        Profile
                    </p>
                </div>
            )}
            {formState === 'gallery' && (
                <div className={`transform rotate-90 absolute top-[4rem] right-[-6.56rem] flex rounded-tl-xl rounded-tr-xl ${contentState === 'regards' ? '' : ''}`}>
                    <p className={` ${galleryState === 'images' ? 'bg-custom-pink' : 'bg-[#f2a3c0]'} text-custom-white py-2 px-4 rounded-tl-xl cursor-pointer text-center`} onClick={() => setGalleryState('images')}>
                        Images
                    </p>
                    <p className={`${galleryState === 'video' ? 'bg-custom-pink' : 'bg-[#f2a3c0]'} text-custom-white py-2 px-4 rounded-tr-xl cursor-pointer text-center`} onClick={() => setGalleryState('video')}>
                        Video
                    </p>
                </div>
            )}
        </div>
    )
}

export default EditTemplateForm