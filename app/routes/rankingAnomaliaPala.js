const express = require('express');
const router = express.Router();

const rankingAnomaliaPala = [
  {
    sistems: 'Motor',
    stateAlert: 'Anomalía',
    alert: '86%',
    icon: 'pi pi-info-circle' 
  },
  {
    sistems: 'Sist. Lubricación',
    stateAlert: 'Anomalía',
    alert: '84%',
    icon: 'pi pi-info-circle'
  },
  {
    sistems: 'Acumulador de pistón',
    stateAlert: 'Precaución',
    alert: '48%',
    icon: 'pi pi-info-circle'
  },
  {
    sistems: 'Rodillo flotante',
    stateAlert: 'Normal',
    alert: '4%',
    icon: 'pi pi-info-circle'
  },
];

// Obtener todos los datos del ranking de anomalía
router.get('/', (req, res) => {
  res.send(rankingAnomaliaPala);
});

// Obtener un elemento del ranking de anomalía por su ID
router.get('/:id', (req, res) => {
  const item = rankingAnomaliaPala.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Elemento no encontrado');
  res.send(item);
});

module.exports = router;