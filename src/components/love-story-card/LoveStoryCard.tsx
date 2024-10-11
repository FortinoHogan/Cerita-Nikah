import React, { useState } from "react";
import Input from "../input-group/input/Input";
import DatePickerInput from "../input-group/date-picker/DatePickerInput";
import Textarea from "../input-group/textarea/Textarea";
import Button from "../button/Button";

const LoveStoryCard = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  return (
    <div className="flex flex-col gap-3 w-full outline-none rounded-lg p-3 font-semibold text-custom-gray border-custom-pink border-[1px] overflow-y-auto scrollbar-hidden">
      <Input
        label="Story Title"
        placeholder="First Meet"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <DatePickerInput
        label="Story Date"
        placeholder="mm/dd/yyyy"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Textarea
        label="Story Description"
        placeholder="Tell about your story"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex flex-col gap-1 justify-center w-full">
        <label htmlFor="" className="text-custom-gray font-semibold">Story Photo</label>
        <input className="block w-full border border-custom-pink rounded-lg cursor-pointer focus:outline-none p-3 gap-3" id="file_input" type="file"></input>
      </div>
      <Button children="Save Story" onClick={() => {}} className="w-full text-white mt-5"/>
    </div>
  );
};

export default LoveStoryCard;
