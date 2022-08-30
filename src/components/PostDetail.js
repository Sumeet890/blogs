import { useEffect,useState } from "react";
import {useParams} from 'react-router-dom';
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { db } from "../firebase";

function PostDetail() {
  const [post,setPost]= useState({});
  const {postId}=useParams();
  console.log("post id printing here",postId);
  useEffect(() => {
    getDoc(doc(db, "posts", postId)).then((docSnap) => {
      if (docSnap.exists()) {
        setPost(docSnap.data());
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);
    return (
      <div className="post-detail">
       <h1>{post.title}</h1>
       <p>{post.content}</p>
      </div>
    );
  }
  
  export default PostDetail;