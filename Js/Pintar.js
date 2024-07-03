//document.body.onload = llamar_datos;

function llamar_datos(){
    const traer_datos = localStorage.getItem('datos');
    const llamar_r = JSON.parse(traer_datos);
    document.getElementById('Fecha').textContent = llamar_r.fecha_inicio;
    document.getElementById('Responsable').textContent = llamar_r.nombre_empresa;
}

function llamar_datos2(){
    const traer_datos = localStorage.getItem('datos');
    const llamar_r2 = JSON.parse(traer_datos);
    document.getElementById('Responsable').textContent = llamar_r2.nombre_empresa;
}
