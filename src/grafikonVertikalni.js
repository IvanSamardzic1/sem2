import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import './pomoc.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Vertikalni grafikon za prikaz prosječnih odlazaka u kafić u pojedinom mjesecu na primjeru muškaraca i žena',
    },
  },
};

const labels = ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Žene',
      data: labels.map(() => Math.floor(Math.random() * 25)+ 1),
      backgroundColor: 'rgba(255, 0, 0, 0.3)' ,
    },
    {
      label: 'Muškarci',
      data: labels.map(() => Math.floor(Math.random() * 25)+ 1),
      backgroundColor: 'rgba(0, 0, 255, 0.3)',
    },
  ],
};

const GrafikonVertikalni = () => (
  <div>
    <Link to="/">Vrati se na početnu stranicu</Link>
    <div class="container">
      <div class="chart-container">
      <Bar options={options} data={data} />
      </div>
    </div>
</div>
);

export default GrafikonVertikalni;
