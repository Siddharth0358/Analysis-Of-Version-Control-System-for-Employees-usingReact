import { useState } from "react";
import CustomBarChart from "./CustomBarChart";
import CustomLineChart from "./CustomLineChart";

const ShowChart : React.FC = () => {
    const [selectedChart, setSelectedChart] = useState<string | null>("bar");

    const handleChartChange = (chartName: string) => {
        setSelectedChart(chartName === selectedChart ? null : chartName);
    };

    return(
        <div className="show-chart-container">
            <section className="show-chart-header">
                <h3>Line Chart Report</h3>
            </section>
            <CustomLineChart/>
        </div>
    );
}

export default ShowChart;