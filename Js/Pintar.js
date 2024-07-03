//document.body.onload = llamar_datos;

function llamar_datos(){
    const traer_datos = localStorage.getItem('datos_act');
    const llamar_r = JSON.parse(traer_datos);
    document.getElementById('Fecha').textContent = llamar_r[0].area;
    document.getElementById('Responsable').textContent = llamar_r[1].area;
    document.getElementById('CostoActividad').textContent = llamar_r[2].area;


}

function llamar_datos2(){
    const traer_datos = localStorage.getItem('datos');
    const llamar_r2 = JSON.parse(traer_datos);
    document.getElementById('Responsable').textContent = llamar_r2.nombre_empresa;
}
