import React from "react";
import { FaThumbsUp, FaComment, FaShare, FaRegEye } from "react-icons/fa";
import { contentData } from "../data";

const TopPosts = () => {
  return (
    <div className="top-posts">
      <h2>Top Performing Posts</h2>
      <div className="posts-list">
        {contentData.topPosts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p className="post-date">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <div className="post-metrics">
              <div className="metric">
                <FaThumbsUp /> <span>{post.likes}</span>
              </div>
              <div className="metric">
                <FaComment /> <span>{post.comments}</span>
              </div>
              <div className="metric">
                <FaShare /> <span>{post.shares}</span>
              </div>
              <div className="metric">
                <FaRegEye /> <span>{post.impressions.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPosts;
