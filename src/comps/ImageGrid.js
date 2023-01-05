import React, { useState } from 'react'
import useFirestore from '../hooks/useFirestore'
import Modal from './Modal';
import UploadForm from './UploadForm';
import {motion} from "framer-motion";

const ImageGrid = () => {
    const { docs } = useFirestore('images');
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <>
            <UploadForm />
            <div className="img-grid">
                {docs && docs.map(doc => (
                    <motion.div className="img-wrap" key={doc.id}
                        layout
                        whileHover={{opacity:1}}
                        onClick={()=>{
                            setSelectedImg(doc.URL);
                        }}
                    >
                        <motion.img src={doc.URL} alt="" 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1}}
                        
                        />
                    </motion.div>
                ))}
            </div>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </>
    )
}

export default ImageGrid;