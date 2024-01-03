const express = require('express');
const router = express.Router();

const monitoreoTableData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'bar',
      label: 'Propulsión',
      backgroundColor: 'rgba(49, 221, 221, 1)',
      data: [
        { x: 'January', y: 50, tooltip: 'Valor personalizado 1' },
        { x: 'February', y: 25, tooltip: 'Valor personalizado 2' },
        { x: 'March', y: 12, tooltip: 'Valor personalizado 3' },
        { x: 'April', y: 48, tooltip: 'Valor personalizado 4' },
        { x: 'May', y: 90, tooltip: 'Valor personalizado 5' },
        { x: 'June', y: 76, tooltip: 'Valor personalizado 6' },
        { x: 'July', y: 42, tooltip: 'Valor personalizado 7' },
      ]
    },
    {
      type: 'bar',
      label: 'Lubricación',
      backgroundColor: 'rgba(165, 51, 146, 1)',
      data: [
        { x: 'January', y: 50, tooltip: 'Valor personalizado 1' },
        { x: 'February', y: 25, tooltip: 'Valor personalizado 2' },
        { x: 'March', y: 12, tooltip: 'Valor personalizado 3' },
        { x: 'April', y: 48, tooltip: 'Valor personalizado 4' },
        { x: 'May', y: 90, tooltip: 'Valor personalizado 5' },
        { x: 'June', y: 76, tooltip: 'Valor personalizado 6' },
        { x: 'July', y: 42, tooltip: 'Valor personalizado 7' },
      ]
    },
    {
      type: 'bar',
      label: 'Eléctrico',
      backgroundColor: 'rgba(68, 101, 211, 0.8)',
      data: [
        { x: 'January', y: 50, tooltip: 'Valor personalizado 1' },
        { x: 'February', y: 25, tooltip: 'Valor personalizado 2' },
        { x: 'March', y: 12, tooltip: 'Valor personalizado 3' },
        { x: 'April', y: 48, tooltip: 'Valor personalizado 4' },
        { x: 'May', y: 90, tooltip: 'Valor personalizado 5' },
        { x: 'June', y: 76, tooltip: 'Valor personalizado 6' },
        { x: 'July', y: 42, tooltip: 'Valor personalizado 7' },
      ]
    },
    {
      type: 'bar',
      label: 'Giro',
      backgroundColor: 'rgba(217, 61, 61, 0.8)',
      data: [
        { x: 'January', y: 50, tooltip: 'Valor personalizado 1' },
        { x: 'February', y: 25, tooltip: 'Valor personalizado 2' },
        { x: 'March', y: 12, tooltip: 'Valor personalizado 3' },
        { x: 'April', y: 48, tooltip: 'Valor personalizado 4' },
        { x: 'May', y: 90, tooltip: 'Valor personalizado 5' },
        { x: 'June', y: 76, tooltip: 'Valor personalizado 6' },
        { x: 'July', y: 42, tooltip: 'Valor personalizado 7' },
      ]
    },
    {
      type: 'bar',
      label: 'Empuje',
      backgroundColor: 'rgba(213, 121, 40, 1)',
      data: [
        { x: 'January', y: 50, tooltip: 'Valor personalizado 1' },
        { x: 'February', y: 25, tooltip: 'Valor personalizado 2' },
        { x: 'March', y: 12, tooltip: 'Valor personalizado 3' },
        { x: 'April', y: 48, tooltip: 'Valor personalizado 4' },
        { x: 'May', y: 90, tooltip: 'Valor personalizado 5' },
        { x: 'June', y: 76, tooltip: 'Valor personalizado 6' },
        { x: 'July', y: 42, tooltip: 'Valor personalizado 7' },
      ]
    },
  ]
};

router.get('/', (req, res) => {
  res.send(monitoreoTableData);
});

module.exports = router;
