/*document.addEventListener('DOMContentLoaded', () => {
    const savedNombreEmp = localStorage.getItem('NombreEmp');
    if (savedNombreEmp) {
        document.getElementById('NombreEmp').value = savedNombreEmp;
    }*/

document.getElementById('inputForm').addEventListener('submit', function (event) {
    event.preventDefault();
    /*const NombreEmp = document.getElementById('NombreEmp').value;
    localStorage.setItem('NombreEmp', NombreEmp);*/
    guardar_propuesta();
    guardar_bench();
    //alert('Información guardada!');
});
/*});*/

//Propuesta
function guardar_propuesta() {
    const fecha_inicio = document.getElementById('FechaEtapa0Propuesta').value;
    const nombre_empresa = document.getElementById('NombreEmpresa').value;
    const resumen_empresa = document.getElementById('ResumenEmp').value;
    const objetivo_empresa = document.getElementById('ObjetivoEmp').value;
    const logo_empresa = document.getElementById('LogoEmp').value;
    const costo_propuesta = document.getElementById('CostoPropuesta').value;
    const tiempo_propuesta = document.getElementById('TiempoPropuesta').value;
    const sector_empresa = document.getElementById('SectorEmp').value;
    const costo_sector = document.getElementById('CSectorEmp').value;
    const tiempo_sector = document.getElementById('TSectorEmp').value;
    const giro_empresa = document.getElementById('GiroEmp').value;
    const costo_giro = document.getElementById('CGiroEmp').value;
    const tiempo_giro = document.getElementById('TGiroEmp').value;
    const pib_empresa = document.getElementById('PIBEmp').value;
    const costo_pib = document.getElementById('CPIBEmp').value;
    const tiempo_pib = document.getElementById('TPIBEmp').value;
    const responsable_op = document.getElementById('ResOp').value;
    const responsable_co = document.getElementById('ResCo').value;
    const responsable_rh = document.getElementById('ResRH').value;
    const responsable_tec = document.getElementById('ResTec').value;
    const responsable_fi = document.getElementById('ResFi').value;

    const datos = {
        fecha_inicio: fecha_inicio,
        nombre_empresa: nombre_empresa,
        resumen_empresa: resumen_empresa,
        objetivo_empresa: objetivo_empresa,
        logo_empresa: logo_empresa,
        costo_propuesta: costo_propuesta,
        tiempo_propuesta: tiempo_propuesta,
        sector_empresa: sector_empresa,
        costo_sector: costo_sector,
        tiempo_sector: tiempo_sector,
        giro_empresa: giro_empresa,
        costo_giro: costo_giro,
        tiempo_giro: tiempo_giro,
        pib_empresa: pib_empresa,
        costo_pib: costo_pib,
        tiempo_pib: tiempo_pib,
        responsable_op: responsable_op,
        responsable_co: responsable_co,
        responsable_rh: responsable_rh,
        responsable_tec: responsable_tec,
        responsable_fi: responsable_fi
    };
    alert('Información guardada');

    localStorage.setItem('datos', JSON.stringify(datos))
    //console.log("si se guardo la info")
}

function guardar_bench(){
    const fecha_bench = document.getElementById('FechaEtapa0Benchmarking').value;
    const costo_bench = document.getElementById('CBenchmarking').value;
    const tiempo_bench = document.getElementById('TBenchmarking').value;
    const molm = document.getElementById('MolM').value;
    const mopo = document.getElementById('Mopo').value;
    const maten = document.getElementById('Maten').value;
    const mcal = document.getElementById('Mcal').value;
    const mweb = document.getElementById('Mweb').value;

    const datos2 = {
        fecha_bench: fecha_bench,
        costo_bench: costo_bench,
        tiempo_bench: tiempo_bench,
        molm: molm,
        mopo: mopo,
        maten: maten,
        mcal: mcal,
        mweb: mweb
    };
    alert('Información guardada');

    localStorage.setItem('datos2', JSON.stringify(datos2))
}

function guardar_demanda(){
    const fecha_demanda = document.getElementById('FechaEtapa0Determinacion').value;
    const costo_demanda = document.getElementById('CDeterminacion').value;
    const tiempo_demanda = document.getElementById('TDeterminacion').value;
    const deteccionmeta = document.getElementById('Deteccionmeta').value;
    const satisfacionmeta = document.getElementById('Satisfacionmeta').value;
    const demanmeta = document.getElementById('Demanmeta').value;
    const deteccionobj = document.getElementById('Deteccionobj').value;
    const satisfacionobj = document.getElementById('Satisfacionobj').value;
    const demanobj = document.getElementById('Demanobj').value;
    const deteccionpot = document.getElementById('Deteccionpot').value;
    const satisfacionpot = document.getElementById('Satisfacionpot').value;
    const demanpot = document.getElementById('Demanpot').value;

    const datos3 = {
        fecha_demanda: fecha_demanda,
        costo_demanda: costo_demanda,
        tiempo_demanda: tiempo_demanda,
        deteccionmeta: deteccionmeta,
        satisfacionmeta: satisfacionmeta,
        demanmeta: demanmeta,
        deteccionobj: deteccionobj,
        satisfacionobj: satisfacionobj,
        demanobj: demanobj,
        deteccionpot: deteccionpot,
        satisfacionpot: satisfacionpot,
        demanpot: demanpot
    };
    alert('Información guardada');

    localStorage.setItem('datos3', JSON.stringify(datos3))
}

function guardar_identificacion(){
    const fecha_identi = document.getElementById('FechaEtapa0Mercado').value;
    const costo_identi = document.getElementById('CIdentificacion').value;
    const tiempo_identi = document.getElementById('TIdentificacion').value;
    const mercadometa = document.getElementById('MercadoMetaI').value;
    const mercadoobj = document.getElementById('MercadoObjetivoI').value;
    const mercadopoten = document.getElementById('MercadoPotencialI').value;
    const costo_estra = document.getElementById('CEstratificación').value;
    const tiempo_estra = document.getElementById('TEstratificación').value;
    const mercadometaE = document.getElementById('MercadoMetaE').value;
    const mercadoobjE = document.getElementById('MercadoObjetivoE').value;
    const mercadopotenE = document.getElementById('MercadoPotencialE').value;

    const datos4 = {
        fecha_identi: fecha_identi,
        costo_identi: costo_identi,
        tiempo_identi: tiempo_identi,
        mercadometa: mercadometa,
        mercadoobj: mercadoobj,
        mercadopoten: mercadopoten,
        costo_estra: costo_estra,
        tiempo_estra: tiempo_estra,
        mercadometaE: mercadometaE,
        mercadoobjE: mercadoobjE,
        mercadopotenE: mercadopotenE
    };
    alert('Información guardada')

    localStorage.setItem('datos4', JSON.stringify(datos4))
}

function guardada_comercial(){
    const fecha_comer = document.getElementById('FechaEtapa0Comercial').value;
    const costo_comer = document.getElementById('CPlanComercial').value;
    const actividad_comer = document.getElementById('ActividadPC').value;
    const tiempo_comer = document.getElementById('TiempoPC').value;
    const cantidades_comer = document.getElementById('CantidadesPC').value;
    const precio_comer = document.getElementById('PrecioPC').value;

    const datos5 = {
        fecha_comer: fecha_comer,
        costo_comer: costo_comer,
        actividad_comer: actividad_comer,
        tiempo_comer: tiempo_comer,
        cantidades_comer: cantidades_comer,
        precio_comer: precio_comer
    };
    alert('Información guardada')

    localStorage.setItem('datos5', JSON.stringify(datos5))
}

/*function mostrar(){
    const storedUserData = localStorage.getItem('datos');
    const userData = JSON.parse(storedUserData);
    console.log(userData);
}*/