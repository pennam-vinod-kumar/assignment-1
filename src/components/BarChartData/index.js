import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './index.css'
const data = [
  { month: 'Jan', value: 50 },
  { month: 'Feb', value: 40 },
  { month: 'Mar', value: 100 },
  { month: 'Apr', value: 60 },
  { month: 'May', value: 70 },
  { month: 'Jun', value: 30 },
  { month: 'Jul', value: 70 },
  { month: 'Aug', value: 100, fill:'blue' },
  { month: 'Sep', value: 90 },
  { month: 'Oct', value: 70 },
  { month: 'Nov', value: 65 },
  { month: 'Dec', value: 70 },
];

const BarChartData = () => {
  return (
    <div className='chart-bg'>
      <div className='chart-top'>
        <div>
      <h1>Overview</h1>
      <p>Monthly Earnings</p>
      </div>
      <div>
        <select className='select-section'>
          <option value="Quarterly">Quarterly</option>
          <option value="Halfyearly">Halfyearly</option>
          <option value="Annually">Annually</option>
        </select>
      </div>
      </div>
    <ResponsiveContainer width="100%" height={200}>
  
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#e3eaed" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default BarChartData;