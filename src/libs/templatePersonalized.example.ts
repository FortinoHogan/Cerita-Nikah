import { ITemplatePersonalized } from "../interfaces/templatePersonalized.interfaces";

export const templatePersonalizedExample: ITemplatePersonalized = {
  id: "4465e604-18aa-4784-8bca-e17c06a84b2d",
  userId: "5fe1f46a-f67e-4f4a-80a1-742c1c4a2940",
  templateId: "282a56a0-516d-48ab-ac6c-679e5417e034",
  cover: "",
  groomNickName: "Steven",
  brideNickName: "Evelyn",
  openingRemarks: "",
  closingRemarks: "",
  groom: {
    picture: "",
    fullName: "Steven Forsythia",
    fatherName: "",
    motherName: "",
    orderComeFamily: "Fourth",
  },
  bride: {
    picture: "",
    fullName: "Evelyn Elni Yang",
    fatherName: "",
    motherName: "",
    orderComeFamily: "Third",
  },
  eventContract: {
    eventName: "",
    eventDate: "",
    eventStartTIme: "",
    eventEndTime: "",
    zoneTime: "",
    locationAddress: "",
    locationLink: "",
  },
  eventReception: {
    eventName: "",
    eventDate: "",
    eventStartTIme: "",
    eventEndTime: "",
    zoneTime: "",
    locationAddress: "",
    locationLink: "",
  },
  loveStory: [
    {
      storyTitle: "",
      storyDate: "",
      storyDescription: "",
      storyPhoto: "",
    },
    {
      storyTitle: "",
      storyDate: "",
      storyDescription: "",
      storyPhoto: "",
    },
  ],
  gallery: [
    {
      image: "",
    },
    {
      image: "",
    },
  ],
  rsvp: [
    {
      name: "Fortino",
      isAttend: true,
    },
    {
      name: "Ryan",
      isAttend: false,
    },
  ],
  linkVideo: "",
  backgroundMusic: "",
  price: 350000,
  isPay: true,
  domain: "stevelyn.ceritanikah.online",
//   domain: "stevelyn.localhost:3000",
};
