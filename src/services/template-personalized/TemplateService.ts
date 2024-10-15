import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { ITemplatePersonalized } from "../../interfaces/templatePersonalized.interfaces";

export const addTemplatePersonalized = async (
  templatePersonalized: ITemplatePersonalized
) => {
  await setDoc(
    doc(db, "TemplatePersonalized", templatePersonalized.id),
    templatePersonalized
  );
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
