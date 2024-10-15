import { ITemplatePersonalized } from "../interfaces/templatePersonalized.interfaces";

export const templatePersonalizedExample: ITemplatePersonalized = {
  id: "12e81ed2-e710-4ead-8b25-370f12bd4c56",
  userId: "0c2c7945-a52f-4d74-b6b6-58a2bb07c5d0",
  templateId: "efde7119-e53d-4733-9cc7-38cd2300d205",
  cover: "/assets/images/black-pink-template/black-pink-web-image.jpg",
  groomNickName: "Damian",
  brideNickName: "Isabelle",
  openingRemarks:
    "We give thanks to God for the blessing of love that has brought us together. It is with deep appreciation that we, along with our families, invite you to share in the celebration of our wedding day, as we unite our hearts in love and commitment.",
  closingRemarks: "",
  groom: {
    picture: "/assets/images/black-pink-template/groom.png",
    fullName: "Damian Renaud",
    fatherName: "Mr. Marcus Renaud",
    motherName: "Mrs. Eleanor Renaud",
    orderComeFamily: "Second Son of ",
  },
  bride: {
    picture: "/assets/images/black-pink-template/bride.png",
    fullName: "Isabelle Rousseau",
    fatherName: "Mr. Charles Rousseau",
    motherName: "Mrs. Victoria Rousseau",
    orderComeFamily: "Only Daughter of",
  },
  eventContract: {
    eventName: "",
    eventDate: "2024-12-01T10:00:00+0700",
    eventStartTIme: "10:00",
    eventEndTime: "12:00",
    zoneTime: "GMT+7",
    locationAddress:
      "Jl. Pantai Indah Kapuk, RT.6/RW.2, Kamal Muara, Kec. Penjaringan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14470",
    locationLink: "",
  },
  eventReception: {
    eventName: "",
    eventDate: "2024-12-01T18:00:00+0700",
    eventStartTIme: "18:00",
    eventEndTime: "22:00",
    zoneTime: "GMT+7",
    locationAddress:
      "Jl. Pantai Indah Kapuk, RT.6/RW.2, Kamal Muara, Kec. Penjaringan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14470",
    locationLink: "",
  },
  loveStory: [
    {
      storyTitle: "The First Encounter",
      storyDate: "2016-03-01T00:00:00",
      storyDescription:
        "In Willow Creek, we attend Isabelle's first art exhibition. She meets Damian, a reserved writer, and their eyes lock, sparking an instant connection.",
      storyPhoto: "/assets/images/black-pink-template/galery-1.png",
    },
    {
      storyTitle: "Building a Connection",
      storyDate: "2016-03-15T00:00:00",
      storyDescription:
        "Our friendship deepens over coffee and laughter at a cozy café. During a riverside stroll, their playful banter and lingering glances reveal a growing chemistry.",
      storyPhoto: "/assets/images/black-pink-template/galery-2.png",
    },
    {
      storyTitle: "The Blossoming Love",
      storyDate: "2017-03-01T00:00:00",
      storyDescription:
        "Under a starlit sky, we confess our feelings each other, realizing we are falling in love, bound together by inspiration and connection.",
      storyPhoto: "/assets/images/black-pink-template/galery-3.png",
    },
  ],
  galleries: [
    {
      image: "/assets/images/black-pink-template/galery-1.png",
    },
    {
      image: "/assets/images/black-pink-template/galery-2.png",
    },
    {
      image: "/assets/images/black-pink-template/galery-3.png",
    },
    {
      image: "/assets/images/black-pink-template/galery-4.png",
    },
    {
      image: "/assets/images/black-pink-template/galery-1.png",
    },
    {
      image: "/assets/images/black-pink-template/galery-2.png",
    },
    {
      image: "/assets/images/black-pink-template/galery-3.png",
    },
    {
      image: "/assets/images/black-pink-template/galery-4.png",
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
  comment: [
    {
      name: "Fortino",
      remark:
        "May your marriage be filled with love, joy, and strength. Wishing you a lifetime of happiness and togetherness.",
    },
    {
      name: "Ryan",
      remark:
        "Love has brought you together, and it will guide you forward. Wishing you both a lifetime of wonderful memories and shared dreams.",
    },
  ],
  linkVideo: "https://www.youtube.com/watch?v=nqHFCV_3PxU",
  backgroundMusic: "",
  price: 350000,
  isPay: true,
  bank: {
    qrCode: "",
    bankAccount: [
      {
        accountNumber: "5271932619",
        bankName: "BCA",
      },
      {
        accountNumber: "5271932619",
        bankName: "Mandiri",
      },
    ],
  },
  domain: "damisabel.ceritanikah.online",
  //   domain: "stevelyn.localhost:3000",
};
