import React, { useState } from "react";
import Button from "../../button/Button";
import LoveStoryCard from "../../love-story-card/LoveStoryCard";
import { ILoveStoryCard } from "../../love-story-card/ILoveStoryCard";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../services/redux/Store";
import { ADD_LOVE_STORY } from "../../../services/redux/template-slice/TemplateSlice";
import LoveStoryCardFilled from "../../love-story-card-filled/LoveStoryCardFilled";

const LoveStoryForm = () => {
  const { loveStory, loveStorySaved } = useSelector((state: RootState) => state.template);
  const dispatch = useDispatch();
  const newCard = (): ILoveStoryCard => ({
    storyId: uuidv4(),
    storyTitle: "",
    storyDate: "",
    storyDescription: "",
    storyPhoto: "",
  });

  const handleAddNewCard = () => {
    dispatch(ADD_LOVE_STORY(newCard()));
  };

  return (
    <div className="flex flex-col gap-5 overflow-y-auto scrollbar-hidden">
      <Button
        onClick={handleAddNewCard}
        className="w-full text-white"
      >
        <div className='flex items-center justify-center gap-2'>
              <img src="assets/images/select.png" alt="select" className='w-5'/>
              <p>Add New Story</p>
            </div>
      </Button>
      <div className="flex flex-col gap-5">
        {loveStorySaved && loveStorySaved.map((card, index) => (
          <LoveStoryCardFilled key={card.storyId} {...card} storyIndex={index}/>
        ))}
        {loveStory && loveStory.map((card, index) => (
          <LoveStoryCard key={card.storyId} {...card}/>
        ))}
      </div>
    </div>
  );
};

export default LoveStoryForm;
