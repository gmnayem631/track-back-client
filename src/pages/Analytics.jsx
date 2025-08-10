import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const lostFoundData = [
  { month: "Jan", Lost: 40, Found: 30 },
  { month: "Feb", Lost: 35, Found: 28 },
  { month: "Mar", Lost: 50, Found: 45 },
  { month: "Apr", Lost: 55, Found: 48 },
  { month: "May", Lost: 60, Found: 52 },
  { month: "Jun", Lost: 70, Found: 58 },
];

const itemTypeDistribution = [
  { name: "Wallet", value: 30 },
  { name: "Phone", value: 20 },
  { name: "Keys", value: 15 },
  { name: "Bag", value: 10 },
  { name: "Other", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];

const responseTimeData = [
  { day: "Mon", avgResponse: 12 },
  { day: "Tue", avgResponse: 15 },
  { day: "Wed", avgResponse: 10 },
  { day: "Thu", avgResponse: 8 },
  { day: "Fri", avgResponse: 7 },
  { day: "Sat", avgResponse: 5 },
  { day: "Sun", avgResponse: 6 },
];

const Analytics = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Analytics Dashboard
      </h1>

      {/* Lost vs Found per Month */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Lost vs Found Items (Monthly)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={lostFoundData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Lost" fill="#ff6b6b" />
            <Bar dataKey="Found" fill="#4caf50" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Item Type Distribution */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Item Type Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={itemTypeDistribution}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {itemTypeDistribution.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* Average Response Time per Day */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Average Response Time (Hours) per Day
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={responseTimeData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="avgResponse"
              stroke="#1e40af"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default Analytics;
