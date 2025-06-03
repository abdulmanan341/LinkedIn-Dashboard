import React from "react";
import Header from "./components/Header";
import ProfileSummary from "./components/ProfileSummary";
import NetworkGrowth from "./components/NetworkGrowth";
import ContentPerformance from "./components/ContentPerformance";
import TopPosts from "./components/TopPosts";
import RecentActivity from "./components/RecentActivity";
import "./App.css";

function App() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <div className="left-column">
          <ProfileSummary />
          <NetworkGrowth />
          <ContentPerformance />
        </div>
        <div className="right-column">
          <TopPosts />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

export default App;
