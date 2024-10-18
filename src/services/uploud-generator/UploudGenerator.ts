import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { v4 as uuidv4 } from 'uuid';

export const handleUploudImage = async (file: File) => {
  const storageRef = ref(storage, `images/${uuidv4()}`);

  try {
    // Upload the file to Firebase Storage
    await uploadBytes(storageRef, file);
    console.log("Image uploaded successfully");

    // Get the URL of the uploaded image
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error uploading image:", error);
    return false;
  }
};
