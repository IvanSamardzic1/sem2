import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import './pomoc.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: true,
      text: 'Kružni grafikon za prikaz prosječnog broja ljudi u kafiću tijekom pojedinog mjeseca',
    },
  },
};

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.2)`;
  };
  
  const generateRandomBorderColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

const labels = ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'];

export const data = {
  labels: labels,
  datasets: [
    {
      label: '# of Votes',
      data: labels.map(() => Math.floor(Math.random() * 10000) + 1000),
      backgroundColor: Array.from({ length: labels.length }, () => generateRandomColor()),
      borderColor: Array.from({ length: labels.length }, () => generateRandomBorderColor()),
      borderWidth: 1,
    },
  ],
};


const GrafikonKruzni = () => (
    <div>
      <Link to="/">Vrati se na početnu stranicu</Link>
      <div class="container">
      <div class="chart-container-krug">
      <Pie options={options} data={data} />
      </div>
    </div>
    </div>
  );

 
  
  export default GrafikonKruzni;