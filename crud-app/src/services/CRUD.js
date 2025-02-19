import { db } from "./firebase";
import {
  setDoc,
  doc,
  collection,
  updateDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export const createContact = async (firstName, lastName, number) => {
  const newContactRef = doc(collection(db, "contacts"));

  await setDoc(newContactRef, {
    id: newContactRef.id,
    firstName,
    lastName,
    number,
  });
};

export const readContacts = async () => {
  const allContacts = [];

  const querySnapshop = await getDocs(collection(db, "contacts"));
  querySnapshop.forEach((doc) => {
    allContacts.push(doc.data());
  });

  return allContacts;
};

export const updateContact = async (id, firstName, lastName, number) => {
  const contactRef = doc(db, "contacts", id);

  await updateDoc(contactRef, {
    firstName,
    lastName,
    number,
  });
};

export const deleteContact = async (id) => {
  await deleteDoc(doc(db, "contacts", id));
};
