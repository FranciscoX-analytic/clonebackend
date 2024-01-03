const express = require('express');
const router = express.Router();

const incidenciaFalla = [
  { id: 1, featured: 'Horómetro Motor', incidence: '+143.46', alert: 86 },
  { id: 2, featured: 'Ciclos de sobrecarga', incidence: '+73.23', alert: 84 },
  { id: 3, featured: 'Horómetro 2', incidence: '-20.34', alert: 48 },
  { id: 4, featured: 'Contaminación de aceite', incidence: '-230.45', alert: 4 },
];

router.get('/', (req, res) => {
  res.send(incidenciaFalla);
});

router.get('/:id', (req, res) => {
  const item = incidenciaFalla.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Producto no encontrado');
  res.send(item);
});

router.post('/', (req, res) => {
  const item = {
    id: incidenciaFalla.length + 1,
    featured: req.body.featured,
    incidence: req.body.incidence,
    alert: req.body.alert
  };
  incidenciaFalla.push(item);
  res.send(item);
});

router.delete('/:id', (req, res) => {
  const item = incidenciaFalla.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Producto no encontrado');
  const index = incidenciaFalla.indexOf(item);
  incidenciaFalla.splice(index, 1);
  res.send(item);
});

module.exports = router;