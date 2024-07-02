document.addEventListener('DOMContentLoaded', () => {
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
});