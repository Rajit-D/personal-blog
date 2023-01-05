import React, { useState, useEffect } from 'react'
import { getDocs, collection, deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { app } from "../firebase-config"

const BlogList = () => {
    const db = getFirestore(app);

    const postsCollectionRef = collection(db, "posts");
    const [postLists, setPostLists] = useState([]);

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id)
        await deleteDoc(postDoc)
    }

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts();
    }, [deletePost])
    return (
        <>
            <style jsx>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap');

                    .blog-grid{
                        margin: 20px auto;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-gap: 40px;
                    }
                    .post {
                        height: 0;
                        margin: 15% 0% 109% 0px;
                        /* padding controls height, will always be perfectly square regardless of width */
                        position: relative;
                        min-width: 100%;
                        min-height: 100%;
                        max-width: 150%;
                        top: 0;
                        left: 0;
                      }

                      .post .postHeader .blog-title{
                        font-family: 'Lato';
                        color: #ff4a4a;
                        font-size: 14px;
                      }

                      .post .postTextContainer {
                        word-wrap: break-word;
                        text-align: center
                        height: auto;
                        max-height: 220px;
                        width: 100%;
                        overflow-y: auto;
                        font-size: 14px;
                        text-align: center;                   
                        margin-top: 10px;
                        font-family: 'Inconsolata';
                      }

                      .post .deletePost{
                        display: flex;
                        justify-content: center;
                      }

                      @media (max-width: 598px){
                        .blog-grid{
                            grid-template-columns: 1fr 1fr ;
                        }
                      }

                      @media (max-width: 490px){
                        .blog-grid{
                            margin: 20px auto;
                            display: grid;
                            grid-template-columns: 1fr ;
                            grid-gap: 40px;
                        }

                        .post{
                            padding: 22% 0% 64% 0px;
                            margin: 0;
                        }
                      }
                      
                `}
            </style>
            <div className='blog-grid'>{postLists.map((post) => {
                return (
                    <>
                        <div className='post'>
                            <div className="postHeader">
                                <div className="blog-title" style={{ textAlign: 'center' }}>
                                    <h1>{post.title}</h1>
                                </div>
                            </div>
                            <div className="deletePost">
                                <button onClick={() => { deletePost(post.id) }} style={{ border: 'none' }}><i className="fa-solid fa-trash"></i></button>
                            </div>
                            <div className="postTextContainer">
                                {post.postText}
                            </div>
                        </div>
                    </>
                )
            })}
            </div>
        </>
    )
}

export default BlogList