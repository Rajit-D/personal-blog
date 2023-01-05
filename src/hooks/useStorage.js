// import { useState, useEffect } from 'react';
// import {app} from '../firebase-config'
// import {addDoc, collection, getFirestore} from 'firebase/firestore'
// import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'

// const useStorage = (file) => {
//   const [progress, setProgress] = useState(0);
//   const [url, setUrl] = useState(null);

//   const storage = getStorage(app);
//   const db = getFirestore(app);

//   const userCollectionRef = collection(db, 'images');

//   const clickHandler = async (e) => {
//     e.preventDefault();
//     console.log(file)
//     if (!file) {
//       console.log("No file found");
//       return;
//     }
//     const imageRef = ref(storage, `${file.name}`)
//     await uploadBytes(imageRef, file);
//     const url = await getDownloadURL(imageRef);
//     console.log(url);

//     await addDoc(userCollectionRef, { URL: url })
//   }
//   return { progress, url, clickHandler };
// }

// export default useStorage;

//   useEffect(() => {
//     references
//     const storageRef = projectStorage.ref(file.name);
//     const storageRef= projectStorage.ref(`images/${file.name + v4()}`)
//     const collectionRef = projectFirestore.collection('images');
    
//     storageRef.put(file).on('state_changed', (snap) => {
//       let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
//       setProgress(percentage);
//     }, (err) => {
//       setError(err);
//     }, async () => {
//       const url = await storageRef.getDownloadURL();
//       const createdAt = timestamp();
//       await collectionRef.set({URL: url});
//       await collectionRef.doc(firebase.firestore(url)).set({URL: url});
//       await collectionRef.doc(new firebase.firestore.FieldPath(url)).set({ url, createdAt });
//       await collectionRef.add({url, createdAt});

//       await addDoc(collectionRef, {URL: url})
//       setUrl(url);
//     });

   


//   }, [file]);