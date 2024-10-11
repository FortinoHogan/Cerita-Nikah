import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGallery {
  image: string;
}

export interface ILoveStory {
  storyId: string;
  storyTitle: string;
  storyDate: string;
  storyDescription: string;
  storyPhoto: string;
}

export interface TemplateState {
  id: string;
  userId: string;
  templateId: string;
  cover?: File | null;
  groomNickName?: string;
  brideNickName?: string;
  openingRemarks: string;
  closingRemarks: string;
  groom: {
    picture: string;
    fullName: string;
    fatherName: string;
    motherName: string;
    orderComeFamily: string;
  };
  bride: {
    picture: string;
    fullName: string;
    fatherName: string;
    motherName: string;
    orderComeFamily: string;
  };
  eventContract: {
    eventName: string;
    eventDate: string;
    eventStartTime: string;
    eventEndTime: string;
    zoneTime: string;
    locationAddress: string;
    locationLink: string;
  };
  eventReception: {
    eventName: string;
    eventDate: string;
    eventStartTime: string;
    eventEndTime: string;
    zoneTime: string;
    locationAddress: string;
    locationLink: string;
  };
  loveStory: ILoveStory[] | null;
  gallery: IGallery[] | null;
  linkVideo: string;
  backgroundMusic: string;
  price: number;
  isPay: boolean;
  domain: string;
}

const initialState: TemplateState = {
  id: "",
  userId: "",
  templateId: "",
  cover: null,
  groomNickName: "",
  brideNickName: "",
  openingRemarks: "",
  closingRemarks: "",
  groom: {
    picture: "",
    fullName: "",
    fatherName: "",
    motherName: "",
    orderComeFamily: "",
  },
  bride: {
    picture: "",
    fullName: "",
    fatherName: "",
    motherName: "",
    orderComeFamily: "",
  },
  eventContract: {
    eventName: "",
    eventDate: "",
    eventStartTime: "",
    eventEndTime: "",
    zoneTime: "",
    locationAddress: "",
    locationLink: "",
  },
  eventReception: {
    eventName: "",
    eventDate: "",
    eventStartTime: "",
    eventEndTime: "",
    zoneTime: "",
    locationAddress: "",
    locationLink: "",
  },
  loveStory: null,
  gallery: null,
  linkVideo: "",
  backgroundMusic: "",
  price: 0,
  isPay: false,
  domain: "",
};

export const TemplateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    SET_TEMPLATE: (state, action: PayloadAction<string>) => {
      state.templateId = action.payload;
    },
    SET_COVER: (state, action: PayloadAction<Partial<TemplateState>>) => {
      state.cover = action.payload.cover; 
      state.groomNickName = action.payload.groomNickName;
      state.brideNickName = action.payload.brideNickName;
    }
  },
});

export const { SET_TEMPLATE, SET_COVER } = TemplateSlice.actions;

export default TemplateSlice;
