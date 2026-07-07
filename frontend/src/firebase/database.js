import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where
} from "firebase/firestore";
import { db, firebaseEnabled } from "./app";

function firebaseReady() {
  return firebaseEnabled && db;
}

function calculateSusScore(answers) {
  if (!Array.isArray(answers) || answers.length !== 10) {
    return null;
  }

  const total = answers.reduce((sum, answer, index) => {
    const value = Number(answer);

    if (!Number.isFinite(value) || value < 1 || value > 5) {
      return NaN;
    }

    return sum + (index % 2 === 0 ? value - 1 : 5 - value);
  }, 0);

  return Number.isNaN(total) ? null : total * 2.5;
}

export async function getUserStats(userId) {
  if (!firebaseReady() || !userId) {
    return {
      tryOns: 0,
      wishlisted: 0,
      purchased: 0
    };
  }

  const wishlistSnapshot = await getDoc(doc(db, "wishlists", userId));
  const wishlist = wishlistSnapshot.exists() ? wishlistSnapshot.data().productIds ?? [] : [];
  const tryOnsSnapshot = await getDocs(
    query(collection(db, "tryOns"), where("userId", "==", userId))
  );

  return {
    tryOns: tryOnsSnapshot.size,
    wishlisted: wishlist.length,
    purchased: 0
  };
}

export async function addToWishlist(userId, productId) {
  if (!firebaseReady() || !userId || !productId) {
    return;
  }

  await setDoc(
    doc(db, "wishlists", userId),
    {
      userId,
      productIds: arrayUnion(productId),
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );
}

export async function removeFromWishlist(userId, productId) {
  if (!firebaseReady() || !userId || !productId) {
    return;
  }

  await updateDoc(doc(db, "wishlists", userId), {
    productIds: arrayRemove(productId),
    updatedAt: serverTimestamp()
  });
}

export async function saveTryOnEvent({ userId, productId, accessoryId, faceRatio, fps }) {
  if (!firebaseReady()) {
    return null;
  }

  const record = {
    userId: userId ?? "anonymous",
    productId: productId ?? accessoryId ?? null,
    accessoryId: accessoryId ?? null,
    faceRatio: faceRatio ?? null,
    fps: fps ?? null,
    createdAt: serverTimestamp()
  };

  const result = await addDoc(collection(db, "tryOns"), record);
  return {
    id: result.id,
    ...record
  };
}

export async function saveSusResponse({ userId, answers, comments = "" }) {
  if (!firebaseReady()) {
    return null;
  }

  const score = calculateSusScore(answers);

  if (score === null) {
    throw new Error("SUS answers must contain 10 values from 1 to 5.");
  }

  const record = {
    userId: userId ?? "anonymous",
    answers: answers.map(Number),
    score,
    comments,
    createdAt: serverTimestamp()
  };

  const result = await addDoc(collection(db, "susResponses"), record);
  return {
    id: result.id,
    ...record
  };
}
