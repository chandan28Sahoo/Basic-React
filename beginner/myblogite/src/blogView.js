import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import DB from "./firebase";
import { Link, Navigate } from "react-router-dom";

const BlogView = () => {
  const { id } = useParams();

  const [blog, setblog] = useState([]);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const getBlog = async (id) => {
      console.log("idddd", id);
      const noteSnapshot = await getDoc(doc(DB, "user_blog", id));
      console.log("noteSnapshot.data()", noteSnapshot.data());
      setblog(noteSnapshot.data());
    };
    getBlog(id);
  }, []);

  const removeHandler = async (id) => {
    console.log("id::id", id);
    const noteRef = doc(DB, "user_blog", id);
    await deleteDoc(noteRef);
    setRedirect(true)
    
  };

  return (<>
    
    <div>
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-2xl">
          <span>
            <b>Title :</b>
          </span>
          <span>{blog.title}</span>
          <p>
            <b>Body : {blog.body}</b>
          </p>
        </h1>
        <Link to={"/blog/edit/" + id}>edit</Link>
      </div>
      <div>
        <button onClick={() => removeHandler(id)}>remove</button>
      </div>
    </div>
    {redirect && <Navigate to="/blog" replace={true}/>}
  </>
  );
};

export default BlogView;
