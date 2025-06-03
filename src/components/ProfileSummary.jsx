import React from "react";
import { FaEye, FaSearch, FaUserFriends, FaUsers } from "react-icons/fa";
import MetricCard from "./MetricCard";
import { profileData } from "../data";

const ProfileSummary = () => {
  return (
    <div className="profile-summary">
      <div className="profile-header">
        <h2>{profileData.name}</h2>
        <p>{profileData.headline}</p>
      </div>
      <div className="metrics-grid">
        <MetricCard
          title="Profile Views (Week)"
          value={profileData.profileViews.week}
          change={profileData.profileViews.change}
          icon={<FaEye />}
        />
        <MetricCard
          title="Search Appearances"
          value={profileData.searchAppearances.week}
          change={profileData.searchAppearances.change}
          icon={<FaSearch />}
        />
        <MetricCard
          title="Connections"
          value={profileData.connections}
          icon={<FaUserFriends />}
        />
        <MetricCard
          title="Followers"
          value={profileData.followers}
          icon={<FaUsers />}
        />
      </div>
    </div>
  );
};

export default ProfileSummary;
