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

    let datos = JSON.parse(localStorage.getItem('datos')) || {};

    datos[fecha_inicio] = value;
    datos[nombre_empresa] = value;
    datos[resumen_empresa] = value;
    datos[objetivo_empresa] = value;
    datos[logo_empresa] = value;
    datos[costo_propuesta] = value;
    datos[tiempo_propuesta] = value;
    datos[sector_empresa] = value;
    datos[costo_sector] = value;
    datos[tiempo_sector] = value;
    datos[giro_empresa] = value;
    datos[costo_giro] = value;
    datos[tiempo_giro] = value;
    datos[pib_empresa] = value;
    datos[costo_pib] = value;
    datos[tiempo_pib] = value;
    datos[responsable_op] = value;
    datos[responsable_co] = value;
    datos[responsable_rh] = value;
    datos[responsable_tec] = value;
    datos[responsable_fi] = value;

    localStorage.setItem('datos', JSON.stringify(datos));

    console.log('Dato guardado en la memoria local');
}


//Etapa 1
document.addEventListener('DOMContentLoaded',()=>{
    const guardarEtapa0 = localStorage.getItem('Etapa0');
    if (guardarEtapa0) {
        document.getElementById('Etapa0').value = guardarEtapa0;
    }

    document.getElementById('inputForm').addEventListener('submit', function(event){
        event.preventDefault();
        const Etapa0 = document.getElementById('Etapa0').value;
        localStorage.setItem('Etapa0', Etapa0);
        alert('Información guardada');
    });
});


//Etapa 2
document.addEventListener('DOMContentLoaded',()=>{
    const guardarEtapa0 = localStorage.getItem('Etapa0');
    if (guardarEtapa0) {
        document.getElementById('Etapa0').value = guardarEtapa0;
    }

    document.getElementById('inputForm').addEventListener('submit', function(event){
        event.preventDefault();
        const Etapa0 = document.getElementById('Etapa0').value;
        localStorage.setItem('Etapa0', Etapa0);
        alert('Información guardada');
    });
});