// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDB = getFirestore(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);
// const firebaseAnalytics = getAnalytics(firebaseApp);


const addDocument = async (collectionName: string, data: any) => {
  let result = null;
  let error = null;

  try {
    result = await addDoc(collection(firebaseDB, collectionName), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

const removeDocument = async (collectionName: string, documentId: string) => {
  let result = null;
  let error = null;

  try {
    const docRef = doc(firebaseDB, collectionName, documentId);
    result = await deleteDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

const updateDocument = async (
  collectionName: string,
  documentId: string,
  data: any,
) => {
  let result = null;
  let error = null;

  try {
    const docRef = doc(firebaseDB, collectionName, documentId);
    result = await updateDoc(docRef, { ...data });
  } catch (e) {
    error = e;
  }

  return { result, error };
};

/**
 *
 * @param file metadados do arquivo
 * @param fileName nome do arquivo: nome_do_arquivo.jpg
 * @param folder exemplo: user || user/avatar || user/background
 * @returns
 */
const saveFile = async (file: File, fileName: string, folder?: string) => {
  let fileUrl = null;
  const defaultFolder = 'images';
  const folderFile =
    folder && folder !== '' ? `${defaultFolder}/${folder}` : defaultFolder;
  const uploadRef = ref(firebaseStorage, `${folderFile}/${fileName}`);
  await uploadBytes(uploadRef, file).then((snapshot) => {
    getDownloadURL(snapshot.ref).then(async (downloadUrl) => {
      fileUrl = downloadUrl;
    });
  });

  return fileUrl;
};

export {
  firebaseApp,
  firebaseDB,
  firebaseAuth,
  firebaseStorage,
  addDocument,
  removeDocument,
  updateDocument,
  saveFile,
};
