
import React from 'react'
import { Radar } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from 'chart.js'

// Register necessary Chart.js components
ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
)

const RadarChart = () => {
	// Data for the chart
	const data = {
		labels: [
			'Coding',
			'Chess',
			'Trading',
			'Reading',
			'Luffy',
			'Socializing',
			'Youtube',
		],
		datasets: [
			{
				data: [9.5, 7, 9, 8, 10, 6, 7],
				backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light white background color with opacity
				borderColor: '#d3d3d3', // White border color
        // borderColor: '#8fb4fc',
				// borderWidth: 2,
				pointBackgroundColor: 'rgba(255, 255, 255, 1)',
				pointBorderColor: '#d3d3d3',
			},
		],
	}

	// Options for the chart, including animation settings
	const options = {
		responsive: true,
		scales: {
			r: {
				angleLines: {
        
					color: 'rgba(255, 255, 255, 0.5)',
				},
				grid: {
          display: false,
					color: 'rgba(255, 255, 255, 0.2)',
				},
				ticks: {
          display: false,
					beginAtZero: true,
					color: '#ffffff',
					backdropColor: 'rgba(0, 0, 0, 0)',
				},
				pointLabels: {
					color: '',
				},
			},
		},
		plugins: {
			legend: {
        display: false,
				position: 'top',
				labels: {
					color: '#ffffff',
				},
			},
			tooltip: {
				backgroundColor: 'rgba(255, 255, 255, 0.9)',
				titleColor: '#000',
				bodyColor: '#000',
			},
		}
	}

	return (
    <>
    <div className="hobbies">
    <Radar data={data} options={options} />
    </div>
    </>
  )
}

export default RadarChart
