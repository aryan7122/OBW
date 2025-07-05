import { storage } from "./firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


  
  

// Function to upload an image and get its URL
const uploadImage = async (file, fileName) => {
  try {
    const storageRef = ref(storage, `clinical_concerns/${fileName}`); // Create a reference
    await uploadBytes(storageRef, file); // Upload file
    const url = await getDownloadURL(storageRef); // Get URL
    console.log("Uploaded URL:", url);
    return url;
  } catch (error) {
    console.error("Upload failed:", error);
    return null;
  }
};
const imageFiles = [bImg1, bImg2, bImg3, bImg4, bImg5, bImg6];

const uploadAllImages = async () => {
  const urls = await Promise.all(
    imageFiles.map((file, index) => uploadImage(file, `image_${index + 1}.png`))
  );
  console.log("All Uploaded URLs:", urls);
};
