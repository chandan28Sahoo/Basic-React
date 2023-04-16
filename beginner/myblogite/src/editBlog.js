import React, { useState, useEffect } from "react";
import { useParams,Navigate } from "react-router-dom";
import {  doc, getDoc, updateDoc } from "firebase/firestore";
import DB from "./firebase";
import "./createBlog";

const EditBlog = () => {
  //   const blogCollection = collection(DB, "user_blog");
  const [title, setNewTitle] = useState("");
  const [body, setNewBody] = useState("");
  const [redirect, setRedirect] = useState(false);
  // const [age,setAge] = useState(0);
  const titleHandler = (e) => {
    setNewTitle(e.target.value);
  };
  const bodyHandler = (e) => {
    setNewBody(e.target.value);
  };
  const { id } = useParams();

  const [blog, setblog] = useState([]);
  useEffect(() => {
    const getBlog = async (id) => {
      const noteSnapshot = await getDoc(doc(DB, "user_blog", id));
      // console.log("noteSnapshot.data()", noteSnapshot.data());
      setblog(noteSnapshot.data());
    };
    getBlog(id);
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    const noteRef = doc(DB, "user_blog", id);
    await updateDoc(noteRef, {
      title: title,
      body: body,
    });
    setNewTitle("");
    setNewBody("");
    setRedirect(true)
  };

  return (
    <>
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
        </div>
      </div>
      <div className="create_blog">
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={titleHandler}
            //   required
          />
          <textarea
            name="content"
            type="text"
            placeholder="write yoyr content here"
            rows="10"
            cols="150"
            value={body}
            onChange={bodyHandler}
            //   required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      {redirect && <Navigate to="/blog" replace={true}/>}
    </>
  );
};

export default EditBlog;
