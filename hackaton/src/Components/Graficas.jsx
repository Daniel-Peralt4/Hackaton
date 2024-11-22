import { Bar, Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import "../Styles/Graficas.css"
import {useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Graficas = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % 3); // Cambia entre 3 gráficas
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + 3) % 3); // Rotación circular inversa
    };
  
    // Datos para las gráficas (predeterminados)
    const projectStatusData = {
      labels: ['En Progreso', 'Completados', 'Retrasados'],
      datasets: [
        {
          label: 'Proyectos',
          data: [12, 8, 3],
          backgroundColor: ['#4CAF50', '#2196F3', '#F44336'],
          borderColor: ['#388E3C', '#1976D2', '#D32F2F'],
          borderWidth: 1,
        },
      ],
    };
  
    const rolesDistributionData = {
        labels: ['Desarrolladores', 'Diseñadores', 'Gerentes', 'QA'],
        datasets: [
            {
                label: 'Roles por Proyecto',
                data: [40, 25, 15, 20], // Datos de ejemplo
                backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4CAF50'],
            },
        ],
    };
    
    const pieChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            datalabels: {
                color: '#fff',
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    return `${percentage}%`; // Muestra porcentaje
                    // return value; // Muestra número directamente
                },
                font: {
                    size: 14,
                    weight: 'bold',
                },
            },
        },
    };
  
    const facultyComparisonData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [
        {
          label: 'Avances (%)',
          data: [70, 55, 60, 40, 65, 85],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
      ],
    };
  
    return (
      <div className="graficas-container">
        <h2 className="dashboard-title">Gráficas de Proyectos</h2>
  
        <div className="carousel-container">
          <button className="arrow prev" onClick={prevSlide}>
            &#8592;
          </button>
  
          <div className="carousel-slide">
            {currentSlide === 0 && (
              <div className="chart-container small-chart">
                <h3 className="chart-title">Estado de los Proyectos</h3>
                <Bar data={projectStatusData} options={{ responsive: true }} />
              </div>
            )}
            {currentSlide === 1 && (
              <div className="chart-container small-chart">
                <h3 className="chart-title">Distribución de Roles por Proyectos</h3>
                <Pie data={rolesDistributionData} options={pieChartOptions} />
              </div>
            )}
            {currentSlide === 2 && (
              <div className="chart-container small-chart">
                <h3 className="chart-title">Comparativa de Avances entre Facultades</h3>
                <Line data={facultyComparisonData} options={{ responsive: true }} />
              </div>
            )}
          </div>
  
          <button className="arrow next" onClick={nextSlide}>
            &#8594;
          </button>
        </div>
      </div>
    );
  };
  
  export default Graficas;