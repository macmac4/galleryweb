import { projectStorage } from '../firebase/config'
import { useState } from 'react';

const useStorage = () => {

  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  const uploadImage = async (file) => {
    let filePath = `images/${file.name}`;
    const storageRef = projectStorage.ref(filePath);

    try {
      const res = await storageRef.put(file)
      setUrl(await res.ref.getDownloadURL());

    } catch(err) {
      setError(err.message);
      console.log(err);
    }
  }

  const deleteImage = async (path) => {
    const storageRef = projectStorage.ref(path);

    try {
      await storageRef.delete()
    } catch (err) {
      console.log(err.message)
      setError(err);
    }
  }

  return { uploadImage, url, error, deleteImage }
}

export default useStorage