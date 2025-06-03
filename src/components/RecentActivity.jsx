import React from "react";
import {
  FaRegNewspaper,
  FaUserPlus,
  FaRegThumbsUp,
  FaRegCommentDots,
} from "react-icons/fa";
import { activityData } from "../data";

const getActivityIcon = (type) => {
  switch (type) {
    case "post":
      return <FaRegNewspaper className="activity-icon post" />;
    case "connection":
      return <FaUserPlus className="activity-icon connection" />;
    case "like":
      return <FaRegThumbsUp className="activity-icon like" />;
    case "comment":
      return <FaRegCommentDots className="activity-icon comment" />;
    default:
      return <FaRegNewspaper className="activity-icon" />;
  }
};

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>
      <div className="activity-list">
        {activityData.map((activity) => (
          <div key={activity.id} className="activity-item">
            {getActivityIcon(activity.type)}
            <div className="activity-content">
              <p>{activity.title}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
