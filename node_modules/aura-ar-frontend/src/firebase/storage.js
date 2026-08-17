import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseEnabled, app } from "./app";

let storage = null;

if (firebaseEnabled && app) {
  storage = getStorage(app);
}

export { storage };

export async function uploadModel(file, path) {
  if (!firebaseEnabled || !storage) {
    throw new Error("Firebase is not configured");
  }

  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
}

export async function getModelURL(path) {
  if (!firebaseEnabled || !storage) {
    return null;
  }

  const storageRef = ref(storage, path);
  try {
    return await getDownloadURL(storageRef);
  } catch {
    return null;
  }
}
