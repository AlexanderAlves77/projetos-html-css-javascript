const chart = document.querySelector("#chart").getContext("2d")

// create a new chart instance 
new Chart(chart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'BTC',
        data: [29374, 33537, 49631, 49095, 57282, 36684, 35572, 39974, 48847, 48116, 61004, 54177],
        borderColor: 'red',
        borderWidth: 2
      },
      {
        label: 'ETH',
        data: [32500, 41750, 87000, 66000, 69450, 35550, 33210, 45120, 47770, 43320, 69870, 74000],
        borderColor: 'blue',
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true
  }
})