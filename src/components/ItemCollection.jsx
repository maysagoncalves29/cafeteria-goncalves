
import { useEffect, useState } from 'react';
import { getFirestore } from 'firebase/app';

const ItemCollection = () => {
  const [items, setItems] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const collection = db.collection('items');

    // Substitua a chamada mock por uma consulta real ao Firestore
    const unsubscribe = collection.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    });

    return () => unsubscribe();
  }, [db]);

  return items;
};

export default ItemCollection;
