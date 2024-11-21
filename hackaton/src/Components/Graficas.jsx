import { Bar, Pie, Line } from 'react-chartjs-2';

const Graficas = () => {
    // Datos para el estado de los proyectos
    const projectStatusData = {
      labels: ['En Progreso', 'Completados', 'Retrasados'],
      datasets: [
        {
          label: 'Proyectos',
          data: [15, 10, 5], // Datos de ejemplo
          backgroundColor: ['#36A2EB', '#4CAF50', '#FF6384'],
        },
      ],
    };
  
    // Datos para la distribución de roles por proyectos
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
  
    // Datos para la comparativa de avances entre facultades/programas
    const facultyComparisonData = {
      labels: ['Facultad A', 'Facultad B', 'Facultad C'], // Nombres de ejemplo
      datasets: [
        {
          label: 'Avances (%)',
          data: [70, 50, 90], // Datos de ejemplo
          borderColor: '#36A2EB',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          tension: 0.4,
        },
      ],
    };
  
    return (
      <div className="dashboard-container">
        <h2 className="dashboard-title">Gráficas de Proyectos</h2>
  
        <div className="chart-container">
          <h3 className="chart-title">Estado de los Proyectos</h3>
          <Bar data={projectStatusData} options={{ responsive: true }} />
        </div>
  
        <div className="chart-container">
          <h3 className="chart-title">Distribución de Roles por Proyectos</h3>
          <Pie data={rolesDistributionData} options={{ responsive: true }} />
        </div>
  
        <div className="chart-container">
          <h3 className="chart-title">Comparativa de Avances entre Facultades</h3>
          <Line data={facultyComparisonData} options={{ responsive: true }} />
        </div>
      </div>
    );
  }
  
  export default Graficas;