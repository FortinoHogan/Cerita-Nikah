import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoveStoryCard } from "../../../components/love-story-card/ILoveStoryCard";
import { IAccount } from "../../../components/account-card/IAccountCard";

export interface IGallery {
  imageId: string;
  image: string;
  file?: File
}

export interface TemplateState {
  id: string;
  userId: string;
  templateId: string;
  cover: string;
  coverFile?: File;
  groomNickName: string;
  brideNickName: string;
  openingRemarks: string;
  closingRemarks: string;
  groom: {
    picture: string;
    file?: File;
    fullName: string;
    fatherName: string;
    motherName: string;
    orderComeFamily: string;
  };
  bride: {
    picture: string;
    file?: File;
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
  loveStory: ILoveStoryCard[] | null;
  loveStorySaved: ILoveStoryCard[] | null;
  gallery: IGallery[] | null;
  linkVideo: string;
  backgroundMusic: string;
  qris: string;
  qrisFile?: File;
  accounts: IAccount[] | null;
  accountsSaved: IAccount[] | null;
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
  loveStorySaved: null,
  gallery: null,
  linkVideo: "",
  backgroundMusic: "",
  qris: "",
  accounts: null,
  accountsSaved: null,
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
      state.coverFile = action.payload.coverFile;
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
      state.groom.file = action.payload.groom?.file;
      state.groom.fullName = action.payload.groom?.fullName || "";
      state.groom.fatherName = action.payload.groom?.fatherName || "";
      state.groom.motherName = action.payload.groom?.motherName || "";
      state.groom.orderComeFamily = action.payload.groom?.orderComeFamily || "";
      state.bride.picture = action.payload.bride?.picture || "";
      state.bride.file = action.payload.bride?.file;
      state.bride.fullName = action.payload.bride?.fullName || "";
      state.bride.fatherName = action.payload.bride?.fatherName || "";
      state.bride.motherName = action.payload.bride?.motherName || "";
      state.bride.orderComeFamily = action.payload.bride?.orderComeFamily || "";
    },
    SET_EVENT_CONTRACT: (
      state,
      action: PayloadAction<Partial<TemplateState>>
    ) => {
      state.eventContract.eventName =
        action.payload.eventContract?.eventName || "";
      state.eventContract.eventDate =
        action.payload.eventContract?.eventDate || "";
      state.eventContract.eventStartTime =
        action.payload.eventContract?.eventStartTime || "";
      state.eventContract.eventEndTime =
        action.payload.eventContract?.eventEndTime || "";
      state.eventContract.zoneTime =
        action.payload.eventContract?.zoneTime || "";
      state.eventContract.locationAddress =
        action.payload.eventContract?.locationAddress || "";
      state.eventContract.locationLink =
        action.payload.eventContract?.locationLink || "";
    },
    SET_EVENT_RECEPTION: (
      state,
      action: PayloadAction<Partial<TemplateState>>
    ) => {
      state.eventReception.eventName =
        action.payload.eventReception?.eventName || "";
      state.eventReception.eventDate =
        action.payload.eventReception?.eventDate || "";
      state.eventReception.eventStartTime =
        action.payload.eventReception?.eventStartTime || "";
      state.eventReception.eventEndTime =
        action.payload.eventReception?.eventEndTime || "";
      state.eventReception.zoneTime =
        action.payload.eventReception?.zoneTime || "";
      state.eventReception.locationAddress =
        action.payload.eventReception?.locationAddress || "";
      state.eventReception.locationLink =
        action.payload.eventReception?.locationLink || "";
    },
    ADD_LOVE_STORY: (state, action: PayloadAction<ILoveStoryCard>) => {
      if (!state.loveStory) {
        state.loveStory = [];
      }
      state.loveStory?.push(action.payload);
    },
    SAVE_LOVE_STORY: (state, action: PayloadAction<ILoveStoryCard>) => {
      if (!state.loveStorySaved) {
        state.loveStorySaved = [];
      }
      state.loveStorySaved?.push(action.payload);
    },
    SET_LOVE_STORY: (state, action: PayloadAction<ILoveStoryCard>) => {
      if (state.loveStory) {
        const index = state.loveStory.findIndex(
          (story) => story.storyId === action.payload.storyId
        );
        if (index !== -1) {
          state.loveStory[index] = {
            ...state.loveStory[index],
            ...action.payload,
          };
        }
      }
    },
    DELETE_LOVE_STORY: (state, action: PayloadAction<string>) => {
      if (state.loveStorySaved) {
        const index = state.loveStorySaved.findIndex(
          (story) => story.storyId === action.payload
        );
        if (index !== -1) {
          state.loveStorySaved.splice(index, 1);
        }
      }
    },
    REMOVE_LOVE_STORY: (state, action: PayloadAction<string>) => {
      if (state.loveStory) {
        const index = state.loveStory.findIndex(
          (story) => story.storyId === action.payload
        );
        if (index !== -1) {
          state.loveStory.splice(index, 1);
        }
      }
    },
    ADD_IMAGE_GALLERY: (state, action: PayloadAction<IGallery>) => {
      if (!state.gallery) {
        state.gallery = [];
      }
      state.gallery?.push(action.payload);
    },
    DELETE_IMAGE_GALLERY: (state, action: PayloadAction<string>) => {
      if (state.gallery) {
        const index = state.gallery.findIndex(
          (image) => image.imageId === action.payload
        );
        if (index !== -1) {
          state.gallery.splice(index, 1);
        }
      }
    },
    SET_LINK_VIDEO: (state, action: PayloadAction<string>) => {
      state.linkVideo = action.payload;
    },
    SET_BACKGROUND_MUSIC: (state, action: PayloadAction<string>) => {
      state.backgroundMusic = action.payload;
    },
    SET_QRIS: (state, action: PayloadAction<Partial<TemplateState>>) => {
      state.qris = action.payload.qris || "";
      state.qrisFile = action.payload.qrisFile
    },
    DELETE_QRIS: (state) => {
      state.qris = "";
    },
    ADD_ACCOUNT: (state, action: PayloadAction<IAccount>) => {
      if (!state.accounts) {
        state.accounts = [];
      }
      state.accounts?.push(action.payload);
    },
    SAVE_ACCOUNT: (state, action: PayloadAction<IAccount>) => {
      if (!state.accountsSaved) {
        state.accountsSaved = [];
      }
      state.accountsSaved?.push(action.payload);
    },
    SET_ACCOUNT: (state, action: PayloadAction<IAccount>) => {
      if (state.accounts) {
        const index = state.accounts.findIndex(
          (account) => account.accountId === action.payload.accountId
        );
        if (index !== -1) {
          state.accounts[index] = {
            ...state.accounts[index],
            ...action.payload,
          };
        }
      }
    },
    DELETE_ACCOUNT: (state, action: PayloadAction<string>) => {
      if (state.accountsSaved) {
        const index = state.accountsSaved.findIndex(
          (account) => account.accountId === action.payload
        );
        if (index !== -1) {
          state.accountsSaved.splice(index, 1);
        }
      }
    },
    REMOVE_ACCOUNT: (state, action: PayloadAction<string>) => {
      if (state.accounts) {
        const index = state.accounts.findIndex(
          (account) => account.accountId === action.payload
        );
        if (index !== -1) {
          state.accounts.splice(index, 1);
        }
      }
    },
    ADD_DOMAIN: (state, action: PayloadAction<string>) => {
      state.domain = action.payload;
    }
  },
});

export const {
  SET_TEMPLATE,
  SET_COVER,
  SET_CONTENT_REGARDS,
  SET_CONTENT_PROFILE,
  SET_EVENT_CONTRACT,
  SET_EVENT_RECEPTION,
  ADD_LOVE_STORY,
  SAVE_LOVE_STORY,
  SET_LOVE_STORY,
  DELETE_LOVE_STORY,
  REMOVE_LOVE_STORY,
  ADD_IMAGE_GALLERY,
  DELETE_IMAGE_GALLERY,
  SET_LINK_VIDEO,
  SET_BACKGROUND_MUSIC,
  SET_QRIS,
  DELETE_QRIS,
  ADD_ACCOUNT,
  SAVE_ACCOUNT,
  SET_ACCOUNT,
  DELETE_ACCOUNT,
  REMOVE_ACCOUNT,
  ADD_DOMAIN,
} = TemplateSlice.actions;

export default TemplateSlice;
