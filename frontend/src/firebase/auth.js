import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, firebaseEnabled } from "./app";

let persistenceReady = null;

function ensurePersistence() {
  if (!firebaseEnabled || !auth) {
    return Promise.resolve();
  }

  if (!persistenceReady) {
    persistenceReady = setPersistence(auth, browserSessionPersistence);
  }

  return persistenceReady;
}

export function subscribeToAuth(callback) {
  if (firebaseEnabled && auth) {
    ensurePersistence().finally(() => undefined);
    return onAuthStateChanged(auth, callback);
  }

  callback(null);
  return () => {};
}

export async function loginUser(email, password) {
  if (firebaseEnabled && auth) {
    await ensurePersistence();
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  }

  throw new Error("Firebase authentication is not configured.");
}

export async function signupUser(email, password, profile = {}) {
  const { fullName, address, phoneNumber } = profile;

  if (firebaseEnabled && auth) {
    await ensurePersistence();
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const newUser = result.user;

    if (fullName) {
      await updateProfile(newUser, { displayName: fullName });
    }

    if (db) {
      await setDoc(doc(db, "users", newUser.uid), {
        fullName: fullName || null,
        email,
        address: address || null,
        phoneNumber: phoneNumber || null,
        createdAt: new Date().toISOString()
      });
    }

    return newUser;
  }

  throw new Error("Firebase authentication is not configured.");
}

export async function logoutUser() {
  if (firebaseEnabled && auth) {
    await signOut(auth);
    return;
  }

  return;
}
