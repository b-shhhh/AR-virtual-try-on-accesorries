import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./config";

function hasRealFirebaseConfig(config) {
  return Boolean(
    config.apiKey &&
      config.authDomain &&
      config.projectId &&
      config.appId &&
      config.apiKey !== "your-api-key"
  );
}

export const firebaseEnabled = hasRealFirebaseConfig(firebaseConfig);

let auth = null;

if (firebaseEnabled) {
  const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);
  auth = getAuth(app);
}

export { auth };
