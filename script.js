document.getElementById('calculateBtn').addEventListener('click', function() {
  // Obtener valores de ingresos
  const salario = parseFloat(document.getElementById('salario').value) || 0;
  const ingresosAdicionales = parseFloat(document.getElementById('ingresosAdicionales').value) || 0;

  const ingresosTotales = salario + ingresosAdicionales;

  // Obtener valores de gastos del hogar
  const hipotecaAlquiler = parseFloat(document.getElementById('hipotecaAlquiler').value) || 0;
  const seguroHogar = parseFloat(document.getElementById('seguroHogar').value) || 0;
  const mantenimientoCasa = parseFloat(document.getElementById('mantenimientoCasa').value) || 0;
  const suministrosCasa = parseFloat(document.getElementById('suministrosCasa').value) || 0;
  const internet = parseFloat(document.getElementById('internet').value) || 0;
  const telefono = parseFloat(document.getElementById('telefono').value) || 0;
  const comida = parseFloat(document.getElementById('comida').value) || 0;

  const gastosHogar = hipotecaAlquiler + seguroHogar + mantenimientoCasa + suministrosCasa + internet + telefono + comida;

  // Gastos transporte
  const coche = parseFloat(document.getElementById('coche').value) || 0;
  const seguroCoche = parseFloat(document.getElementById('seguroCoche').value) || 0;
  const mantenimientoCoche = parseFloat(document.getElementById('mantenimientoCoche').value) || 0;
  const combustible = parseFloat(document.getElementById('combustible').value) || 0;
  const transportePublico = parseFloat(document.getElementById('transportePublico').value) || 0;
  const taxiUber = parseFloat(document.getElementById('taxiUber').value) || 0;

  const gastosTransporte = coche + seguroCoche + mantenimientoCoche + combustible + transportePublico + taxiUber;

  // Gastos educación
  const colegioMaster = parseFloat(document.getElementById('colegioMaster').value) || 0;
  const extraescolares = parseFloat(document.getElementById('extraescolares').value) || 0;
  const materialEscolar = parseFloat(document.getElementById('materialEscolar').value) || 0;

  const gastosEducacion = colegioMaster + extraescolares + materialEscolar;

  // Otros gastos
  const ocio = parseFloat(document.getElementById('ocio').value) || 0;
  const vacaciones = parseFloat(document.getElementById('vacaciones').value) || 0;
  const medico = parseFloat(document.getElementById('medico').value) || 0;
  const mascotas = parseFloat(document.getElementById('mascotas').value) || 0;
  const otrosGastos = parseFloat(document.getElementById('otrosGastos').value) || 0;

  const gastosOtros = ocio + vacaciones + medico + mascotas + otrosGastos;

  // Ahorro / Inversión
  const ahorro = parseFloat(document.getElementById('ahorro').value) || 0;
  const inversion = parseFloat(document.getElementById('inversion').value) || 0;
  const ahorroInversion = ahorro + inversion;

  // Gastos totales (hogar + transporte + educación + otros)
  const gastosTotales = gastosHogar + gastosTransporte + gastosEducacion + gastosOtros + ahorroInversion;

  // Balance final
  const balance = ingresosTotales - gastosTotales;

  // Calculo porcentajes relativos a ingresos totales
  function pct(val) {
    return ingresosTotales > 0 ? ((val / ingresosTotales) * 100).toFixed(1) + '%' : '-';
  }

  // Mostrar resultados
  document.getElementById('balance').textContent = balance.toLocaleString('es-ES', {style:'currency', currency:'EUR'});
  document.getElementById('totalIngresos').textContent = ingresosTotales.toLocaleString('es-ES', {style:'currency', currency:'EUR'});
  document.getElementById('totalGastos').textContent = gastosTotales.toLocaleString('es-ES', {style:'currency', currency:'EUR'});
  document.getElementById('gastosHogarVal').textContent = gastosHogar.toLocaleString('es-ES', {style:'currency', currency:'EUR'});
  document.getElementById('gastosHogarPct').textContent = pct(gastosHogar);
  document.getElementById('gastosTransporteVal').textContent = gastosTransporte.toLocaleString('es-ES', {style:'currency', currency:'EUR'});
  document.getElementById('gastosTransportePct').textContent = pct(gastosTransporte);
  document.getElementById('gastosEducacionVal').textContent = gastosEducacion.toLocaleString('es-ES', {style:'currency', currency:'EUR'});
  document.getElementById('gastosEducacionPct').textContent = pct(gastosEducacion);
  document.getElementById('otrosGastosVal').textContent = gastosOtros.toLocaleString('es-ES', {style:'currency', currency:'EUR'});
  document.getElementById('otrosGastosPct').textContent = pct(gastosOtros);
  document.getElementById('ahorroVal').textContent = ahorroInversion.toLocaleString('es-ES', {style:'currency', currency:'EUR'});
  document.getElementById('ahorroPct').textContent = pct(ahorroInversion);
});
