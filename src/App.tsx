import { useEffect} from 'react';
import './App.css';
import CustomTable from './components/CustomTable';
import { useActivityData } from './context/activityData';
import CustomPieChart from './components/CustomPieChart';
import ShowChart from './components/ShowChart';
import CustomLineChart from './components/CustomLineChart';
import CustomBarChart from './components/CustomBarChart';
import ShowBarChart from './components/Show_bar';

// import { Chart as ChartJS } from 'chart.js/auto';
// import { Bar, Doughnut, Line } from 'react-chartjs-2';

function App() {
  const activityData = useActivityData();

  useEffect(() => {
    activityData?.fetchData();
  },[]);

  return (
    <div className='App'>
      <div className='main'>
        <div className='one'>
          <CustomTable />
           <ShowChart /> 
        </div>
        <ShowBarChart /> 
        <CustomPieChart />
      </div>
    </div>
  )
}

export default App
