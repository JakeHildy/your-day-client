import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import "./GalleryPage.scss";
import Post from "./../../components/Post/Post";

// import useInterval from "./../../utils/useInterval";

function GalleryPage({ posts }) {
  return (
    <main className="gallery-page">
      {posts
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((post) => (
          <Post key={v4()} post={post} />
        ))}
    </main>
  );
}

export default GalleryPage;
