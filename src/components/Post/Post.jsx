import React from "react";
import "./Post.scss";

function Post({ post }) {
  return (
    <article className="post">
      <figure className="post__figure">
        <img src={post.image} alt="" className="post__img" />
      </figure>
      <div className="post__top-info">
        <h3 className="post__author">{post.author}</h3>
        <h4 className="post__time">{post.timestamp}</h4>
      </div>

      <p className="post__description">{post.description}</p>
    </article>
  );
}

export default Post;
