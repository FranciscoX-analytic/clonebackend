const db = require("../config/db.config.js");

exports.getLubricante = (req, res) => {
  const sql =
    'SELECT * FROM lubricante WHERE "Equipo" LIKE $1 AND "Fmuestra" >= $2 AND "Fmuestra" <= $3 ORDER BY "Fmuestra" ASC';
  const values = [req.params.equipo + "%", req.params.start, req.params.end];

  db.query(sql, values)
    .then((result) => {
      console.log("getLubricante result:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getLubricante error:", err.message);
      res.send([]);
    });
};

exports.getMuestra = (req, res) => {
  const sql = 'SELECT * FROM public."metricasModelos" LIMIT 100';

  db.query(sql)
    .then((result) => {
      console.log("getMuestra result:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getMuestra error:", err.message);
      res.send([]);
    });
};

exports.getPredicciones = (req, res) => {
  const sql = 'SELECT * FROM public.predicciones LIMIT 100';

  db.query(sql)
    .then((result) => {
      console.log("getPredicciones result:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getPredicciones error:", err.message);
      res.send([]);
    });
};

exports.getLubricantePrediccion = (req, res) => {
  const sql =
    'SELECT "Prediccionid", "Fecha","Prediccion", "Rangodias","Tagequipo","Modofalla","Nombremodelo","F1score","Accuracy","Precision","Recall"' +
    'FROM public.predicciones AS pred LEFT JOIN  public."metricasModelos" AS metricas ON pred."Prediccionid" = metricas."Metricaid" WHERE "Fecha" >= $1 AND "Fecha" <= $2 AND upper("Tagequipo") = upper($3)  ORDER BY "Fecha" ASC';
  const values = [req.params.start, req.params.end, req.params.equipo];

  db.query(sql, values)
    .then((result) => {
      console.log("getLubricantePrediccion result:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getLubricantePrediccion error:", err.message);
      res.send([]);
    });
};

exports.getDetenciones = (req, res) => {
  const sql = 'SELECT * FROM public.detenciones LIMIT 100';

  db.query(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getDetenciones error:", err.message);
      res.send([]);
    });
};
exports.getDetencionesFilterDate = (req, res) => {
  const sql = 'SELECT * FROM public.detenciones WHERE "Fecha inicio" BETWEEN $1 AND $2';
  const values = [req.params.start, req.params.end];

  db.query(sql, values)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getDetenciones error:", err.message);
      res.send([]);
    });
};

exports.getDetencionesPorTag = (req, res) => {
  const sql = 'SELECT * FROM public.detenciones WHERE "Equipo nombre" = $1 AND SUBSTRING("Fecha inicio", 1, 10) = $2';
  const values = [req.params.tag , req.params.date];

  db.query(sql, values)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getDetenciones error:", err.message);
      res.send([]);
    });
};

exports.getDetencionesMotivo = (req, res) => {
  const sql = `
    SELECT DISTINCT "Motivo nivel 1", "Especialidad"
    FROM public.detenciones`;

  db.query(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getDetenciones error:", err.message);
      res.send([]);
    });
};



exports.getSensores = (req, res) => {
  const sql = 'SELECT * FROM public.sensores LIMIT 100';

  db.query(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getSensores error:", err.message);
      res.send([]);
    });
};
exports.getSensoresFilters = (req, res) => {
  const values = [req.params.start, req.params.end];
  const sql = 'SELECT "Time", ' + req.params.columns + ' FROM public.sensores LIMIT 100';
 
  db.query(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getSensores error:", err.message);
      res.send([]);
    });
};


exports.getVibraciones = (req, res) => {
  const sql = 'SELECT * FROM public.vibraciones LIMIT 100';

  db.query(sql)
    .then((result) => {
      console.log("getVibraciones result:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getVibraciones error:", err.message);
      res.send([]);
    });
};

exports.getVibracionesParams = (req, res) => {
  const sql = 'SELECT * FROM public.vibraciones WHERE "Tag" = $1 AND "Componente" IN ($2) AND  "Fecha" <= $3 ORDER BY "Fecha" DESC LIMIT 40 ';
  const values = [req.params.equipo, req.params.component, req.params.end];
  console.log("probando values", req.params)
  db.query(sql, values)
    .then((result) => {
      console.log("getVibraciones result:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getVibraciones error:", err.message);
      res.send([]);
    });
};
exports.getAllCombinations = (req, res) => {
  const sql = 'SELECT DISTINCT  "Componente" FROM public.vibraciones LIMIT 100';
  db.query(sql)
    .then((result) => {
      console.log("getAllCombinations result:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getAllCombinations error:", err.message);
      res.send([]);
    });
};
exports.getLubricantes = (req, res) => {
  const sql = 'SELECT * FROM public.lubricante LIMIT 100';

  db.query(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getLubricantes error:", err.message);
      res.send([]);
    });
};
exports.getLubricantesFilters = (req, res) => {
  const sql = 'SELECT * FROM public.lubricante WHERE "Equipo" = $1 AND "Fmuestra" <=$2 LIMIT 100';
  const values = [req.params.equipo, req.params.start]

  db.query(sql,values)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getLubricantes error:", err.message);
      res.send([]);
    });
};
exports.getComponentesByTag = (req, res) => {
  const sql = 'SELECT DISTINCT "Componente" FROM public.vibraciones WHERE "Tag" = $1';
  const values = [req.params.equipo];

  db.query(sql, values)
    .then((result) => {
      // Extraer los componentes únicos de los resultados
      const componentes = result.rows.map((row) => row.Componente);
      res.send(componentes);
    })
    .catch((err) => {
      console.log("getComponentesByTag error:", err.message);
      res.send([]);
    });
};

exports.getDetencionesParams = (req, res) => {
  const sql =
    'SELECT * FROM public.detenciones WHERE "Equipo nombre" LIKE $1 AND "Fecha inicio" >= $2 AND "Fecha fin" <= $3 LIMIT 100';
  const values = [req.params.equipo, req.params.start, req.params.end];

  db.query(sql, values)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getDetencionesParams error:", err.message);
      res.send([]);
    });
};

exports.getListadoEquipos = (req, res) => {
  const sql = 'SELECT DISTINCT "Tagequipo" FROM public.predicciones ORDER BY "Tagequipo"';

  db.query(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getListadoEquipos error:", err.message);
      res.send([]);
    });
};

exports.getListadoEquiposVibraciones = (req, res) => {
  const sql = 'SELECT DISTINCT "Tag" FROM public.vibraciones ORDER BY "Tag"';

  db.query(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getListadoEquipos error:", err.message);
      res.send([]);
    });
};

exports.getListadoEquiposDetenciones = (req, res) => {
  const sql = 'SELECT DISTINCT "Equipo nombre" FROM public.detenciones ORDER BY "Equipo nombre"';

  db.query(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getListadoEquipos error:", err.message);
      res.send([]);
    });
};
exports.getListadoEquipos = (req, res) => {
  const sql = 'SELECT DISTINCT "Tagequipo" FROM public.predicciones ORDER BY "Tagequipo"';

  db.query(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getListadoEquipos error:", err.message);
      res.send([]);
    });
};

exports.getListadoEquiposDetenciones = (req, res) => {
  const sql = 'SELECT DISTINCT "Equipo nombre" FROM public.detenciones ORDER BY "Equipo nombre"';
  
  db.query(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getListadoEquipos error:", err.message);
      res.send([]);
    });
};
exports.getListadoEquiposAceites = (req, res) => {
  const sql = 'SELECT DISTINCT "Equipo" FROM public.lubricante ORDER BY "Equipo"';
  
  db.query(sql)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("getListadoEquipos error:", err.message);
      res.send([]);
    });
};

exports.getResumenKpi =(req,res) =>{

  const subsistema = req.params.subsistema;

  const sql =[{
    "subsistema": "CR011",
    "kpi": "A",
    "tipo": "valor",
    "ene22": "69.196%",
    "feb22": "98.5012%",
    "mar22": "97.8095%",
    "abr22": "85.2454%",
    "may22": "98.0877%",
    "jun22": "88.2662%",
    "jul22": "85.3174%",
    "ago22": "95.1281%",
    "sep22": "92.9108%",
    "oct22": "89.9251%",
    "nov22": "97.8418%",
    "dic22": "97.7035%"
  }
  ,{
    "subsistema": "CR011",
    "kpi": "A",
    "tipo": "valor",
    "ene22": "69.196%",
    "feb22": "98.5012%",
    "mar22": "97.8095%",
    "abr22": "85.2454%",
    "may22": "98.0877%",
    "jun22": "88.2662%",
    "jul22": "85.3174%",
    "ago22": "95.1281%",
    "sep22": "92.9108%",
    "oct22": "89.9251%",
    "nov22": "97.8418%",
    "dic22": "97.7035%"
  },{
    "subsistema": "CR011",
    "kpi": "U",
    "tipo": "A",
    "ene22": "75.123%",
    "feb22": "91.2345%",
    "mar22": "88.5678%",
    "abr22": "92.3456%",
    "may22": "78.9876%",
    "jun22": "83.4567%",
    "jul22": "79.8765%",
    "ago22": "85.4321%",
    "sep22": "87.6543%",
    "oct22": "89.1234%",
    "nov22": "91.2345%",
    "dic22": "88.8765%"
  },{
    "subsistema": "CR011",
    "kpi": "U",
    "tipo": "U",
    "ene22": "82.345%",
    "feb22": "96.789%",
    "mar22": "91.234%",
    "abr22": "89.012%",
    "may22": "93.456%",
    "jun22": "87.654%",
    "jul22": "85.432%",
    "ago22": "90.123%",
    "sep22": "92.345%",
    "oct22": "87.654%",
    "nov22": "91.234%",
    "dic22": "89.765%"
  },
  {
    "subsistema": "CR011",
    "kpi": "U",
    "tipo": "UE",
    "ene22": "70.123%",
    "feb22": "93.456%",
    "mar22": "86.789%",
    "abr22": "91.234%",
    "may22": "88.765%",
    "jun22": "84.567%",
    "jul22": "80.123%",
    "ago22": "92.345%",
    "sep22": "89.012%",
    "oct22": "93.456%",
    "nov22": "85.432%",
    "dic22": "91.234%"
  },{
    "subsistema": "CR021",
    "kpi": "U",
    "tipo": "valor",
    "ene22": "79.196%",
    "feb22": "98.5012%",
    "mar22": "97.8095%",
    "abr22": "85.2454%",
    "may22": "98.0877%",
    "jun22": "88.2662%",
    "jul22": "85.3174%",
    "ago22": "95.1281%",
    "sep22": "92.9108%",
    "oct22": "89.9251%",
    "nov22": "97.8418%",
    "dic22": "97.7035%"
  }
  ,{
    "subsistema": "CR021",
    "kpi": "U",
    "tipo": "valor",
    "ene22": "69.196%",
    "feb22": "98.5012%",
    "mar22": "97.8095%",
    "abr22": "85.2454%",
    "may22": "98.0877%",
    "jun22": "88.2662%",
    "jul22": "85.3174%",
    "ago22": "95.1281%",
    "sep22": "92.9108%",
    "oct22": "89.9251%",
    "nov22": "97.8418%",
    "dic22": "97.7035%"
  },{
    "subsistema": "CR021",
    "kpi": "A",
    "tipo": "A",
    "ene22": "75.123%",
    "feb22": "91.2345%",
    "mar22": "88.5678%",
    "abr22": "92.3456%",
    "may22": "78.9876%",
    "jun22": "83.4567%",
    "jul22": "79.8765%",
    "ago22": "85.4321%",
    "sep22": "87.6543%",
    "oct22": "89.1234%",
    "nov22": "91.2345%",
    "dic22": "88.8765%"
  },{
    "subsistema": "CR021",
    "kpi": "U",
    "tipo": "U",
    "ene22": "82.345%",
    "feb22": "96.789%",
    "mar22": "91.234%",
    "abr22": "89.012%",
    "may22": "93.456%",
    "jun22": "87.654%",
    "jul22": "85.432%",
    "ago22": "90.123%",
    "sep22": "92.345%",
    "oct22": "87.654%",
    "nov22": "91.234%",
    "dic22": "89.765%"
  },
  {
    "subsistema": "CR021",
    "kpi": "U",
    "tipo": "UE",
    "ene22": "70.123%",
    "feb22": "93.456%",
    "mar22": "86.789%",
    "abr22": "91.234%",
    "may22": "88.765%",
    "jun22": "84.567%",
    "jul22": "80.123%",
    "ago22": "92.345%",
    "sep22": "89.012%",
    "oct22": "93.456%",
    "nov22": "85.432%",
    "dic22": "91.234%"
  },
  {
    "subsistema": "CR031",
    "kpi": "A",
    "tipo": "valor",
    "ene22": "99.196%",
    "feb22": "98.5012%",
    "mar22": "97.8095%",
    "abr22": "85.2454%",
    "may22": "98.0877%",
    "jun22": "88.2662%",
    "jul22": "85.3174%",
    "ago22": "95.1281%",
    "sep22": "92.9108%",
    "oct22": "89.9251%",
    "nov22": "97.8418%",
    "dic22": "97.7035%"
  }
  ,{
    "subsistema": "CR031",
    "kpi": "A",
    "tipo": "valor",
    "ene22": "69.196%",
    "feb22": "98.5012%",
    "mar22": "97.8095%",
    "abr22": "85.2454%",
    "may22": "98.0877%",
    "jun22": "88.2662%",
    "jul22": "85.3174%",
    "ago22": "95.1281%",
    "sep22": "92.9108%",
    "oct22": "89.9251%",
    "nov22": "97.8418%",
    "dic22": "97.7035%"
  },{
    "subsistema": "CR031",
    "kpi": "U",
    "tipo": "A",
    "ene22": "75.123%",
    "feb22": "91.2345%",
    "mar22": "88.5678%",
    "abr22": "92.3456%",
    "may22": "78.9876%",
    "jun22": "83.4567%",
    "jul22": "79.8765%",
    "ago22": "85.4321%",
    "sep22": "87.6543%",
    "oct22": "89.1234%",
    "nov22": "91.2345%",
    "dic22": "88.8765%"
  },{
    "subsistema": "CR031",
    "kpi": "U",
    "tipo": "U",
    "ene22": "82.345%",
    "feb22": "96.789%",
    "mar22": "91.234%",
    "abr22": "89.012%",
    "may22": "93.456%",
    "jun22": "87.654%",
    "jul22": "85.432%",
    "ago22": "90.123%",
    "sep22": "92.345%",
    "oct22": "87.654%",
    "nov22": "91.234%",
    "dic22": "89.765%"
  },
  {
    "subsistema": "CR031",
    "kpi": "U",
    "tipo": "UE",
    "ene22": "70.123%",
    "feb22": "93.456%",
    "mar22": "86.789%",
    "abr22": "91.234%",
    "may22": "88.765%",
    "jun22": "84.567%",
    "jul22": "80.123%",
    "ago22": "92.345%",
    "sep22": "89.012%",
    "oct22": "93.456%",
    "nov22": "85.432%",
    "dic22": "91.234%"
  },
  {
    "subsistema": "CR041",
    "kpi": "A",
    "tipo": "valor",
    "ene22": "29.196%",
    "feb22": "98.5012%",
    "mar22": "97.8095%",
    "abr22": "85.2454%",
    "may22": "98.0877%",
    "jun22": "88.2662%",
    "jul22": "85.3174%",
    "ago22": "95.1281%",
    "sep22": "92.9108%",
    "oct22": "89.9251%",
    "nov22": "97.8418%",
    "dic22": "97.7035%"
  }
  ,{
    "subsistema": "CR041",
    "kpi": "A",
    "tipo": "valor",
    "ene22": "69.196%",
    "feb22": "98.5012%",
    "mar22": "97.8095%",
    "abr22": "85.2454%",
    "may22": "98.0877%",
    "jun22": "88.2662%",
    "jul22": "85.3174%",
    "ago22": "95.1281%",
    "sep22": "92.9108%",
    "oct22": "89.9251%",
    "nov22": "97.8418%",
    "dic22": "97.7035%"
  },{
    "subsistema": "CR041",
    "kpi": "U",
    "tipo": "A",
    "ene22": "75.123%",
    "feb22": "91.2345%",
    "mar22": "88.5678%",
    "abr22": "92.3456%",
    "may22": "78.9876%",
    "jun22": "83.4567%",
    "jul22": "79.8765%",
    "ago22": "85.4321%",
    "sep22": "87.6543%",
    "oct22": "89.1234%",
    "nov22": "91.2345%",
    "dic22": "88.8765%"
  },{
    "subsistema": "CR041",
    "kpi": "U",
    "tipo": "U",
    "ene22": "82.345%",
    "feb22": "96.789%",
    "mar22": "91.234%",
    "abr22": "89.012%",
    "may22": "93.456%",
    "jun22": "87.654%",
    "jul22": "85.432%",
    "ago22": "90.123%",
    "sep22": "92.345%",
    "oct22": "87.654%",
    "nov22": "91.234%",
    "dic22": "89.765%"
  },
  {
    "subsistema": "CR041",
    "kpi": "U",
    "tipo": "UE",
    "ene22": "70.123%",
    "feb22": "93.456%",
    "mar22": "86.789%",
    "abr22": "91.234%",
    "may22": "88.765%",
    "jun22": "84.567%",
    "jul22": "80.123%",
    "ago22": "92.345%",
    "sep22": "89.012%",
    "oct22": "93.456%",
    "nov22": "85.432%",
    "dic22": "91.234%"
  }]
  const filteredData = sql.filter(item => item.subsistema === subsistema );

  res.json(filteredData);
}

exports.getLineResumen = (req,res) =>{
  const sql = {labels: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01', '2022-06-01', '2022-07-01'],
  datasets: [
      {
          label: 'Dataset 1',
          fill: false,
          borderColor: 'rgba(0, 0, 255, 0.8)',
          yAxisID: 'y',
          tension: 0.4,
          data: [65, 59, 80, 81, 56, 55, 10]
      },
      {
          label: 'Dataset 2',
          fill: false,
          borderColor:'rgba(255, 0, 132, 0.8)',
          yAxisID: 'y1',
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90]
      }
  ]
}
res.json(sql);
}