import React from "react";
import {
  FaChartLine,
  FaRegThumbsUp,
  FaRegComment,
  FaShare,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import MetricCard from "./MetricCard";
import { contentData } from "../data";

const performanceData = [
  { name: "Jan", impressions: 4000, engagement: 3.2 },
  { name: "Feb", impressions: 3000, engagement: 2.8 },
  { name: "Mar", impressions: 5000, engagement: 4.1 },
  { name: "Apr", impressions: 8000, engagement: 4.5 },
  { name: "May", impressions: 12500, engagement: 4.8 },
];

const ContentPerformance = () => {
  return (
    <div className="content-performance">
      <h2>Content Performance</h2>
      <div className="content-metrics">
        <MetricCard
          title="Impressions"
          value={contentData.impressions.toLocaleString()}
          icon={<FaChartLine />}
        />
        <MetricCard
          title="Engagement Rate"
          value={`${contentData.engagementRate}%`}
          icon={<FaRegThumbsUp />}
        />
      </div>

      <div className="performance-chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="impressions"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="engagement"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContentPerformance;
