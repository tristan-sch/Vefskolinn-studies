import { useState } from "react";

const MakeBlog = () => {
  const [text, setText] = useState("");
  const [oldTitle, setOldTitle] = useState("");
  const [title, setTitle] = useState("");
  const submitBlog = (e) => {
    const bodyData = {
      oldTitle,
      title,
      text,
    };
    fetch("http://localhost:5001/p/blog", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: { "content-type": "application/json" },
    })
      .then((r) => r.json())
      .then(console.log);
  };
  const updateBlog = (e) => {
    const bodyData = {
      oldTitle,
      title,
      text,
    };
    fetch("http://localhost:5001/p/blog", {
      method: "PUT",
      body: JSON.stringify(bodyData),
      headers: { "content-type": "application/json" },
    })
      .then((r) => r.json())
      .then(console.log);
  };
  const deleteBlog = (e) => {
    const bodyData = {
      title,
    };
    fetch("http://localhost:5001/p/blog", {
      method: "DELETE",
      body: JSON.stringify(bodyData),
      headers: { "content-type": "application/json" },
    })
      .then((r) => r.json())
      .then(console.log);
  };
  return (
    <div>
      Make a blog:
      <br />
      Old title:
      <input
        value={oldTitle}
        onChange={(e) => setOldTitle(e.target.value)}
        type="text"
      ></input>
      Title:
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      ></input>
      <br />
      Main text:{" "}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={submitBlog}>Submit your post</button>
      <button onClick={updateBlog}>Update this post</button>
      <button onClick={deleteBlog}>Delete this post</button>
    </div>
  );
};

export default MakeBlog;
