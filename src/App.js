import React, { useState, useRef } from "react";
import "./style/App.css";
import Postitem from "./components/Postitem";
import PostList from "./components/PostList";
import Mybutton from "./components/UI/button/Mybutton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  };

  return (
    <div className="App">
      <form>
        {/* Управляемый */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title post"
        />

        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Text post"
        />

        {/* Не управляемый
        <MyInput ref={bodyInputRef} type="text" placeholder="Text post" /> */}

        <Mybutton onClick={addNewPost}>Create Post</Mybutton>
      </form>

      <PostList posts={posts} title={"List Post 1"} />
    </div>
  );
}

export default App;
