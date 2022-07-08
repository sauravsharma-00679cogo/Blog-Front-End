import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
export default function AddBlog() {
  const [blog, setBlog] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    const getBlog = async (id) => {
      const response = await fetch(`http://127.0.0.1:3000/articles/${id}`);

      const result = await response.json();

      if (response.ok) {
          setUrl(result.url)
        setBlog(result);
        setName(result.author_name);
        setTitle(result.title);
        setDescription(result.description);
        setContent(result.content);
      } else {
        setErrorMessage(result.message);
      }
    };
    getBlog(id);
  }, []);

  let update = async (id) => {
    const res = await axios.put(`http://127.0.0.1:3000//articles/${id}`, {
      author_name: name,
      title: title,
      description: description,
      content: content,
      users_id: 1,
      url: url,
    });

    navigate("/blog");
    //redirect page using react
    console.log(res);
  };
  return (
    <>
      <div class="infoContainer ">
        <h1 className="BlogHeading">Update the Blog</h1>
        <div class="form">
          <input
            type="text"
            placeholder="Author Name"
            id="author_name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Title of Blog"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            placeholder="Description"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <textarea
            name="message"
            id="content"
            cols="30"
            rows="5"
            placeholder="Blog Content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>

          <input
            type="text"
            class="btn"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            placeholder="Upload Image"
          />
          <input type="submit" onClick={() => update(blog?.id)} />
        </div>
      </div>
    </>
  );
}
