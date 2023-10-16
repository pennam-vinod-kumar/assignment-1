import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import './index.css'
const data = [
  { name: 'Old Customers', value: 50 },
  { name: 'New Customers', value: 30 }, 
  { name: 'Other', value: 20 }, 
];

const COLORS = ['#FF5733', '#3366FF', '#888888']; 

const PieChartData = () => {
  return (
    <div className='pie-bg'>
      <h1>Customers</h1>
      <p>Customers that buy products</p>
      <div className='pie-center'>
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        innerRadius={40} 
        fill="#8884d8"
        label={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Legend content={()=> null}/>
  
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className='under-pie'>
        65%
  
      </text>
    </PieChart>
    </div>
    </div>
  );
};

export default PieChartData;