const express = require('express');
const app = express();
const cors = require('cors');
require("./app/routes/hpgr.routes")(app);



app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
  
}));
// app.use(cors({
//   origin: ['http://localhost:8080'],
//   optionsSuccessStatus: 200,
// }));


// Middleware para establecer el encabezado Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); 
  next();
});

const productsDataRouter = require('./app/routes/productsData');
const incidenciaFallaRouter = require('./app/routes/incidenciaFalla');
const chartDataRouter = require('./app/routes/chartData');
// const rendimientoDataRouter = require('./app/routes/rendimientoData');
const rankingAnomaliaPalaRouter = require('./app/routes/rankingAnomaliaPala');
const monitoreoTableDataRouter = require('./app/routes/monitoreoTableData');



app.use('/api-sakai/productsData', productsDataRouter);
app.use('/api-sakai/incidenciaFalla', incidenciaFallaRouter);
app.use('/api-sakai/chartData', chartDataRouter);
// app.use('/api-sakai/rendimientoData', rendimientoDataRouter);
app.use('/api-sakai/rankingAnomaliaPala', rankingAnomaliaPalaRouter);
app.use('/api-sakai/monitoreoTableData', monitoreoTableDataRouter);


const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));
