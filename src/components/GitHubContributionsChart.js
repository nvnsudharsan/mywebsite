import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

function GitHubContributionsChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const query = `
        {
          user(login: "nvnsudharsan") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await axios.post(
          'https://api.github.com/graphql',
          { query },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const days = response.data.data.user.contributionsCollection.contributionCalendar.weeks
          .flatMap((week) => week.contributionDays);

        const monthlyTotals = days.reduce((acc, day) => {
          const month = new Date(day.date).toLocaleString('default', { month: 'short' });
          acc[month] = (acc[month] || 0) + day.contributionCount;
          return acc;
        }, {});

        const chartData = Object.entries(monthlyTotals).map(([month, contributions]) => ({
          month,
          contributions,
        }));

        setData(chartData);
      } catch (error) {
        console.error('Failed to fetch GitHub contributions:', error);
      }
    };

    fetchContributions();
  }, []);

  return (
    <div style={{ width: '100%', height: 300, backgroundColor: 'transparent' }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          style={{ backgroundColor: '#1a1a2e', borderRadius: '8px', padding: '1rem' }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2c2c3d" />
          <XAxis dataKey="month" stroke="#dce8f2" />
          <YAxis stroke="#dce8f2" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1a1a2e', border: 'none', color: '#dce8f2' }}
            labelStyle={{ color: '#5bc0ff' }}
            itemStyle={{ color: '#dce8f2' }}
          />
          <Bar dataKey="contributions" fill="#5bc0ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GitHubContributionsChart;
