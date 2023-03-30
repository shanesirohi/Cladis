const pieConfig = {
  type: 'doughnut',
  data: {
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
        label: 'Dataset 1',
      },
    ],
    labels: ['Turkish/Syria Earthquake', 'Australia Wild Fires', 'Assam Floods'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
    legend: {
      display: false,
    },
  },
}
const pieCtx = document.getElementById('pie')
window.myPie = new Chart(pieCtx, pieConfig)
