
import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from 'firebase/app';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState(null);
  const db = getFirestore();

  React.useEffect(() => {
    const itemRef = db.collection('items').doc(id);

    // Substitua a chamada mock por uma consulta real ao Firestore
    const unsubscribe = itemRef.onSnapshot((doc) => {
      setItem({ id: doc.id, ...doc.data() });
    });

    return () => unsubscribe();
  }, [db, id]);

  return (
    <div>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Carregando detalhes do item...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
