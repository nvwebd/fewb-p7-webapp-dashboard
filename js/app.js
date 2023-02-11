const trafficChartData = [{
  id: '16to22',
  label: '16-22',
  value: 750
}, {
  id: '23to29',
  label: '23-29',
  value: 1250
}, {
  id: '30to5',
  label: '30-5',
  value: 1000
}, {
  id: '6to12',
  label: '6-12',
  value: 2000
}, {
  id: '13to19',
  label: '13-19',
  value: 1500
}, {
  id: '20to26',
  label: '20-26',
  value: 1750
}, {
  id: '27to3',
  label: '27-3',
  value: 1250
}, {
  id: '4to10',
  label: '4-10',
  value: 1900
}, {
  id: '11to17',
  label: '11-17',
  value: 2250
}, {
  id: '18to24',
  label: '18-24',
  value: 1500
}, {
  id: '25to31',
  label: '25-31',
  value: 2500
}];

const dailyTrafficChartData = [{
  id: 'sunday',
  label: 'S',
  value: 75
}, {
  id: 'monday',
  label: 'M',
  value: 125
}, {
  id: 'tuesday',
  label: 'T',
  value: 175
}, {
  id: 'wednesday',
  label: 'W',
  value: 120
}, {
  id: 'thursday',
  label: 'T',
  value: 225
}, {
  id: 'friday',
  label: 'F',
  value: 200
}, {
  id: 'saturday',
  label: 'S',
  value: 100
}];

const mobileUsersChartData = [{
  id: 'desktop',
  label: 'Desktop',
  value: 2397
}, {
  id: 'tablet',
  label: 'Tablet',
  value: 1386
}, {
  id: 'phones',
  label: 'Phones',
  value: 1298
}];
const app = () => {
  console.log('APP START');
  
  const trafficChart = new Chart(document.getElementById('traffic-chart'), {
    type: 'line',
    data: {
      labels: trafficChartData.map(row => row.label),
      datasets: [{
        data: trafficChartData.map(row => row.value),
      }]
    }
  });
  
  const dailyTrafficChart = new Chart(document.getElementById('daily-chart'), {
    type: 'bar',
    data: {
      labels: dailyTrafficChartData.map(row => row.label),
      datasets: [{
        data: dailyTrafficChartData.map(row => row.value),
      }]
    }
  });
  
  const mobileUsersChart = new Chart(document.getElementById('mobile-chart'), {
    type: 'doughnut',
    data: {
      labels: mobileUsersChartData.map(row => row.label),
      datasets: [{
        data: mobileUsersChartData.map(row => row.value),
      }]
    }
  });
  
  console.log('mobileUsersChart: ', mobileUsersChart);
}

app();