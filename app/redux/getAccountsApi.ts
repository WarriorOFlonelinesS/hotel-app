import {db} from'../../firebase'

export const getAccountsApi = async () => {
    const response = await new Promise((resolve, reject) => {
       const unsubscribe = db.collection('Accounts').onSnapshot(snapshot => {
         const accounts = snapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() }));
         unsubscribe(); // Отменяем подписку, так как больше не нужно получать обновления
         resolve(accounts);
       }, reject);
    });
   
    return response;
   }