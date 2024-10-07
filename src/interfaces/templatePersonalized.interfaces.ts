interface IPerson {
  picture: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  orderComeFamily: string;
}

interface IEvent {
  eventName: string;
  eventDate: string;
  eventStartTIme: string;
  eventEndTime: string;
  zoneTime: string;
  locationAddress: string;
  locationLink: string;
}

interface ILoveStory {
  storyTitle: string;
  storyDate: string;
  storyDescription: string;
  storyPhoto: string;
}

interface IGallery {
  image: string;
}

interface IRsvp {
  name: string;
  isAttend: boolean;
}

export interface ITemplatePersonalized {
  id: string;
  userId: string;
  templateId: string;
  cover: string;
  groomNickName: string;
  brideNickName: string;
  openingRemarks: string;
  closingRemarks: string;
  groom: IPerson;
  bride: IPerson;
  eventContract: IEvent;
  eventReception: IEvent;
  loveStory: ILoveStory[];
  gallery: IGallery[];
  rsvp: IRsvp[];
  linkVideo: string;
  backgroundMusic: string;
  price: number;
  isPay: boolean;
  domain: string;
}
