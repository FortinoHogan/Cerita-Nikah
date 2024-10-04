import React from 'react'
import { useFormContext } from '../../context/form-context/FormContext'
import TemplatesForm from '../../components/edit-form-content/templates-form/TemplatesForm';
import CoverForm from '../../components/edit-form-content/cover-form/CoverForm';
import ContentForm from '../../components/edit-form-content/content-form/ContentForm';
import EventForm from '../../components/edit-form-content/event-form/EventForm';
import LoveStoryForm from '../../components/edit-form-content/love-story-form/LoveStoryForm';
import GalleryForm from '../../components/edit-form-content/gallery-form/GalleryForm';
import BackgroundMusicForm from '../../components/edit-form-content/background-music-form/BackgroundMusicForm';

const EditTemplateForm = () => {
    const { formState } = useFormContext();

    const renderFormContent = () => {
        switch (formState) {
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
            default:
                return <TemplatesForm />;
        }
    };

    return (
        <div className='border-2 border-custom-pink bg-[#fffcfc] rounded-xl w-full h-full gap-5 flex flex-col p-5'>
            {renderFormContent()}
        </div>
    )
}

export default EditTemplateForm