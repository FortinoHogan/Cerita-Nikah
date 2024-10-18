import React, { ChangeEvent, useState } from "react";
import Input from "../input-group/input/Input";
import DatePickerInput from "../input-group/date-picker/DatePickerInput";
import Textarea from "../input-group/textarea/Textarea";
import Button from "../button/Button";
import { ILoveStoryCard } from "./ILoveStoryCard";
import { useDispatch } from "react-redux";
import { DELETE_LOVE_STORY, REMOVE_LOVE_STORY, SAVE_LOVE_STORY, SET_LOVE_STORY } from "../../services/redux/template-slice/TemplateSlice";

const LoveStoryCard = (props: ILoveStoryCard) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { storyId, storyTitle, storyDate, storyDescription, storyPhoto } = props;
  const dispatch = useDispatch();

  const handleInputChange = (key: string, value: string) => {
    dispatch(SET_LOVE_STORY({ ...props, [key]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageFile(file);

      handleInputChange("storyPhoto", imageUrl);
    }
  }

  const handleSave = () => {
    dispatch(REMOVE_LOVE_STORY(storyId));
    dispatch(SAVE_LOVE_STORY({ ...props, storyFile: imageFile ? imageFile : undefined}));
  };

  const handleDelete = () => {
    dispatch(REMOVE_LOVE_STORY(storyId));
  };

  return (
    <div className="flex flex-col gap-3 w-full outline-none rounded-xl p-3 font-semibold text-custom-gray border-custom-pink border-[3px] overflow-y-auto scrollbar-hidden">
      <Input
        label="Story Title"
        placeholder="First Meet"
        value={storyTitle}
        onChange={(e) => handleInputChange("storyTitle", e.target.value)}
      />
      <DatePickerInput
        label="Story Date"
        placeholder="mm/dd/yyyy"
        value={storyDate}
        onChange={(e) => handleInputChange("storyDate", e.target.value)}
      />
      <Textarea
        label="Story Description"
        placeholder="Tell about your story"
        value={storyDescription}
        onChange={(e) => handleInputChange("storyDescription", e.target.value)}
      />
      <div className="flex flex-col gap-1 justify-center w-full">
        <label className="text-custom-gray font-semibold">Story Photo</label>
        <input className="block w-full border border-custom-pink rounded-lg cursor-pointer focus:outline-none p-3 gap-3" type="file" onChange={handleImageChange} />
      </div>
      <div className="flex gap-5 mt-5">
        <div className="flex items-center justify-center p-3 rounded-xl w-14 border-[3px] border-custom-pink cursor-pointer" onClick={handleDelete}>
          <img src="assets/images/delete.png" alt="delete" className="w-6" />
        </div>
        <Button children="Save Story" onClick={handleSave} className="w-full text-white" />
      </div>
    </div>
  );
};

export default LoveStoryCard;
