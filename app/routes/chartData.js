const express = require('express');
const router = express.Router();

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      fill: false,
      borderColor: "rgba(0,0,225,1)",
      yAxisID: 'y',
      tension: 0.4,
      data: [65, 59, 80, 81, 56, 55, 10]
    },
  ]
};

// Obtener todos los datos del gráfico
router.get('/', (req, res) => {
  res.send(chartData);
});

// Obtener un elemento del gráfico por su ID
router.get('/:id', (req, res) => {
  const item = chartData.datasets.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Elemento no encontrado');
  res.send(item);
});

module.exports = router;