import { projectFirestore } from '../firebase/config'
import { useState } from 'react';

const useComments = (collection, id) => {
  const [error, setError] = useState(null);

  const addComment = async (comment) => {
    setError(null);

    try {
      const res = await projectFirestore.collection("albums").doc(id).collection(collection)
      .add(comment);
      
      return res

    } catch (err) {
      setError(err.message);
      console.log(error.value);
    }
  };

  return { error, addComment };
};

export default useComments;