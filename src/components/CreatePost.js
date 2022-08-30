import React,{useState} from 'react';
// import {firestore} from '../firebase';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
// import {useFormInput} from '../hooks';
function CreatePost() {
  const [title,setTitle]=useState('');
  const [subTitle,setSubTitle]=useState('');
  const [content,setContent]=useState('');

  function handleSubmit(e){
    e.preventDefault();
    console.log('title',title);
    console.log('subTitle',subTitle);
    console.log('setContent',content);
    try {
      addDoc(collection(db, "posts"), {
        title: title,
        content: content,
        subTitle: subTitle,
        createdAt: new Date(),
      });
    } catch (e) {
      console.log(e);
    }


  }
    return (
      <div className="create-post">
      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={title} onChange={(e)=>setTitle(e.target.value)}/> 
          {/* <input {...title}/> */}
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/>
          {/* <input {...subTitle}/> */}
        </div>
        <div className="form-field">
          <label>Content</label>
           <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
          {/* <textarea {...content}/> */}
        </div>
        <button className="create-post-btn">Create Post</button>
      </form>
      </div>
    );
  }
  
  export default CreatePost;