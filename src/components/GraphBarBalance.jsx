/**Creamos el componente de gráficas */
import { dataBalance } from "../data/data"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import { useRef } from "react";
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        display: false,
      },
      title: {
        display: false,
      },
    },
  };  

const dataGraph = dataBalance.map ( item => {
  item.amount = Math.random() * 200
  return item;
})

export const GraphBarBalance = () => {

    const labels = dataGraph.map ( (d) => { return d.day   } )
    const values = dataGraph.map ( (d) => { return d.amount} )
    const barRef = useRef ()

    const data = {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: 'hsl(10, 79%, 65%)',
          },
        ],
      };

      const barGraphClick = ( event )  => {
        const { current } = barRef
        console.log ( current )
      }

    return (
        <div className = 'graph-bar-balance'>
            <Bar 
              options={options} 
              data={data} 
              ref={barRef}
              onClick={barGraphClick}
            />
        </div>
    )
}
