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

interface IComment {
  name: string;
  remark: string;
}

interface IBankAccount {
  bankName: string;
  accountNumber: string
}

interface IBank {
  qrCode?: string;
  bankAccount: IBankAccount[];
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
  galleries: IGallery[];
  rsvp: IRsvp[];
  comment: IComment[];
  linkVideo: string;
  backgroundMusic: string;
  price: number;
  isPay: boolean;
  bank: IBank;
  domain: string;
}
