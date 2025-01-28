'use client'

import React, { useState } from 'react'
import { sales } from '@/data/sales'

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);


const Report = ({ part_number }) => {
    const [filteredSales, setFilteredSales] = useState<any[]>([])

    const handleGenerateReport = () => {
         const productSales = sales.filter((sale) => sale.part_number === part_number);

         const salesByDate = productSales.reduce((acc, sale) => {
             acc[sale.date] = (acc[sale.date] || 0) + 1; 
             return acc;
         }, {});
 
         const sortedSales = Object.entries(salesByDate).sort(
             ([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime()
         );
 
         setFilteredSales(sortedSales); 
    }

    const chartData = {
        labels: filteredSales.map(([date]) => date), 
        datasets: [
            {
                label: `Total Sales for ${part_number}`,
                data: filteredSales.map(([, count]) => count), 
                backgroundColor: 'rgba(0, 123, 255, 0.6)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <button onClick={handleGenerateReport}>Generate</button>

            {filteredSales.length > 0 && (
                <div style={{ width: '600px', margin: '0 auto' }}>
                    <Bar data={chartData} />
                </div>
            )}
        </div>
    )
}

export default Report