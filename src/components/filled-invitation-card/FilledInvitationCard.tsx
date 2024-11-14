import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IFilledInvitationCard } from './IFilledInvitationCard';
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import { IGallery as IGalleryCard, LOAD_STATE, TemplateState } from '../../services/redux/template-slice/TemplateSlice';
import { IGallery, ILoveStory, ITemplatePersonalized } from '../../interfaces/templatePersonalized.interfaces';
import { ILoveStoryCard } from '../love-story-card/ILoveStoryCard';
import { v4 as uuidv4 } from "uuid";

const FilledInvitationCard = (props: IFilledInvitationCard) => {
  const { data } = props
  const nav = useNavigate();
  const dispatch = useDispatch();

  const newCard = (data: ILoveStory): ILoveStoryCard => {
    return {
      storyId: uuidv4(),
      storyTitle: data.storyTitle,
      storyDate: data.storyDate,
      storyDescription: data.storyDescription,
      storyPhoto: data.storyPhoto,
    }
  };


  const newImage = (data: IGallery): IGalleryCard => {
    return {
      imageId: uuidv4(),
      image: data.image,
    }
  }
  
  const mapTemplatePersonalizedToTemplateState = (data: ITemplatePersonalized): TemplateState => {
    const loveStory = data.loveStory ? data.loveStory.map((story) => newCard(story)) : null
    const galleries = data.galleries ? data.galleries.map((gallery) => newImage(gallery)) : null
    return {
      id: data.id,
      userId: data.userId,
      templateName: '',
      templateId: data.templateId,
      templateColor: '',
      cover: data.cover,
      coverFile: undefined,
      groomNickName: data.groomNickName,
      brideNickName: data.brideNickName,
      openingRemarks: data.openingRemarks,
      closingRemarks: data.closingRemarks,
      groom: {
        picture: data.groom.picture,
        file: undefined,
        fullName: data.groom.fullName,
        fatherName: data.groom.fatherName,
        motherName: data.groom.motherName,
        orderComeFamily: data.groom.orderComeFamily
      },
      bride: {
        picture: data.bride.picture,
        file: undefined,
        fullName: data.bride.fullName,
        fatherName: data.bride.fatherName,
        motherName: data.bride.motherName,
        orderComeFamily: data.bride.orderComeFamily
      },
      eventContract: {
        eventName: data.eventContract.eventName,
        eventDate: data.eventContract.eventDate,
        eventStartTime: data.eventContract.eventStartTime,
        eventEndTime: data.eventContract.eventEndTime,
        zoneTime: data.eventContract.zoneTime,
        locationAddress: data.eventContract.locationAddress,
        locationLink: data.eventContract.locationLink
      },
      eventReception: {
        eventName: data.eventReception.eventName,
        eventDate: data.eventReception.eventDate,
        eventStartTime: data.eventReception.eventStartTime,
        eventEndTime: data.eventReception.eventEndTime,
        zoneTime: data.eventReception.zoneTime,
        locationAddress: data.eventReception.locationAddress,
        locationLink: data.eventReception.locationLink
      },
      loveStory: null,
      loveStorySaved: loveStory || null,
      gallery: galleries || null,
      linkVideo: data.linkVideo,
      backgroundMusic: data.backgroundMusic,
      qris: data.qris,
      qrisFile: undefined,
      accounts: null,
      accountsSaved: data.account || null,
      price: data.price,
      isPay: data.isPay,
      domain: data.domain
    };
  };

  const handleEdit = () => {
    const mappedTemplateState = mapTemplatePersonalizedToTemplateState(data);
    dispatch(LOAD_STATE(mappedTemplateState));
    nav("/edit");
  }

  return (
    <div className="relative w-fit">
      <img
        src="assets/images/filled-invitation.png"
        alt="add"
        className="cursor-pointer transition-all duration-300 hover:scale-105"
        onClick={() => nav("/edit")}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-10 flex flex-col justify-around h-full">
        <p className="font-semibold text-custom-gray text-xl whitespace-normal break-words">
          {data.groomNickName} & {data.brideNickName} Wedding Invitation
        </p>
        <div className='flex justify-end'>
          <Button children="View Invitation" onClick={handleEdit} className='text-custom-white w-fit px-5 py-2' />
        </div>
      </div>
    </div>
  )
}

export default FilledInvitationCard