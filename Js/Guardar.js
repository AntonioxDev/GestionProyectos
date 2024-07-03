/*document.addEventListener('DOMContentLoaded', () => {
    const savedNombreEmp = localStorage.getItem('NombreEmp');
    if (savedNombreEmp) {
        document.getElementById('NombreEmp').value = savedNombreEmp;
    }*/

        const actividades = {
            addActividad: function addElem(elem) {
                [].push.call(this, elem);
            }
        }

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

function guardar_comercial(){
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

function guardar_trabajo(){
    const fecha_trabajo = document.getElementById('FechaEtapa0PlanTrabajo').value;
    const costo_trabajo = document.getElementById('CostoPlanTrabajo').value;
    const entregable = document.getElementById('entregable0').value;
    const entregable1 = document.getElementById('entregable1').value;
    const entregable2 = document.getElementById('entregable2').value;
    const entregable3 = document.getElementById('entregable3').value;
    const entregable4 = document.getElementById('entregable4').value;
    const tactaconstitutiva = document.getElementById('TActaconstitutiva').value;
    const cactaconstitutiva = document.getElementById('CActaconstitutiva').value;
    const ractaconstitutiva = document.getElementById('RActaconstitutiva').value;
    const resactaconstitutiva = document.getElementById('ResActaconstitutiva').value;
    const tmatriz = document.getElementById('TMatriz').value;
    const cmatriz = document.getElementById('CMatriz').value;
    const rmatriz = document.getElementById('RMatriz').value;
    const resmatriz = document.getElementById('ResMatriz').value;
    const tplandirec = document.getElementById('TPlandirec').value;
    const cplandirec = document.getElementById('CPlandirec').value;
    const rplandirec = document.getElementById('RPlandirec').value;
    const resplandirec = document.getElementById('ResPlandirec').value;
    const tgestion = document.getElementById('TGestion').value;
    const cgestion = document.getElementById('CGestion').value;
    const rgestion = document.getElementById('RGestion').value;
    const resgestion = document.getElementById('ResGestion').value;
    const trequisitos = document.getElementById('Trequisitos').value;
    const crequisitos = document.getElementById('Crequisitos').value;
    const rrequisitos = document.getElementById('Rrequisitos').value;
    const resrequisitos = document.getElementById('Resrequisitos').value;
    const tedt = document.getElementById('TEDT').value;
    const cedt = document.getElementById('CEDT').value;
    const redt = document.getElementById('REDT').value;
    const resedt = document.getElementById('ResEDT').value;
    const tcronograma = document.getElementById('TCronograma').value;
    const ccronograma = document.getElementById('CCronograma').value;
    const rcronograma = document.getElementById('RCronograma').value;
    const rescronograma = document.getElementById('ResCronograma').value;
    const tprogramastrabajo = document.getElementById('TProgramasTrabajo').value;
    const cprogramastrabajo = document.getElementById('CProgramasTrabajo').value;
    const rprogramastrabajo = document.getElementById('RProgramasTrabajo').value;
    const resprogramastrabajo = document.getElementById('ResProgramasTrabajo').value;
    const tejecucionpo = document.getElementById('Tejecucionpo').value;
    const cejecucionpo = document.getElementById('CejecucionPO').value;
    const rejecucionpo = document.getElementById('RejecucionPO').value;
    const resejecucionpo = document.getElementById('ResejecucionPO').value;
    const tchecklistv = document.getElementById('TChecklistV').value;
    const cchecklistv = document.getElementById('CChecklistV').value;
    const rchecklistv = document.getElementById('RChecklistV').value;
    const reschecklistv = document.getElementById('ResChecklistV').value;
    const tcontrolcambios = document.getElementById('Tcontrolcambios').value;
    const ccontrolcambios = document.getElementById('Ccontrolcambios').value;
    const rcontrolcambios = document.getElementById('Rcontrolcambios').value;
    const responsable = document.getElementById('Responsable').value;
    const tcontrolseguimiento = document.getElementById('Tcontrolseguimiento').value;
    const ccontrolseguimiento = document.getElementById('Ccontrolseguimiento').value;
    const rercontrolseguimientodt = document.getElementById('Rcontrolseguimiento').value;
    const rescontrolseguimiento = document.getElementById('Rescontrolseguimiento').value;
    const tresultados = document.getElementById('Tresultados').value;
    const cresultados = document.getElementById('Cresultados').value;
    const rresultados = document.getElementById('Rresultados').value;
    const resresultados = document.getElementById('Resresultados').value;
    const tcontrolcostos = document.getElementById('Tcontrolcostos').value;
    const ccontrolcostos = document.getElementById('Ccontrolcostos').value;
    const rcontrolcostos = document.getElementById('Rcontrolcostos').value;
    const rescontrolcostos = document.getElementById('Rescontrolcostos').value;
    const tevaluacioneconomica = document.getElementById('Tevaluacioneconomica').value;
    const cevaluacioneconomica = document.getElementById('Cevaluacioneconomica').value;
    const revaluacioneconomica = document.getElementById('Revaluacioneconomica').value;
    const resevaluacioneconomica = document.getElementById('Resevaluacioneconomica').value;
    const triesgo = document.getElementById('Triesgo').value;
    const criesgo = document.getElementById('Criesgo').value;
    const rriesgo = document.getElementById('Rriesgo').value;
    const resriesgo = document.getElementById('Resriesgo').value;
    const tactacierre = document.getElementById('Tactacierre').value;
    const cactacierre = document.getElementById('Cactacierre').value;
    const ractacierre = document.getElementById('Ractacierre').value;
    const resactacierre = document.getElementById('Resactacierre').value;

    const datos6 = {
        fecha_trabajo: fecha_trabajo,
        costo_trabajo: costo_trabajo,
        entregable: entregable,
        entregable1: entregable1,
        entregable2: entregable2,
        entregable3: entregable3,
        entregable4: entregable4,
        tactaconstitutiva: tactaconstitutiva,
        cactaconstitutiva: cactaconstitutiva,
        ractaconstitutiva: ractaconstitutiva,
        resactaconstitutiva: resactaconstitutiva,
        tmatriz: tmatriz,
        cmatriz: cmatriz,
        rmatriz: rmatriz,
        resmatriz: resmatriz,
        tplandirec: tplandirec,
        cplandirec: cplandirec,
        rplandirec: rplandirec,
        resplandirec: resplandirec,
        tgestion: tgestion,
        cgestion: cgestion,
        rgestion: rgestion,
        resgestion: resgestion,
        trequisitos: trequisitos,
        crequisitos: crequisitos,
        rrequisitos: rrequisitos,
        resrequisitos: resrequisitos,
        tedt: tedt,
        cedt: cedt,
        redt: redt,
        resedt: resedt,
        tcronograma: tcronograma,
        ccronograma: ccronograma,
        rcronograma: rcronograma,
        rescronograma: rescronograma,
        tprogramastrabajo: tprogramastrabajo,
        cprogramastrabajo: cprogramastrabajo,
        rprogramastrabajo: rprogramastrabajo,
        resprogramastrabajo: resprogramastrabajo,
        tejecucionpo: tejecucionpo,
        cejecucionpo: cejecucionpo,
        rejecucionpo: rejecucionpo,
        resejecucionpo: resejecucionpo,
        tchecklistv: tchecklistv,
        cchecklistv: cchecklistv,
        rchecklistv: rchecklistv,
        reschecklistv: reschecklistv,
        tcontrolcambios: tcontrolcambios,
        ccontrolcambios: ccontrolcambios,
        rcontrolcambios: rcontrolcambios,
        responsable: responsable,
        tcontrolcambios: tcontrolcambios,
        tcontrolseguimiento: tcontrolseguimiento,
        ccontrolseguimiento: ccontrolseguimiento,
        rercontrolseguimientodt: rercontrolseguimientodt,
        rescontrolseguimiento: rescontrolseguimiento,
        tresultados: tresultados,
        cresultados: cresultados,
        rresultados: rresultados,
        resresultados: resresultados,
        tcontrolcostos: tcontrolcostos,
        ccontrolcostos: ccontrolcostos,
        rcontrolcostos: rcontrolcostos,
        rescontrolcostos: rescontrolcostos,
        tevaluacioneconomica: tevaluacioneconomica,
        cevaluacioneconomica: cevaluacioneconomica,
        revaluacioneconomica: revaluacioneconomica,
        resevaluacioneconomica: resevaluacioneconomica,
        triesgo: triesgo,
        criesgo: criesgo,
        rriesgo: rriesgo,
        resriesgo: resriesgo,
        tactacierre: tactacierre,
        cactacierre: cactacierre,
        ractacierre: ractacierre,
        resactacierre: resactacierre
    };
    alert('Información guardada')

    localStorage.setItem('datos6', JSON.stringify(datos6))
}

function guardar_estudios(){
    const fecha_estudios = document.getElementById('FechaEtapa0Estudios').value;
    const estudiom = document.getElementById('EstudioM').value;
    const testudiom = document.getElementById('TEstudioM').value;
    const ctecnico = document.getElementById('Ctecnico').value;
    const ttecnico = document.getElementById('Ttecnico').value;
    const ceconomico = document.getElementById('Ceconomico').value;
    const teconomico = document.getElementById('Teconomico').value;
    const cfinanciero = document.getElementById('CFinanciero').value;
    const tfinanciero = document.getElementById('TFinanciero').value;

    const datos7 = {
        fecha_estudios: fecha_estudios,
        estudiom: estudiom,
        testudiom: testudiom,
        ctecnico: ctecnico,
        ttecnico: ttecnico,
        ceconomico: ceconomico,
        teconomico: teconomico,
        cfinanciero: cfinanciero,
        tfinanciero: tfinanciero
    };
    alert('Información guardada')

    localStorage.setItem('datos7', JSON.stringify(datos7))
}

function guardar_operativo(){
    const fecha_operativa = document.getElementById('FechaEtapa0PlanOperativo').value;
    const pplanoperativo = document.getElementById('PPlanOperativo').value;
    const actividad = document.getElementById('Actividad').value;
    const resumena = document.getElementById('ResumenA').value;
    const numeropersonasa = document.getElementById('NumeroPersonasA').value;
    const tiempoa = document.getElementById('TiempoA').value;

    const datos8 = {
        fecha_operativa: fecha_operativa,
        pplanoperativo: pplanoperativo,
        actividad: actividad,
        resumena: resumena,
        numeropersonasa: numeropersonasa,
        tiempoa: tiempoa
    };
    alert('Información guardada')

    localStorage.setItem('datos8', JSON.stringify(datos8))
}

function guardar_proyeccion(){
    const fecha_proyeccion = document.getElementById('FechaEtapa0Proyeccion').value;
    const cproyeccion = document.getElementById('CProyeccion').value;
    const tproyeccion = document.getElementById('TProyeccion').value;
    const demanda1 = document.getElementById('Demanda1').value;
    const precioventa1 = document.getElementById('Precioventa1').value;
    const venta1 = document.getElementById('Venta1').value;
    const incremento1 = document.getElementById('Incremento1').value;
    const demanda2 = document.getElementById('Demanda2').value;
    const precioventa2 = document.getElementById('Precioventa2').value;
    const venta2 = document.getElementById('Venta2').value;
    const demanda3 = document.getElementById('Demanda3').value;
    const precioventa3 = document.getElementById('Precioventa3').value;
    const venta3 = document.getElementById('Venta3').value;
    const incremento3 = document.getElementById('Incremento3').value;
    const presupuesto = document.getElementById('Presupuesto').value;

    const datos9 = {
        fecha_proyeccion: fecha_proyeccion,
        cproyeccion: cproyeccion,
        tproyeccion: tproyeccion,
        demanda1: demanda1,
        precioventa1: precioventa1,
        venta1: venta1,
        incremento1: incremento1,
        demanda2: demanda2,
        precioventa2: precioventa2,
        venta2: venta2,
        demanda3: demanda3,
        precioventa3: precioventa3,
        venta3: venta3,
        incremento3: incremento3,
        presupuesto: presupuesto
    };
    alert('Información guardada')

    localStorage.setItem('datos9', JSON.stringify(datos9))
}

function guardar_act_po(){
    const actividad = document.getElementById('Actividad').value;
    const resumen = document.getElementById('ResumenA').value;
    const n_personas = document.getElementById('NumeroPersonasA').value;
    const tiempo = document.getElementById('TiempoA').value;
    const area = document.getElementById('area').value;

    const datos_act = {
        actividad: actividad,
        resumen: resumen,
        n_personas: n_personas,
        tiempo: tiempo,
        area: area
    }

    actividades.addActividad(datos_act);
    
    console.log(actividades);
    

    //actividades.push(datos_act);
    localStorage.setItem('datos_act',JSON.stringify(actividades));
    alert('Actividad guardada');
    //console.log(element);
}

function mostrar(){
    const storedUserData = localStorage.getItem('datos_act');
    const userData = JSON.parse(storedUserData);
    console.log(userData);
}