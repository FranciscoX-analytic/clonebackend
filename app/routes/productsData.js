const express = require('express');
const router = express.Router();

const productsData = [
  { id: 1, components: 'Motor', stateAlert: 'Rojo', monitoring: 'Plan de Mantención', alert: '86%' },
  { id: 2, components: 'Sist. Lubricación', stateAlert: 'Rojo', monitoring: 'Plan de Mantención', alert: '90%' },
  { id: 3, components: 'Acumulador de pistón', stateAlert: 'Verde Claro', monitoring: 'Sensores', alert: '40%' },
  { id: 4, components: 'Rodillo flotante', stateAlert: 'Verde', monitoring: 'Sensores', alert: '4%' },
  { id: 5, components: 'Poste', stateAlert: 'Verde', monitoring: 'Sensores', alert: '6%' }
];

router.get('/', (req, res) => {
  res.send(productsData);
});

router.get('/:id', (req, res) => {
  const productData = productsData.find(c => c.id === parseInt(req.params.id));
  if (!productData) return res.status(404).send('Producto no encontrado');
  res.send(productData);
});

router.post('/', (req, res) => {
  const productData = {
    id: productsData.length + 1,
    components: req.body.components,
    stateAlert: req.body.stateAlert,
    monitoring: req.body.monitoring,
    alert: req.body.alert
  };
  productsData.push(productData);
  res.send(productData);
});

router.delete('/:id', (req, res) => {
  const productData = productsData.find(c => c.id === parseInt(req.params.id));
  if (!productData) return res.status(404).send('Producto no encontrado');
  const index = productsData.indexOf(productData);
  productsData.splice(index, 1);
  res.send(productData);
});

module.exports = router;