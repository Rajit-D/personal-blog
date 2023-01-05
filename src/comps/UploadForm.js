import React, { useState, useEffect } from 'react';
import { app, timestamp } from '../firebase-config'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
// import useStorage from '../hooks/useFirestore'
// import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };


  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const storage = getStorage(app);
  const db = getFirestore(app);
  const userCollectionRef = collection(db, 'images');


  const clickHandler = async (e) => {
    e.preventDefault();
    console.log(file);
    if (!file) {
      console.log("No file found");
      return;
    }

    const imageRef = ref(storage, `${file.name}`)

    // imageRef.put(file).on('state_changed', (snap) => {
    //   let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    //   setProgress(percentage);
    // })

    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);
    const createdAt = timestamp();
    await addDoc(userCollectionRef, { URL: url, createdAt })

    // uploadtask.on('state_changed', (snapshot) => {
    //   let perc = (snapshot.bytesTransferred / snapshot.uploadBytes) * 100;
    //   setProgress(perc);
    // })
  }

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <>
      <form>
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
        <button onClick={clickHandler}>Upload file now</button>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div></div>}
          {/* {file && <div className='progress-bar' style={{ width: progress + '%' }}></div>} */}

        </div>
      </form>
    </>
  );
}

export default UploadForm;