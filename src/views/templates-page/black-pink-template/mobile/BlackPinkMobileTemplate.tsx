import React, { useState } from "react";
import { templatePersonalizedExample } from "../../../../libs/templatePersonalized.example";
import { useCountdown } from "../../../../libs/countdown";
import { convertDotDate, convertSlashDate } from "../../../../libs/convertDate";
import TemplateCopyright from "../../../../components/template-copyright/TemplateCopyright";

const BlackPinkMobileTemplate = () => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [template, setTemplate] = useState(templatePersonalizedExample);

  const timeLeft = useCountdown(template.eventReception.eventDate);

  return (
    <div className="font-collingar text-white h-full bg-black">
      <div className="min-h-screen relative">
        <img
          className="z-10 min-h-screen object-cover object-top"
          src={template.cover}
          alt=""
        />
        <div className="z-20 text-4xl font-collingar text-center flex items-center justify-center absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <p className="text-[#FFA5A5] absolute bottom-9 right-0">
            {template.groomNickName}
          </p>
          <p className="absolute bottom-5 z-30 text-white">&</p>
          <p className="text-[#FFA5A5] absolute bottom-1 left-0">
            {template.brideNickName}
          </p>
        </div>
        <div className="absolute bottom-12 text-xl text-white left-1/2 transform -translate-x-1/2 font-edith">
          <p>{convertDotDate(template.eventReception.eventDate)}</p>
        </div>
      </div>
      <div className="bg-black">
        <div className="mt-5 ml-5 bg-black h-96 text-start flex items-start flex-col">
          <div className="w-[45%] h-4/6">
            <img
              className="h-full w-full object-cover"
              src={template.groom.picture}
              alt=""
            />
          </div>
          <div className="mt-5 relative">
            <p className="text-3xl text-[#FFA5A5]">{template.groom.fullName}</p>
            <div className="left-4 text-lg absolute top-5">
              <p className="text-2xl font-edith mb-1 text-[#cecece]">
                {template.groom.orderComeFamily}
              </p>
              <p>{template.groom.fatherName}</p>
              <p>{template.groom.motherName}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 mr-5 h-96 text-end bg-black flex items-end flex-col">
          <div className="w-[45%] bg-white h-4/6">
            <img
              className="h-full w-full object-cover"
              src={template.bride.picture}
              alt=""
            />
          </div>
          <div className="mt-5 relative">
            <p className="text-3xl text-[#FFA5A5]">{template.bride.fullName}</p>
            <div className="text-lg absolute top-5 right-4">
              <p className="text-2xl font-edith mb-1 text-[#cecece]">
                {template.bride.orderComeFamily}
              </p>
              <p>{template.bride.fatherName}</p>
              <p>{template.bride.motherName}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <p className="text-4xl text-center font-edith text-[#FFA5A5]">
          Our Love Story
        </p>
        <div className="flex mt-5 overflow-x-auto gap-10 scrollbar-hidden">
          {template.loveStory.map((story, index) => (
            <div className="flex flex-col">
              <div
                className="bg-white h-60 w-[22rem] flex-shrink-0"
                key={index}
              >
                <img
                  className="h-full w-full object-cover"
                  src={story.storyPhoto}
                  alt=""
                />
              </div>
              <div className="flex gap-5 justify-end items-end mt-5">
                <p className="text-3xl font-edith text-[#FFA5A5]">
                  {story.storyTitle}
                </p>
                <p className="bg-[#2D2D2D] text-sm px-2 pt-1">
                  {convertSlashDate(story.storyDate)}
                </p>
              </div>
              <p className="pl-5 text-1xl font-edith text-end mt-2">
                {story.storyDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-28 w-full flex justify-center items-center flex-col">
        <div className="flex w-11/12 relative justify-center items-center">
          <div className="w-full absolute -top-8 text-end">
            <p className="text-[#FFA5A5] text-4xl font-edith">Gallery</p>
          </div>
          <div className="w-11/12 h-[23rem] bg-white">
            <img
              className="h-full w-full object-cover"
              src={template.galleries[galleryIndex].image}
              alt=""
            />
          </div>
        </div>
        <div className="w-11/12 mt-5 flex gap-5 overflow-x-auto scrollbar-hidden">
          {template.galleries.map((gallery, index) => (
            <div
              className="w-1/4 bg-white h-24 flex-shrink-0 cursor-pointer"
              onClick={() => setGalleryIndex(index)}
            >
              <img
                className="h-full w-full object-cover"
                src={gallery.image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#805C5C]">
        <div className="mt-10 bg-gradient-to-b from-[#181313] to-[#805C5C]">
          <div className="pt-32 w-10/12">
            <p className="text-end text-lg text-[#FFA5A5]">
              A celebration love and union.
            </p>
          </div>
          <div className="w-10/12 h-[18rem] relative">
            <div className="w-full h-40 bg-white">
              <img
                className="h-full w-full object-cover"
                src="/assets/images/black-pink-template/cincin.png"
                alt=""
              />
            </div>
            <div className="w-full flex items-center justify-center font-edith">
              <div className="w-11/12 bg-[#5E3737] absolute bottom-0 text-end py-2 px-6">
                <p className="text-4xl text-[#FFA5A5]">AKAD NIKAH</p>
                <p className="text-lg">
                  JUMAT, 17 AGUSTUS 1945 | 06:00 - 10:00 WIB
                </p>
                <p className="mt-2 underline">
                  {template.eventContract.locationAddress}
                </p>
              </div>
            </div>
          </div>
          <div className="w-10/12 text-5xl font-edith mt-20 flex items-center justify-center">
            <div className="w-11/12">
              <p>RESEPSI</p>
            </div>
          </div>
          <div className="w-full mt-5 bg-white h-72">t</div>
          <div className="mt-5 w-10/12 mx-auto bg-[#5E3737]">
            <p className="pl-5 py-2 mt-1 text-[#FFA5A5]">
              A celebration love and union.
            </p>
          </div>
          <div className="mt-6 w-10/12 mx-auto font-edith">
            <div className="text-xl w-9/12 mx-auto">
              <p>Jumat, 17 Agustus 1945</p>
              <p className="ml-2">06:00 - 10:00 WIB</p>
              <p className="mt-5 underline">
                {template.eventReception.locationAddress}
              </p>
            </div>
          </div>
          <div className="pt-32">
            <p className="font-edith text-center text-5xl">RSVP</p>
            <div className="w-full flex justify-center flex-col items-center mt-5 pb-36">
              <input
                className="w-11/12 bg-black outline-none focus:ring-0 px-6 placeholder-[#FFA5A5] py-2 text-[#FFA5A5] rounded-md"
                type="text"
                placeholder="Name..."
              />
              <div className="flex my-5 gap-2 flex-col text-[#FFA5A5]">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="attendance"
                    value="attend"
                    id="attend"
                    className="accent-[#FFA5A5]"
                  />
                  <label htmlFor="attend">Delightfully accepts</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="attendance"
                    value="absent"
                    id="absent"
                    className="accent-[#FFA5A5]"
                  />
                  <label htmlFor="absent">Regretfully decline</label>
                </div>
              </div>
              <button className="w-11/12 bg-[#FFA5A5] py-1 rounded-md text-black font-bold">
                SEND
              </button>
            </div>
          </div>
        </div>
        <div className="from-[#805C5C] to-[#181313] bg-gradient-to-b">
          <div className="pt-10">
            <p className="text-center font-edith text-5xl text-[#FFA5A5]">
              Blessing & Wishes
            </p>
            <div className="mt-5 h-96 overflow-auto scrollbar-hidden">
              {template.comment.map((c, index) => (
                <div className="flex flex-col mt-5 bg-black w-9/12 py-2 mx-auto font-edith px-5 rounded-md">
                  <p className="text-2xl text-[#FFA5A5]">{c.name}</p>
                  <p className="font-forum">{c.remark}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 w-10/12 mx-auto font-edith">
              <p className="text-3xl mb-5">Send Blessing & Wishes</p>
              <div className="flex flex-col gap-4">
                <input
                  className="bg-black outline-none focus:ring-0 px-6 placeholder-[#FFA5A5] py-2 text-[#FFA5A5] rounded-md"
                  type="text"
                  placeholder="Name..."
                  name=""
                  id=""
                />
                <input
                  className="bg-black outline-none focus:ring-0 px-6 placeholder-[#FFA5A5] py-2 text-[#FFA5A5] rounded-md"
                  type="text"
                  placeholder="Blessing & Wishes..."
                  name=""
                  id=""
                />
                <button className="bg-[#FFA5A5] py-1 rounded-md text-black font-bold">
                  SEND
                </button>
              </div>
            </div>
            <div className="pt-36">
              <div className="flex gap-5 flex-col justify-center items-center">
                <p className="font-edith text-3xl">Angpao</p>
                <img className="w-8/12" src="/assets/images/qr.png" alt="" />
              </div>
            </div>
            <div className="pt-20">
              <TemplateCopyright backgroundColor="bg-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackPinkMobileTemplate;
