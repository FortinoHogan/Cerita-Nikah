import { Timestamp } from "firebase/firestore";

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
  eventStartTime: string;
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

interface IComment {
  name: string;
  remark: string;
}

export interface IAccount {
  accountId: string;
  accountNumber: string;
  bankName: string;
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
  loveStory: ILoveStory[] | null;
  galleries: IGallery[] | null;
  rsvp?: IRsvp[];
  comment?: IComment[];
  linkVideo: string;
  backgroundMusic: string;
  price: number;
  isPay: boolean;
  qris: string;
  account: IAccount[] | null;
  domain: string;
  timestamp?: Timestamp;
}
