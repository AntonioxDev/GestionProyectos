function llamar_datos(){
    const llamar_dato = JSON.parse(localStorage.getItem('datos'));

    document.getElementById('NombreEmpresa').textContent = llamar_dato.nombre_empresa;
}
