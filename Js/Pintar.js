function llamar_datos(){
    const llamar_dato = JSON.parse(localStorage.getItem('datos'));

    document.getElementById('ejemplo').textContent = llamar_dato.fecha_inicio;
}
