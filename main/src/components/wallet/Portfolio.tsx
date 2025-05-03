// src/components/Portfolio.tsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface PortfolioProps {
  ethBalance: string;
  usdcBalance: string;
  ethValue: number;
  usdcValue: number;
}

const Portfolio: React.FC<PortfolioProps> = ({
  ethBalance,
  usdcBalance,
  ethValue,
  usdcValue,
}) => {
  const data = [
    {
      token: "ETH",
      balance: parseFloat(ethBalance).toFixed(4),
      usdValue: ethValue.toFixed(2),
    },
    {
      token: "USDC",
      balance: parseFloat(usdcBalance).toFixed(2),
      usdValue: usdcValue.toFixed(2),
    },
  ];

  const chartData = [
    { name: "ETH", value: ethValue },
    { name: "USDC", value: usdcValue },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="p-4">
      {/* Table */}
      <div className="bg-gray-800 rounded-lg shadow-lg mb-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3">Token</th>
              <th className="p-3">Balance</th>
              <th className="p-3">USD Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.token} className="border-t border-gray-700">
                <td className="p-3">{row.token}</td>
                <td className="p-3">{row.balance}</td>
                <td className="p-3">${row.usdValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pie Chart */}
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Portfolio;
