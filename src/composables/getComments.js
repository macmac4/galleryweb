import { projectFirestore } from '../firebase/config'
import { useState, useEffect } from 'react';

const GetComments = async (collection, id) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (id) {
      projectFirestore
        .collection('albums')
        .doc(id)
        .collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
          setComments(
            snap.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
    }

  }, [id]);

  return { comments }
}

export default GetComments;