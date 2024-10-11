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
  cover: string;
  groomNickName: string;
  brideNickName: string;
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
  cover: "",
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
      state.cover = action.payload.cover || "";
      state.groomNickName = action.payload.groomNickName || "";
      state.brideNickName = action.payload.brideNickName || "";
    },
    SET_CONTENT_REGARDS: (
      state,
      action: PayloadAction<Partial<TemplateState>>
    ) => {
      state.openingRemarks = action.payload.openingRemarks || "";
      state.closingRemarks = action.payload.closingRemarks || "";
    },
    SET_CONTENT_PROFILE: (
      state,
      action: PayloadAction<Partial<TemplateState>>
    ) => {
      state.groom.picture = action.payload.groom?.picture || "";
      state.groom.fullName = action.payload.groom?.fullName || "";
      state.groom.fatherName = action.payload.groom?.fatherName || "";
      state.groom.motherName = action.payload.groom?.motherName || "";
      state.groom.orderComeFamily = action.payload.groom?.orderComeFamily || "";
      state.bride.picture = action.payload.bride?.picture || "";
      state.bride.fullName = action.payload.bride?.fullName || "";
      state.bride.fatherName = action.payload.bride?.fatherName || "";
      state.bride.motherName = action.payload.bride?.motherName || "";
      state.bride.orderComeFamily = action.payload.bride?.orderComeFamily || "";
    },
  },
});

export const { SET_TEMPLATE, SET_COVER, SET_CONTENT_REGARDS, SET_CONTENT_PROFILE } =
  TemplateSlice.actions;

export default TemplateSlice;
