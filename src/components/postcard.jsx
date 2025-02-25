import React from "react";
import LikeButton from "./likebutton"; // Ensure correct import path

const PostCard = ({ post }) => {
    console.log(post); // Check if post data is received properly
  
    return (
      <div className="post-card">
        <img src={post.profileImage} alt={post.username} className="profile-pic" />
        <h3>{post.username || "No Username"}</h3>
        <p>{post.content || "No Content"}</p>
        <LikeButton />
      </div>
    );
  };
  

export default PostCard;
