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

//Etapa 0
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