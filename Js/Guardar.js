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

//Propuest
document.addEventListener('DOMContentLoaded', () => {
    // Obtener los datos guardados en el localStorage
    let guardardatos = JSON.parse(localStorage.getItem('fromData')) || []

    // Llenar los campos del formulario con los datos guardados
    guardardatos.forEach(data => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = data.value;
        input.id = data.id;
        document.getElementById('inputForm').appendChild(input);
    });

    // Agregar el evento de envío del formulario
    document.getElementById('inputForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const formData = Array.from(document.querySelectorAll('#inputForm input')).map(input => ({
            id: input.id,
            value: input.value
        }));

        // Guardar los datos en el localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('¡Información guardada!');
    });

    // Acceder a los datos guardados
    const accessData = () => {
        const savedData = JSON.parse(localStorage.getItem('formData')) || [];
        console.log(savedData);
    };

    // Llamar a la función para acceder a los datos
    accessData();
});


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