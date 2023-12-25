import { db } from "@/firebase";

class DatabaseService {
  collection;
  constructor(collectionName) {

    this.collection = db.collection(collectionName);
  }
  // returns list of records as an array of javascript objects
  getAll = async () => {
    const snapshot = await this.collection.get();
    return snapshot.docs.map((doc) => {
      return {
        id: doc.id, // append document id to each document
        ...doc.data(),
      };
    });
  };
  };
export const AccountsService = new DatabaseService("accounts")
