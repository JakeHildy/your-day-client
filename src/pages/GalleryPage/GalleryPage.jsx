import React, { useState } from "react";
import { v4 } from "uuid";
import "./GalleryPage.scss";
import Post from "./../../components/Post/Post";

function GalleryPage() {
  const [posts, setPosts] = useState([
    {
      image: "https://your-day.s3.ca-central-1.amazonaws.com/IMG_2651.JPG",
      author: "Karli",
      timestamp: 1521957828000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec ligula erat. Quisque malesuada sapien ex. Quisque pellentesque maximus urna, sed faucibus nisi ornare consequat.",
    },
    {
      image: "https://your-day.s3.ca-central-1.amazonaws.com/IMG_2648.JPG",
      author: "Jake",
      timestamp: 1020957865000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec ligula erat. Quisque malesuada sapien ex. Quisque pellentesque maximus urna, sed faucibus nisi ornare consequat.",
    },
  ]);

  return (
    <main className="gallery-page">
      {posts.map((post) => (
        <Post key={v4()} post={post} />
      ))}
    </main>
  );
}

export default GalleryPage;
