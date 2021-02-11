import { projectFirestore } from '../firebase/config'
import { useState, useEffect } from 'react';

const GetCollection = (collection, query) => {
  const [documents, setDocuments] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  let collectionRef = projectFirestore.collection(collection);

  if(query) {
    collectionRef = collectionRef.where(...query);
  } else {
    collectionRef = collectionRef.orderBy('createdAt', 'desc');
  }


  useEffect(() => {
    collectionRef.onSnapshot(snap => {
      setDocuments(snap.docs.map( doc => ({
        id: doc.id,
        ...doc.data()
      })))
      setIsPending(false);
      setError(null);
    },
    error => {
      console.log(error);
      setDocuments(null);
      setError('error fetching data');
    });
  },[collection]);

  return { documents }
}

export default GetCollection;