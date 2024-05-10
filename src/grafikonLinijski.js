import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import './pomoc.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'];

export const options = {
  responsive: true,
  plugins: {
    legend: { position: 'right'},
    title: { 
        display: true, 
        text: 'Linijski grafikon za prikaz prosječnih odlazaka u kafić u pojedinom mjesecu na primjeru muškaraca i žena' },
  },
};

export const data = {
  labels,
  datasets: [
    { label: 'Žene', 
      data: labels.map(() => Math.floor(Math.random() * 25)+ 1), 
      borderColor: 'rgb(255, 0, 0)', 
      backgroundColor: 'rgba(255, 0, 0, 0.3)' },
    { label: 'Muškarci',
      data: labels.map(() => Math.floor(Math.random() * (25))+ 1), 
      borderColor: 'rgb(0, 0, 255)', 
      backgroundColor: 'rgba(0, 0, 255, 0.3)' },
  ],
};

const GrafikonLinijski = () => (
    <div>
      <Link to="/">Vrati se na početnu stranicu</Link>
      <div class="container">
        <div class="chart-container">
        <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );

export default GrafikonLinijski;