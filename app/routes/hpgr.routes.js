module.exports = (app) => {
    const truck = require("../controllers/hpgr.controller.js");
    var router = require("express").Router();
    //const { authJwt } = require("../middleware");
  
    router.get("/lubricante/:equipo/:start/:end", truck.getLubricante);
    router.get("/metricas/", truck.getMuestra);
    router.get("/predicciones/", truck.getPredicciones);
    router.get("/lubricantePrediccion/:start/:end/:equipo", truck.getLubricantePrediccion);
    router.get("/detenciones/", truck.getDetenciones);
    router.get("/detencionesFilterDate/:start/:end", truck.getDetencionesFilterDate);
    router.get("/lubricantes/", truck.getLubricantes);
    router.get("/lubricantesFilters/:equipo/:start", truck.getLubricantesFilters);
    router.get("/sensores/", truck.getSensores);
    router.get("/vibraciones/", truck.getVibraciones);
    router.get("/vibracionesParams/:equipo/:component/:start/:end", truck.getVibracionesParams);
    router.get("/detencionesParams/:equipo/:start/:end", truck.getDetencionesParams);
    router.get("/componentesByTag/:equipo", truck.getComponentesByTag);
    router.get("/listadoEquipos/", truck.getListadoEquipos);
    router.get("/listadoEquiposVibraciones/", truck.getListadoEquiposVibraciones);
    router.get("/listadoEquipoDetenciones/", truck.getListadoEquiposDetenciones);
    router.get("/listadoEquipoAceites/", truck.getListadoEquiposAceites);
    router.get("/detencionesPorTag/:tag/:date", truck.getDetencionesPorTag);
    router.get("/listadoDetenciones/", truck.getListadoEquiposDetenciones);
    router.get("/detencionesMotivo/", truck.getDetencionesMotivo);
    router.get("/sensoresFilters/:columns/:start/:end", truck.getSensoresFilters);
    router.get('/resumen-kpi/:subsistema', truck.getResumenKpi);
    router.get('/resumen-line', truck.getLineResumen);
    
    app.use("/api-sakai/roadmap/sierraGorda/HPGR", router);
  };

  
  