/*document.addEventListener('DOMContentLoaded', () => {
    const savedNombreEmp = localStorage.getItem('NombreEmp');
    if (savedNombreEmp) {
        document.getElementById('NombreEmp').value = savedNombreEmp;
    }

    document.getElementById('inputForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const NombreEmp = document.getElementById('NombreEmp').value;
        localStorage.setItem('NombreEmp', NombreEmp);
        alert('Información guardada!');
    });
});*/

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
    alert('Información guardada!');

    localStorage.setItem('datos', JSON.stringify(datos));
}