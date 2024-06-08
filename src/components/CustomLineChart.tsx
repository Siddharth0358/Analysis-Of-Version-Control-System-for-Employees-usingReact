import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useActivityData } from "../context/activityData";

const CustomLineChart : React.FC = () =>{

    const activityData = useActivityData();

    return(
      <div className='line-chart-container'>
      <ResponsiveContainer height={400}>
        <LineChart
          data={activityData?.chartData}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" fontSize={15}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="PR_Open" stroke="#EF6B6B" />
          <Line type="monotone" dataKey="PR_Merged" stroke="#61CDBB" />
          <Line type="monotone" dataKey="Commits" stroke="#FAC76E" />
          <Line type="monotone" dataKey="PR_Reviewed" stroke="#C2528B" />
          <Line type="monotone" dataKey="PR_Comments" stroke="#0396A6" />
          <Line type="monotone" dataKey="Incident_Alerts" stroke="#5F50A9" />
          <Line type="monotone" dataKey="Incidents_Resolved" stroke="#8F3519" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    );
}

export default CustomLineChart;