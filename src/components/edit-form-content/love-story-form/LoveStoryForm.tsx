import React, { useState } from "react";
import Button from "../../button/Button";
import LoveStoryCard from "../../love-story-card/LoveStoryCard";
import { ILoveStoryCard } from "../../love-story-card/ILoveStoryCard";
import { v4 as uuidv4 } from "uuid";

const LoveStoryForm = () => {
  const [cards, setCards] = useState<ILoveStoryCard[]>([]);

  const newCard = (): ILoveStoryCard => ({
    storyId: uuidv4(),
    storyTitle: "",
    storyDate: "",
    storyDescription: "",
    storyPhoto: "",
  });

  const addNewCard = () => {
    setCards([...cards, newCard()]);
  };

  return (
    <div className="flex flex-col gap-5 overflow-y-auto scrollbar-hidden">
      <Button
        children="+ Add new Story"
        onClick={addNewCard}
        className="w-full text-white"
      />
      <div className="flex flex-col gap-5">
        {cards.map((card, index) => (
          <LoveStoryCard key={card.storyId} />
        ))}
      </div>
    </div>
  );
};

export default LoveStoryForm;
