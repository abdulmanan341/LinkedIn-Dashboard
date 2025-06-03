import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { FaUserPlus, FaEnvelope } from "react-icons/fa";
import MetricCard from "./MetricCard";
import { networkData } from "../data";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const NetworkGrowth = () => {
  return (
    <div className="network-growth">
      <h2>Network Growth</h2>
      <div className="network-metrics">
        <MetricCard
          title="New Connections"
          value={networkData.newConnections}
          icon={<FaUserPlus />}
        />
        <MetricCard
          title="Connection Requests"
          value={networkData.connectionRequests}
          icon={<FaEnvelope />}
        />
      </div>

      <div className="network-charts">
        <div className="chart-container">
          <h3>Industries</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={networkData.demographics.industries}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {networkData.demographics.industries.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Locations</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={networkData.demographics.locations}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NetworkGrowth;
