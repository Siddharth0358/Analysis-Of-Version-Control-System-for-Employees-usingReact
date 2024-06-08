import { useState } from "react";
import CustomBarChart from "./CustomBarChart";
import CustomLineChart from "./CustomLineChart";

const ShowBarChart : React.FC = () => {
    const [selectedChart, setSelectedChart] = useState<string | null>("bar");

    const handleChartChange = (chartName: string) => {
        setSelectedChart(chartName === selectedChart ? null : chartName);
    };

    return(
        <div className="show-bar-chart">
            <section className="show-chart-header">
                <h3>Bar Chart Report</h3>
            </section>
            <CustomBarChart/>
        </div>
    );
}

export default ShowBarChart;