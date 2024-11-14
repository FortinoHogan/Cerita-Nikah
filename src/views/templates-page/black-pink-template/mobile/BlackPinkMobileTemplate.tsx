import React, { useEffect, useState } from "react";
import { templatePersonalizedExample } from "../../../../libs/templatePersonalized.example";
import { useCountdown } from "../../../../libs/countdown";
import {
  convertDetailDate,
  convertDotDate,
  convertSlashDate,
} from "../../../../libs/convertDate";
import TemplateCopyright from "../../../../components/template-copyright/TemplateCopyright";
import { ITemplatesPage } from "../../TemplatesPage.interfaces";
import { store } from "../../../../services/redux/Store";
import { SET_TEMPLATE } from "../../../../services/redux/template-slice/TemplateSlice";
import {
  addBlessing,
  addRsvp,
} from "../../../../services/template-personalized/TemplateService";
import {
  IComment,
  IRsvp,
} from "../../../../interfaces/templatePersonalized.interfaces";
import { AccountBankData } from "../../../../components/account-card/AccountBank.data";

const BlackPinkMobileTemplate = (props: ITemplatesPage) => {
  const { template, fromWebView } = props;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const [galleryIndex, setGalleryIndex] = useState(0);
  const [akadLatitude, setAkadLatitude] = useState<string | null>(null);
  const [akadLongitude, setAkadLongitude] = useState<string | null>(null);
  const [akadSrc, setAkadSrc] = useState("");
  const [resepsiLatitude, setResepsiLatitude] = useState<string | null>(null);
  const [resepsiLongitude, setResepsiLongitude] = useState<string | null>(null);
  const [resepsiSrc, setResepsiSrc] = useState("");
  const [blessingName, setBlessingName] = useState("");
  const [blessing, setBlessing] = useState("");
  const [comment, setComment] = useState(template.comment || []);
  const [rsvpName, setRsvpName] = useState("");
  const [isAbsence, setIsAbsence] = useState(false);
  const [rsvp, setRsvp] = useState("");
  console.log("template on black pink", template);
  // console.log("resepsi src", resepsiSrc);
  // console.log("akad lat", akadLatitude);
  // console.log("akad long", akadLongitude);

  const getBankImage = (name: string) => {
    const data = AccountBankData.find((data) => data.name === name);
    return data?.image;
  };

  const handleBlessing = () => {
    const newBlessing: IComment = {
      name: blessingName,
      remark: blessing,
    };

    addBlessing(template, newBlessing);
    setComment(comment ? [...comment, newBlessing] : [newBlessing]);
    setBlessing("");
    setBlessingName("");
  };

  const handleRsvp = () => {
    const newRsvp: IRsvp = {
      isAttend: isAbsence,
      name: rsvpName,
    };

    addRsvp(template, newRsvp);
    setRsvp("");
    setRsvpName("");
  };

  const handleAttendChange = (e: any) => {
    setRsvp(e.target.value);
    if (rsvp === "attend") setIsAbsence(false);
    if (rsvp === "absent") setIsAbsence(true);
  };

  const extractAkadCoordinates = (url: string) => {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/; // Regex to match @lat,long
    const match = url.match(regex);
    if (match) {
      setAkadLatitude(match[1]);
      setAkadLongitude(match[2]);
    } else {
      console.error("Coordinates not found in the URL");
    }
  };

  const extractResepsiCoordinates = (url: string) => {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/; // Regex to match @lat,long
    const match = url.match(regex);
    if (match) {
      setResepsiLatitude(match[1]);
      setResepsiLongitude(match[2]);
    } else {
      console.error("Coordinates not found in the URL");
    }
  };

  useEffect(() => {
    if (
      template.eventContract.locationLink &&
      template.eventContract.locationLink !== ""
    ) {
      extractAkadCoordinates(template.eventContract.locationLink);
    }
  }, [template.eventContract.locationLink]);

  useEffect(() => {
    if (
      template.eventReception.locationLink &&
      template.eventReception.locationLink !== ""
    ) {
      extractResepsiCoordinates(template.eventReception.locationLink);
    }
  }, [template.eventReception.locationLink]);

  useEffect(() => {
    setAkadSrc(
      `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${akadLatitude},${akadLongitude}`
    );
  }, [akadLatitude, akadLongitude, apiKey]);

  useEffect(() => {
    setResepsiSrc(
      `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${resepsiLatitude},${resepsiLongitude}`
    );
  }, [resepsiLatitude, resepsiLongitude, apiKey]);

  const getVideoId = (url: string) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v");
  };
  const videoId =
    template.linkVideo === "" ? "" : getVideoId(template.linkVideo);

  useEffect(() => {
    store.dispatch(
      SET_TEMPLATE({
        templateId: template.templateId,
        templateName: "Black Pink Template",
        templateColor: "bg-black",
      })
    );
  }, []);

  const timeLeft = useCountdown(
    template.eventReception.eventDate === ""
      ? "2069-12-12"
      : template.eventReception.eventDate
  );
  return (
    <div className="font-collingar text-white h-full bg-black">
      {!fromWebView && (
        <div className="min-h-svh relative bg-black">
          {template.cover ? (
            <img
              className="z-10 min-h-screen object-cover object-top"
              src={template.cover}
              alt=""
            />
          ) : (
            <p className="text-center pt-80">Cover</p>
          )}
          <div className="z-20 text-4xl font-collingar text-center flex items-center justify-center absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <p className="text-[#FFA5A5] absolute bottom-9 right-0">
              {template.groomNickName === "" ? "Name" : template.groomNickName}
            </p>
            <p className="absolute bottom-5 z-30 text-white">&</p>
            <p className="text-[#FFA5A5] absolute bottom-1 left-0">
              {template.brideNickName === "" ? "Name" : template.brideNickName}
            </p>
          </div>
          <div className="absolute bottom-12 text-xl text-white left-1/2 transform -translate-x-1/2 font-edith">
            <p>
              {template.eventReception.eventDate === ""
                ? "Example Date"
                : convertDotDate(template.eventReception.eventDate)}
            </p>
          </div>
        </div>
      )}
      <div className="bg-black">
        <div className="mt-5 ml-5 bg-black h-96 text-start flex items-start flex-col">
          <div className="w-[45%] bg-white h-4/6">
            {template.groom.picture ? (
              <img
                className="h-full w-full object-cover"
                src={template.groom.picture}
                alt=""
              />
            ) : (
              <div className="pt-24 flex justify-center items-center flex-col text-black">
                <div>Groom</div>
                <div>Picture</div>
              </div>
            )}
          </div>
          <div className="mt-5 relative w-full">
            <p className="text-3xl text-[#FFA5A5]">
              {template.groom.fullName === ""
                ? "Groom Name"
                : template.groom.fullName}
            </p>
            <div className="left-4 text-lg absolute top-5">
              <p className="text-2xl font-edith mb-1 text-[#cecece]">
                {template.groom.orderComeFamily === ""
                  ? "First Son of"
                  : template.groom.orderComeFamily}
              </p>
              <p>
                {template.groom.fatherName === ""
                  ? "Father Name"
                  : template.groom.fatherName}
              </p>
              <p>
                {template.groom.motherName === ""
                  ? "Mother Name"
                  : template.groom.motherName}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 mr-5 h-96 text-end bg-black flex items-end flex-col">
          <div className="w-[45%] bg-white h-4/6">
            {template.bride.picture ? (
              <img
                className="h-full w-full object-cover"
                src={template.bride.picture}
                alt=""
              />
            ) : (
              <div className="pt-24 flex justify-center items-center flex-col text-black">
                <div>Bride</div>
                <div>Picture</div>
              </div>
            )}
          </div>
          <div className="mt-5 relative w-full">
            <p className="text-3xl text-[#FFA5A5]">
              {template.bride.fullName === ""
                ? "Bride Name"
                : template.bride.fullName}
            </p>
            <div className="text-lg absolute top-5 right-4">
              <p className="text-2xl font-edith mb-1 text-[#cecece]">
                {template.bride.orderComeFamily === ""
                  ? "First Son of"
                  : template.bride.orderComeFamily}
              </p>
              <p>
                {template.bride.fatherName === ""
                  ? "Father Name"
                  : template.bride.fatherName}
              </p>
              <p>
                {template.bride.motherName === ""
                  ? "Mother Name"
                  : template.bride.motherName}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <p className="text-4xl text-center font-edith text-[#FFA5A5]">
          Our Love Story
        </p>
        {template.loveStory ? (
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
        ) : (
          <div className="flex mt-5 overflow-x-auto gap-10 scrollbar-hidden">
            {Array(5)
              .fill(undefined)
              .map((_, index) => (
                <div className="flex flex-col">
                  <div className="bg-white text-black text-center pt-24 h-60 w-[22rem] flex-shrink-0">
                    Love Story Image
                  </div>
                  <div className="flex gap-5 justify-end items-end mt-5">
                    <p className="text-3xl font-edith text-[#FFA5A5]">
                      Story Title
                    </p>
                    <p className="bg-[#2D2D2D] text-sm px-2 pt-1">09/09/1999</p>
                  </div>
                  <p className="pl-5 text-1xl font-edith text-end mt-2">
                    Description
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="mt-28 w-full flex justify-center items-center flex-col">
        <div className="flex w-11/12 relative justify-center items-center">
          <div className="w-full absolute -top-8 text-end">
            <p className="text-[#FFA5A5] text-4xl font-edith">Gallery</p>
          </div>
          {template.galleries &&
          template.galleries.length > 0 &&
          template.galleries[galleryIndex].image ? (
            <div className="w-11/12 h-[23rem] bg-white">
              <img
                className="h-full w-full object-cover"
                src={template.galleries[galleryIndex].image}
                alt=""
              />
            </div>
          ) : (
            <div className="w-11/12 h-[23rem] bg-white text-black text-3xl text-center pt-36">
              Gallery
            </div>
          )}
        </div>
        {template.galleries && template.galleries.length > 0 ? (
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
        ) : (
          <div className="w-11/12 mt-5 flex gap-5 overflow-x-auto scrollbar-hidden">
            <div className="w-1/4 bg-white h-24 flex-shrink-0 cursor-pointer text-center text-black pt-8">
              Gallery
            </div>
            <div className="w-1/4 bg-white h-24 flex-shrink-0 cursor-pointer text-center text-black pt-8">
              Gallery
            </div>
            <div className="w-1/4 bg-white h-24 flex-shrink-0 cursor-pointer text-center text-black pt-8">
              Gallery
            </div>
            <div className="w-1/4 bg-white h-24 flex-shrink-0 cursor-pointer text-center text-black pt-8">
              Gallery
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#805C5C]">
        <div className="mt-10 bg-gradient-to-b from-[#181313] to-[#805C5C]">
          <div className="pt-32 w-full">
            <p className="text-center text-[#FFA5A5] text-4xl font-edith">
              Video
            </p>
            <div
              className={`mt-5 h-52 w-10/12 mx-auto ${
                template.linkVideo === "" ? "bg-white" : ""
              } rounded-md`}
            >
              {template.linkVideo === "" ? (
                <p className="text-black text-center pt-24">Link Video</p>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  className="iframe-youtube"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width="100%"
                  height="100%"
                />
              )}
            </div>
          </div>
          <div className="pt-32 w-full text-center text-[#FFA5A5]">
            <p className="text-xl">Days Until Our Wedding</p>
            <div className="font-edith text-xl text-white">
              <span>{timeLeft.days} Days </span>
              <span>{timeLeft.hours} Hours </span>
              <span>{timeLeft.minutes} Minutes </span>
              <span>{timeLeft.seconds} Seconds</span>
            </div>
          </div>
          <div className="pt-32 w-full pr-2">
            <p className="text-end text-lg text-[#FFA5A5]">
              A celebration love and union.
            </p>
          </div>
          <div className="w-full h-[26rem] relative">
            <div className="w-full h-72 bg-white">
              {template.eventContract.locationLink === "" ? (
                <p className="text-center text-black pt-32">Event Contract</p>
              ) : (
                <iframe
                  src={akadSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Map"
                />
              )}
            </div>
            <div className="w-full flex items-center justify-center font-edith">
              <div className="w-11/12 bg-[#5E3737] absolute bottom-0 text-end py-2 px-6">
                <p className="text-4xl text-[#FFA5A5]">AKAD NIKAH</p>
                {template.eventContract.eventDate === "" ? (
                  <div>Example Date</div>
                ) : (
                  <div>
                    <p className="text-lg">
                      {convertDetailDate(template.eventContract.eventDate)} |{" "}
                      {template.eventContract.eventStartTime} -{" "}
                      {template.eventContract.eventEndTime} WIB
                    </p>
                    <p className="mt-2 underline">
                      {template.eventContract.locationAddress}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-10/12 text-5xl font-edith mt-20 flex items-center justify-center">
            <div className="w-11/12">
              <p>RESEPSI</p>
            </div>
          </div>
          <div className="w-full mt-5 bg-white h-72">
            {template.eventReception.locationLink === "" ? (
              <p className="text-center text-black pt-32">Event Reception</p>
            ) : (
              <iframe
                src={resepsiSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              />
            )}
          </div>
          <div className="mt-5 w-10/12 mx-auto bg-[#5E3737]">
            <p className="pl-5 py-2 mt-1 text-[#FFA5A5]">
              A celebration love and union.
            </p>
          </div>
          <div className="mt-6 w-10/12 mx-auto font-edith">
            <div className="text-xl w-9/12 mx-auto w-full">
              {template.eventReception.eventDate === "" ? (
                <div>example date</div>
              ) : (
                <div>
                  <p>{convertDetailDate(template.eventReception.eventDate)}</p>
                  <p className="ml-2">
                    {template.eventReception.eventStartTime} -{" "}
                    {template.eventReception.eventEndTime}
                  </p>
                  <p className="mt-5 underline">
                    {template.eventReception.locationAddress}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="pt-32">
            <p className="font-edith text-center text-5xl">RSVP</p>
            <div className="w-full flex justify-center flex-col items-center mt-5 pb-36">
              <input
                className="w-11/12 bg-black outline-none focus:ring-0 px-6 placeholder-[#FFA5A5] py-2 text-[#FFA5A5] rounded-md"
                type="text"
                placeholder="Name..."
                value={rsvpName}
                onChange={(e) => setRsvpName(e.target.value)}
              />
              <div className="flex my-5 gap-2 flex-col text-[#FFA5A5]">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="attendance"
                    value="attend"
                    id="attend"
                    className="accent-[#FFA5A5]"
                    onChange={handleAttendChange}
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
                    onChange={handleAttendChange}
                  />
                  <label htmlFor="absent">Regretfully decline</label>
                </div>
              </div>
              <button
                onClick={handleRsvp}
                className="w-11/12 bg-[#FFA5A5] py-1 rounded-md text-black font-bold"
              >
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
            {comment && (
              <div className="mt-5 h-96 overflow-auto scrollbar-hidden">
                {comment.map((c, index) => (
                  <div className="flex flex-col mt-5 bg-black w-9/12 py-2 mx-auto font-edith px-5 rounded-md">
                    <p className="text-2xl text-[#FFA5A5]">{c.name}</p>
                    <p className="font-forum">{c.remark}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-5 w-10/12 mx-auto font-edith">
              <p className="text-3xl mb-5">Send Blessing & Wishes</p>
              <div className="flex flex-col gap-4">
                <input
                  className="bg-black outline-none focus:ring-0 px-6 placeholder-[#FFA5A5] py-2 text-[#FFA5A5] rounded-md"
                  type="text"
                  placeholder="Name..."
                  name=""
                  id=""
                  value={blessingName}
                  onChange={(e) => setBlessingName(e.target.value)}
                />
                <input
                  className="bg-black outline-none focus:ring-0 px-6 placeholder-[#FFA5A5] py-2 text-[#FFA5A5] rounded-md"
                  type="text"
                  placeholder="Blessing & Wishes..."
                  name=""
                  id=""
                  value={blessing}
                  onChange={(e) => setBlessing(e.target.value)}
                />
                <button
                  onClick={handleBlessing}
                  className="bg-[#FFA5A5] py-1 rounded-md text-black font-bold"
                >
                  SEND
                </button>
              </div>
            </div>
            <div className="pt-36">
              <div className="flex gap-5 flex-col justify-center items-center">
                <p className="font-edith text-3xl">Angpao</p>
                {template.qris === "" ? (
                  <div className="size-56 bg-white text-black text-center pt-24">
                    QR Code
                  </div>
                ) : (
                  <img className="w-8/12" src={template.qris} alt="" />
                )}
              </div>
            </div>
            {template.account && (
              <div className="mt-5 text-center text-lg">
                {template.account.map((bank) => (
                  <div className="mt-10 flex justify-center items-center flex-col gap-3">
                    <img className="w-5/12" src={getBankImage(bank.bankName)} alt="" />
                    <span>Nomor Rekening {bank.bankName}</span>
                    <span>{bank.accountNumber}</span>
                  </div>
                ))}
              </div>
            )}
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
