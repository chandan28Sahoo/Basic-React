import DB from "./firebase";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import "./createBlog.css";
import { Navigate } from "react-router-dom";

const CreateBlog = () => {
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
  const blogCollection = collection(DB, "user_blog");
  // console.log("blogCollection", blogCollection);

  const submit = async (e) => {
    // console.log("eeeeeeee", e);
    e.preventDefault();
    await addDoc(blogCollection, { title: title, body: body });
    setNewTitle("");
    setNewBody("");
    setRedirect(true)
  };

  return (
    <div className="blog-container" >
      <form onSubmit={submit} className="create_blog">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={titleHandler}
          required
        />
        <textarea
          name="content"
          type="text"
          placeholder="write yoyr content here"
          rows="10"
          cols="20"
          value={body}
          onChange={bodyHandler}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
      {redirect && <Navigate to="/blog" replace={true}/>}
    </div>
  );
};

export default CreateBlog;

{
  /*  <div>
        <input placeholder="title" onChange={(event) => {
            setName(event.target.value)
        }}/>
        <input placeholder="body" onChange={(event) => {
            setAge(event.target.value)
        }}/>
        <button onClick={createUser}>add blog</button>
        </div>
        <div>
        {title.map((user, index) => {
        console.log(user);
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
          </div>
        );
      })}
        </div> */
}
