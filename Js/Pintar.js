document.addEventListener('DOMContentLoaded', () => {
    const savedNombreEmp = localStorage.getItem('NombreEmp');
    if (savedNombreEmp) {
        document.getElementById('displayNombreEmp').textContent = `Nombre: ${savedNombreEmp}`;
    } else {
        document.getElementById('displayNombreEmp').textContent = 'Nombre no encontrado';
    }
});
