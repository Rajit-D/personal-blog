import { useState, useEffect } from 'react';
import { app } from '../firebase-config'
import { getFirestore, collection, onSnapshot, orderBy} from 'firebase/firestore';
import { firestore } from 'firebase/app';

const useFirestore = (table) => {
  const [docs, setDocs] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const unsub1 = collection(db, table)
    // const unsub1 = db.collection(table).orderBy('createdAt', 'desc')
    // const unsub2 = unsub1.orderBy('Time', 'desc')
    // const unsub3= orderBy(unsub1, 'createdAt', 'desc')
    const unsub2 = onSnapshot(unsub1, snap => {
      let documents = [];
      snap.forEach(doc => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub2();
  }, [table]);
  return { docs };
}

export default useFirestore;