import React, { useState, useEffect } from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { app, db } from "../firebase-config"
import { getAuth } from 'firebase/auth'
import BlogList from './BlogList'

const Blogs = () => {
    const [modal, setModal] = useState(false);

    const popupFunc = (e) => {
        e.preventDefault();
        setModal(!modal);
    }

    const auth = getAuth(app);
    const db = getFirestore(app);
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const postsCollectionRef = collection(db, "posts");

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            // author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        });
        setModal(!modal);
    }

    return (
        <>
            <style jsx>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

                    .pop-up {
                        width: 100%;
                        height: 100%;
                        display: grid;
                        place-items: center;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        position: fixed;
                        background: rgba(0, 0, 0, 0.5);
                      }
                      
                      .cpContainer {
                        width: 500px;
                        height: auto;
                        padding: 20px;
                        background-color: black;
                        border-radius: 12px;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        font-family: 'Lato'
                      }

                      .cpContainer .heading{
                        display: flex;
                        justify-content: space-between
                      }

                      .cpContainer .heading i{
                        font-size: 34px;
                        padding: 23px;
                        cursor: pointer
                      }
                      
                      .cpContainer .heading i:hover{
                        color: #ff4a4a
                      }
                      
                      .cpContainer h1 {
                        text-align: center;
                      }
                      
                      .cpContainer label {
                        font-size: 25px;
                      }
                      
                      .cpContainer .inputGp {
                        margin-top: 30px;
                        display: flex;
                        flex-direction: column;
                      }
                      
                      .inputGp input,
                      .inputGp textarea {
                        font-size: 18px;
                        border: none;
                        border-radius: 2px;
                        padding: 5px;
                      }
                      
                      .inputGp input {
                        height: 40px;
                      }
                      
                      .inputGp textarea {
                        height: 150px;
                      }
                      
                      .cpContainer button {
                        margin-top: 20px;
                        height: 40px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 18px;
                      }
                      
                      input,
                      textarea {
                        margin-top: 5px;
                      }

                      @media(max-width: 572px){
                        .cpContainer{
                            width: 295px;
                            height: auto;
                        }

                        .cpContainer h1 {
                            text-align: center;
                            font-size: 32px
                          }
                      }
                `}
            </style>
            <form>
                <button onClick={popupFunc}>Create a blog</button>
            </form>
            <BlogList/>
            {modal && <div className="pop-up">
                <div className="cpContainer">
                    <div className="heading">
                        <h1>Create a post</h1>
                        <i className="fa-solid fa-xmark" onClick={popupFunc}></i>
                    </div>
                    <div className="inputGp">
                        <label>Title:</label>
                        <input type="text" placeholder='Title...' onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className="inputGp">
                        <label>Post:</label>
                        <textarea placeholder='Post...' onChange={(e) => { setPostText(e.target.value) }} />
                    </div>
                    <button onClick={createPost}>Submit post</button>
                </div>
            </div>}
        </>
    )
}

export default Blogs