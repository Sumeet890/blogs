import {useEffect, useState} from 'react';
// import {firestore} from'../firebase';
import {Link} from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import {  doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";

function Home() {
  const [posts,setPosts]=useState([]);
  // useEffect(()=>{
  //   firestore.collection('posts').get().then((snapshot)=>{
  //     const posts=snapshot.docs.map((doc)=>{
  //       return{
  //         id: doc.id,
  //         ...doc.data(),
  //       };
  //     })
  //     console.log('posts',posts);
  //     setPosts(posts);
  //   })
  // },[]);
  useEffect(() => {
    const q = query(collection(db, "posts"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts = querySnapshot.docs.map((doc) => {
        console.log(doc.id, " => ", doc.data());

        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log("posts", posts);
      setPosts(posts);
    });
  }, []);

    return (
      <div className="home">
       <h1>Tech Blog</h1>
       <div id="blog-by">Sumeet</div>
       {posts.map((post,index)=>(
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
            </Link>
          <p>{post.subTitle}</p>
          </div>
       ))}
      </div>
    );
  }
  
  export default Home;