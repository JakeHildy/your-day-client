import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import "./GalleryPage.scss";
import Post from "./../../components/Post/Post";
import { getPosts } from "./../../utils/postAPI";

function GalleryPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <main className="gallery-page">
      {posts.map((post) => (
        <Post key={v4()} post={post} />
      ))}
    </main>
  );
}

export default GalleryPage;
