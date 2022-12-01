import React from 'react';
import "./chart.scss";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({title,grid,data,dataKey1,dataKey2}) => {

  return (
    <div className='chart'>
        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1 }>
        <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
          {grid && <CartesianGrid strokeDasharray="5 5"  stroke="#fefefe"/>}
          <XAxis dataKey="name" stroke='#320707' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey1} stroke="#800909" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={dataKey2} stroke="#338d30" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart