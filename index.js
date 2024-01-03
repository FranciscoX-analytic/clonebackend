const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:8081','http://localhost:8080']
}));

const productsData = [
  { id: 1, components: 'Motor', stateAlert: 'Rojo', monitoring: 'Plan de Mantención', alert: '86%' },
  { id: 2, components: 'Sist. Lubricación', stateAlert: 'Rojo', monitoring: 'Plan de Mantención', alert: '90%' },
  { id: 3, components: 'Acumulador de pistón', stateAlert: 'Verde Claro', monitoring: 'Sensores', alert: '40%' },
  { id: 4, components: 'Rodillo flotante', stateAlert: 'Verde', monitoring: 'Sensores', alert: '4%' },
  { id: 5, components: 'Poste', stateAlert: 'Verde', monitoring: 'Sensores', alert: '6%' }
];

app.get('/api-sakai', (req, res) => {
  res.send('Node.js API');
});

app.get('/api-sakai/productsData', (req, res) => {
  res.send(productsData);
});

app.get('/api-sakai/productsData/:id', (req, res) => {
  const productData = productsData.find(c => c.id === parseInt(req.params.id));
  if (!productData) return res.status(404).send('Producto no encontrado');
  res.send(productData);
});

app.post('/api-sakai/productsData', (req, res) => {
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

app.delete('/api-sakai/productsData/:id', (req, res) => {
  const productData = productsData.find(c => c.id === parseInt(req.params.id));
  if (!productData) return res.status(404).send('Producto no encontrado');
  const index = productsData.indexOf(productData);
  productsData.splice(index, 1);
  res.send(productData);
});
// INCIDENCIA FALLA PALA
const incidenciaFalla = [{
  id: 1,
  featured: 'Horómetro Motor',
  incidence: '+143.46',
  alert: 86,
},
{
  id: 2,
  featured: 'Ciclos de sobrecarga',
  incidence: '+73.23',
  alert: 84,
},
{
  id: 3,
  featured: 'Horómetro 2',
  incidence: '-20.34',
  alert: 48,
},
{
  id: 4,
  featured: 'Contaminación de aceite',
  incidence: '-230.45',
  alert: 4,
},
];

app.get('/api-sakai', (req, res) => {
  res.send('Node.js API');
});

app.get('/api-sakai/incidenciaFalla', (req, res) => {
  res.send(incidenciaFalla);
});

app.get('/api-sakai/incidenciaFalla/:id', (req, res) => {
  const item = incidenciaFalla.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Producto no encontrado');
  res.send(item);
});

app.post('/api-sakai/incidenciaFalla', (req, res) => {
  const item = {
    id: incidenciaFalla.length + 1,
    components: req.body.components,
    incidenciaFalla: req.body.incidenciaFalla,
    monitoring: req.body.monitoring,
    alert: req.body.alert
  };
  incidenciaFalla.push(item);
  res.send(item);
});

app.delete('/api-sakai/incidenciaFalla/:id', (req, res) => {
  const item = incidenciaFalla.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Producto no encontrado');
  const index = incidenciaFalla.indexOf(item);
  incidenciaFalla.splice(index, 1);
  res.send(item);
});

//CHART DATA PALA
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
    {
        label: 'Dataset 2',
        fill: false,
        borderColor: "rgba(0, 184, 0, 0.8)",
        yAxisID: 'y1',
        tension: 0.4,
        data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};
app.get('/api-sakai/chartData', (req, res) => {
  res.send(chartData);
});
app.get('/api-sakai/chartData/:id', (req, res) => {
  const item = chartData.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Producto no encontrado');
  res.send(item);
});

// RENDIMIENTO PALA 

const rendimientoData = [
  {
    presition: '93.6%',
    recall: '53.6%',
    score: '72.2%',
  }
];

app.get('/api-sakai/rendimientoData', (req, res) => {
  res.send(rendimientoData);
});
app.get('/api-sakai/rendimientoData/:id', (req, res) => {
  const item = rendimientoData.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Producto no encontrado');
  res.send(item);
});

//RANKING ANMALIAS 
const rankingAnomaliaPala = [
  {
    sistems: 'Motor',
    stateAlert: 'Anomalia',
    alert: '86%',
    icon: 'pi pi-info-circle' 
  },
  {
    sistems: 'Sist. Lubricación',
    stateAlert: 'Anomalia',
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
app.get('/api-sakai/rankingAnomaliaPala', (req, res) => {
  res.send(rankingAnomaliaPala);
});
app.get('/api-sakai/rankingAnomaliaPala/:id', (req, res) => {
  const item = rankingAnomaliaPala.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Producto no encontrado');
  res.send(item);
});

//Table monitoreo data 

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
  ]}
  app.get('/api-sakai/monitoreoTableData', (req, res) => {
    res.send(monitoreoTableData);
  });


// Modelo rul
const modeloRul = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'Estimado Rul',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgba(0, 0, 255, 0.8)',
          tension: 0.4
      },
      {
          label: 'Real Rul',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: 'rgba(255, 0, 132, 0.8)',
          tension: 0.4
      }
  ]
};
app.get('/api-sakai/modeloRul', (req, res) => {
  res.send(modeloRul);
});
const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));
