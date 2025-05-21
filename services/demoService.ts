import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export const fetchDemosFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(firestore, "demos"));
  const items = querySnapshot.docs.map(doc => doc.data());
  return items;
};

export const listDemoRef = () => {
  return query(collection(firestore, "demos"));
};