import React from "react";
import BlackPinkTemplate from "../views/templates-page/black-pink-template/BlackPinkTemplate";
import WhiteBlossomTemplate from "../views/templates-page/white-blossom-template/WhiteBlossomTemplate";
import HomePage from "../views/home-page/HomePage";
import { useNavigate } from "react-router-dom";
import { ITemplatesPage } from "../views/templates-page/TemplatesPage.interfaces";
import { TemplateState } from "../services/redux/template-slice/TemplateSlice";
import { ITemplatePersonalized } from "../interfaces/templatePersonalized.interfaces";

interface ITemplateData {
  id: string,
  view: React.FC<ITemplatesPage>
}

const TemplateData: ITemplateData[] = [
  {
    id: "282a56a0-516d-48ab-ac6c-679e5417e034",
    view: BlackPinkTemplate,
  },
  {
    id: "efde7119-e53d-4733-9cc7-38cd2300d205",
    view: WhiteBlossomTemplate,
  },
];

export const TemplateMapper = (template: TemplateState): ITemplatePersonalized => {
  return {
    id: template.id,
    userId: template.userId,
    templateId: template.templateId,
    cover: template.cover,
    groomNickName: template.groomNickName,
    brideNickName: template.brideNickName,
    openingRemarks: template.openingRemarks,
    closingRemarks: template.closingRemarks,
    groom: {
      picture: template.groom.picture,
      fullName: template.groom.fullName,
      fatherName: template.groom.fatherName,
      motherName: template.groom.motherName,
      orderComeFamily: template.groom.orderComeFamily
    },
    bride: {
      picture: template.bride.picture,
      fullName: template.bride.fullName,
      fatherName: template.bride.fatherName,
      motherName: template.bride.motherName,
      orderComeFamily: template.bride.orderComeFamily
    },
    eventContract: {
      eventName: template.eventContract.eventName,
      eventDate: template.eventContract.eventDate,
      eventStartTime: template.eventContract.eventStartTime,
      eventEndTime: template.eventContract.eventEndTime,
      zoneTime: template.eventContract.zoneTime,
      locationAddress: template.eventContract.locationAddress,
      locationLink: template.eventContract.locationLink
    },
    eventReception: {
      eventName: template.eventReception.eventName,
      eventDate: template.eventReception.eventDate,
      eventStartTime: template.eventReception.eventStartTime,
      eventEndTime: template.eventReception.eventEndTime,
      zoneTime: template.eventReception.zoneTime,
      locationAddress: template.eventReception.locationAddress,
      locationLink: template.eventReception.locationLink
    },
    loveStory: template.loveStory,
    galleries: template.gallery || null,
    rsvp: [],
    comment: [],
    linkVideo: template.linkVideo,
    backgroundMusic: template.backgroundMusic,
    price: template.price,
    isPay: template.isPay,
    qris: template.qris,
    account: template.accounts,
    domain: template.domain,
  }
}

export const TemplateGenerator = (data: ITemplatesPage) => {
  const templateDatas = TemplateData.find((templateData) => templateData.id === data.template.templateId);
  
  return templateDatas ? <templateDatas.view template={data.template} view={data.view} /> : <HomePage />;
}
