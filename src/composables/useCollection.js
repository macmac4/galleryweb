import { projectFirestore } from '../firebase/config'
import { useState } from 'react';

const useCollection = (collection) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const addDoc = async (doc) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectFirestore.collection(collection).add(doc);
      setIsPending(false);
      
      return res

    } catch (err) {
      setError(err.message);
      setIsPending(false);
  
      console.log(error.value);
    }
  };

  return { error, addDoc, isPending };
};

export default useCollection