import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TemplateState {
    id: string,
    userId: string,
    templateId: string,
    cover: string,
    groomNickName: string,
    brideNickName: string,
    openingRemarks: string,
    closingRemarks: string,
    groom: {
        picture: string,
        fullName: string,
        fatherName: string,
        motherName: string,
        orderComeFamily: string
    },
    bride: {
        picture: string,
        fullName: string,
        fatherName: string,
        motherName: string,
        orderComeFamily: string
    },
    eventContract: {
        eventName: string,
        eventDate: string,
        eventStartTime: string,
        eventEndTime: string,
        zoneTime: string,
        locationAddress: string,
        locationLink: string
    },
    eventReception: {
        eventName: string,
        eventDate: string,
        eventStartTime: string,
        eventEndTime: string,
        zoneTime: string,
        locationAddress: string,
        locationLink: string
    },
    loveStory: [
        {
            storyTitle: string,
            storyDate: string,
            storyDescription: string,
            storyPhoto: string
        },
        {
            storyTitle: string,
            storyDate: string,
            storyDescription: string,
            storyPhoto: string
        }
    ],
    gallery: [
        {
            image: string
        },
        {
            image: string
        }
    ],
    linkVideo: string,
    backgroundMusic: string,
    price: number,
    isPay: boolean,
    domain: string
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
        orderComeFamily: ""
    },
    bride: {
        picture: "",
        fullName: "",
        fatherName: "",
        motherName: "",
        orderComeFamily: ""
    },
    eventContract: {
        eventName: "",
        eventDate: "",
        eventStartTime: "",
        eventEndTime: "",
        zoneTime: "",
        locationAddress: "",
        locationLink: ""
    },
    eventReception: {
        eventName: "",
        eventDate: "",
        eventStartTime: "",
        eventEndTime: "",
        zoneTime: "",
        locationAddress: "",
        locationLink: ""
    },
    loveStory: [
        {
            storyTitle: "",
            storyDate: "",
            storyDescription: "",
            storyPhoto: ""
        },
        {
            storyTitle: "",
            storyDate: "",
            storyDescription: "",
            storyPhoto: ""
        }
    ],
    gallery: [
        {
            image: "",
        },
        {
            image: "",
        }
    ],
    linkVideo: "",
    backgroundMusic: "",
    price: 0,
    isPay: false,
    domain: ""
}

export const TemplateSlice = createSlice({
    name: "template",
    initialState,
    reducers: {
        SET_TEMPLATE: (state: any, action: PayloadAction<TemplateState>) => {
            return action.payload
        },
    },
}); 

export const { SET_TEMPLATE } = TemplateSlice.actions;

export default TemplateSlice;