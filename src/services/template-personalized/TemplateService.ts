import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import {
  IComment,
  IRsvp,
  ITemplatePersonalized,
} from "../../interfaces/templatePersonalized.interfaces";
import { TemplateState } from "../redux/template-slice/TemplateSlice";
import { handleUploudImage } from "../uploud-generator/UploudGenerator";
import { v4 as uuidv4 } from "uuid";
import { IMessage } from "../../interfaces/message.interfaces";
const _ = require("lodash");

export const addTemplatePersonalized = async (templateState: TemplateState) => {
  try {
    let coverFile, groomFile, brideFile, qrisFile;
    let storyFile: string[] = [];
    let galleryFile: string[] = [];
    let loveStoryTemp = Array.isArray(templateState.loveStorySaved)
      ? _.cloneDeep(templateState.loveStorySaved)
      : [];
    const loveStoryData = loveStoryTemp.map(
      ({ storyFile, ...rest }: any) => rest
    );

    if (templateState.loveStorySaved) {
      const loveStoryFileResults = await Promise.all(
        templateState.loveStorySaved.map(async (loveStory) => {
          if (loveStory.storyFile) {
            return await handleUploudImage(loveStory.storyFile);
          }
          return "";
        })
      );

      storyFile = loveStoryFileResults.map((result) =>
        result === false ? "" : result
      );
    }

    if (storyFile) {
      storyFile.map((story, index) => {
        if (templateState.loveStorySaved && loveStoryData)
          loveStoryData[index].storyPhoto = story;
        else loveStoryData[index].storyPhoto = "";
      });
    }

    // Sequential Upload for single images
    if (templateState.coverFile)
      coverFile = await handleUploudImage(templateState.coverFile);
    if (templateState.groom.file)
      groomFile = await handleUploudImage(templateState.groom.file);
    if (templateState.bride.file)
      brideFile = await handleUploudImage(templateState.bride.file);
    if (templateState.qrisFile)
      qrisFile = await handleUploudImage(templateState.qrisFile);

    if (templateState.gallery) {
      const galleryFileResults = await Promise.all(
        templateState.gallery.map(async (galer) => {
          if (galer.file) {
            return await handleUploudImage(galer.file);
          }
          return "";
        })
      );

      galleryFile = galleryFileResults.map((result) =>
        result === false ? "" : result
      );
    }

    const templatePersonalized: ITemplatePersonalized = {
      backgroundMusic: templateState.backgroundMusic,
      account: templateState.accounts,
      bride: {
        fatherName: templateState.bride.fatherName,
        fullName: templateState.bride.fullName,
        motherName: templateState.bride.motherName,
        orderComeFamily: templateState.bride.orderComeFamily,
        picture: typeof brideFile === "string" ? brideFile : "",
      },
      brideNickName: templateState.brideNickName,
      closingRemarks: templateState.closingRemarks,
      cover: typeof coverFile === "string" ? coverFile : "",
      domain: `${templateState.domain}.${window.location.host}`,
      eventContract: templateState.eventContract,
      eventReception: templateState.eventReception,
      galleries: galleryFile.map((image) => ({ image })),
      groom: {
        fatherName: templateState.groom.fatherName,
        fullName: templateState.groom.fullName,
        motherName: templateState.groom.motherName,
        orderComeFamily: templateState.groom.orderComeFamily,
        picture: typeof groomFile === "string" ? groomFile : "",
      },
      groomNickName: templateState.groomNickName,
      id: uuidv4(),
      isPay: templateState.isPay,
      linkVideo: templateState.linkVideo,
      loveStory: loveStoryData,
      openingRemarks: templateState.openingRemarks,
      price: templateState.price,
      qris: typeof qrisFile === "string" ? qrisFile : "",
      templateId: "282a56a0-516d-48ab-ac6c-679e5417e034", // hard coded => todo change based on templateState.templateId
      userId: templateState.userId,
      timestamp: Timestamp.now(),
    };

    console.log("templateState", templateState);
    console.log("templatePersonalized", templatePersonalized);

    await setDoc(
      doc(db, "TemplatePersonalized", templatePersonalized.id),
      templatePersonalized
    );

    const message: IMessage = {
      isSuccess: true,
      message: `${templatePersonalized.groomNickName} & ${templatePersonalized.brideNickName}`,
    };

    return message;
  } catch (err: any) {
    const message: IMessage = {
      isSuccess: false,
      message: err.message,
    };
    return message;
  }
};

export const getTemplatePersonalizedByDomain = async (
  domain: string
): Promise<ITemplatePersonalized | null> => {
  const templatesRef = collection(db, "TemplatePersonalized"); // Reference to the TemplatePersonalized collection

  // Create a query where the "domain" field equals the specified domain
  const q = query(templatesRef, where("domain", "==", domain));

  // Execute the query and retrieve the documents
  const querySnapshot = await getDocs(q);

  // Check if any documents were returned
  if (!querySnapshot.empty) {
    // Assuming there's only one document with the matching domain
    const doc = querySnapshot.docs[0];
    return doc.data() as ITemplatePersonalized;
  } else {
    return null; // No matching document found
  }
};

export const isSubDomainAlreadyTaken = async (domain: string) => {
  const templatesRef = collection(db, "TemplatePersonalized");

  const q = query(templatesRef, where("domain", "==", domain));

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) return true;

  return false;
};

export const addBlessing = async (
  template: ITemplatePersonalized,
  newComment: IComment
) => {
  const docRef = doc(db, "TemplatePersonalized", template.id);

  try {
    await updateDoc(docRef, {
      comment: template.comment
        ? [...template.comment, newComment]
        : [newComment],
    });
  } catch (error) {
    console.error("Error updating template:", error);
  }
};

export const addRsvp = async (
  template: ITemplatePersonalized,
  newRsvp: IRsvp
) => {
  const docRef = doc(db, "TemplatePersonalized", template.id);

  try {
    await updateDoc(docRef, {
      rsvp: template.rsvp ? [...template.rsvp, newRsvp] : [newRsvp],
    });
  } catch (error) {
    console.error("Error updating template:", error);
  }
};
