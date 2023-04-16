import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import DB from "./firebase";
import { collection, getDocs, deleteDoc,doc } from "firebase/firestore";
import "./bloglist.css";
import { Link } from "react-router-dom";

function BlogList() {

  const [blogList, setNewBlogList] = useState([]);
  const blogCollection = collection(DB, "user_blog");

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(blogCollection);
      setNewBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);

  const removeHandler = async (id) => {
    console.log("id::id",id);
    const noteRef = doc(DB, "user_blog", id);
    await deleteDoc(noteRef);
    const data = await getDocs(blogCollection);
    setNewBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <div className="main-div">blog</div>
      <div className="main">
      <div className="bloglist">
        {blogList.map((item, index) => {
          console.log("blogListblogList", item);
          return (
            
            <div key={index} className={'blog-handler'}>
              <div className="text-handler">
              <h1>{item.title}</h1>
              <h1>{item.body}</h1>
              </div>
              <div className="edit-handler">
                <button className="edit-button-handler"> <Link to={"/blog/edit/" + item.id}>edit</Link></button>
              </div>
              <div className="btn-container">
                <button onClick={() => removeHandler(item.id)}>remove</button>
                <button><Link to={"/blog/" + item.id}>view</Link></button>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      
    </>
  );
}

export default BlogList;
