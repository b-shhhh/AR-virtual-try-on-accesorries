import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth, firebaseEnabled } from "./app";

const DEMO_USER_KEY = "auraar_demo_user";

function readDemoUser() {
  const raw = localStorage.getItem(DEMO_USER_KEY);
  return raw ? JSON.parse(raw) : null;
}

function writeDemoUser(user) {
  if (user) {
    localStorage.setItem(DEMO_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(DEMO_USER_KEY);
  }
}

export function subscribeToAuth(callback) {
  if (firebaseEnabled && auth) {
    return onAuthStateChanged(auth, callback);
  }

  callback(readDemoUser());
  return () => {};
}

export async function loginUser(email, password) {
  if (firebaseEnabled && auth) {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  }

  // Demo fallback so the academic prototype can run before Firebase is configured.
  const demoUser = {
    uid: `demo-${Date.now()}`,
    email,
    displayName: email.split("@")[0],
    authMode: "demo"
  };

  writeDemoUser(demoUser);
  return demoUser;
}

export async function signupUser(email, password) {
  if (firebaseEnabled && auth) {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  }

  const demoUser = {
    uid: `demo-${Date.now()}`,
    email,
    displayName: email.split("@")[0],
    authMode: "demo"
  };

  writeDemoUser(demoUser);
  return demoUser;
}

export async function logoutUser() {
  if (firebaseEnabled && auth) {
    await signOut(auth);
    return;
  }

  writeDemoUser(null);
}
