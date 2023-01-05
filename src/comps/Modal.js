import React from 'react'
import {motion} from 'framer-motion'

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    return (
        <div className="modal-flex">
            <motion.div className='backdrop' 
                onClick={handleClick}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                >
                <motion.img src={selectedImg} alt="enlarged pic" 
                    initial={{y:"-100vh"}}
                    animate={{y: "0vh"}}
                />
            </motion.div>
        </div>
    )
}

export default Modal