// Array para guardar las tareas
let taskArray = [];

// Variable para contabilizar el número de tareas
let idTask = 0;

//  Función constructora Objeto tarea
function task(name){
    this.id = idTask++;
    this.name = name;
    this.done = false;
};

// Nombre de la tarea en #taskInput * Hoisting. La variable var nameOfTask está declarada más abajo, sin embargo no da ningún error puesto que Java Script "eleva su declaración a la parte de arriba."
taskName = document.getElementById('taskInput');


// Nombre de la tarea en #taskInput *
// El Scope de esta variable es global, puesto que se puede utilizar en todo el script incluso dentro de otras funciones.
var taskName;

// Obtenemos el ul donde se añadirán las tareas
const taskList = document.querySelector('.task-list');

// Obtenemos el boton + para añadir tarea
const addButton = document.getElementById('addTaskButton');

// Limpiar campo de #taskInput
function cleanNameOfTask(){
    taskName.value = '';
}
cleanNameOfTask();

// Comprobar que hay algo escrito en el campo del nombre de la tarea a ingresar
function fieldEmpty(){

    // Ejemplo de scope. El nombre de esta variable se ha usado en la función addTask()
    let input = false ;
   
    if (taskName.value == '') {
        input = true;
    }
    return input;
}

// Crear tarea
function makeTask(nameTask){
    const tarea = new task(nameTask);
    return tarea;
}

// Función para colocar las tareas en el documento
function addTask(idTarea){

    // Etiqueta li
    const li = document.createElement('li');

    // Etiqueta article
    const article = document.createElement('article');

    // Etiqueta span
    const span = document.createElement('span');
    span.textContent = '';

    // Etiqueta input
    const input = document.createElement('input');

    // Icono cubo basura
    const trashIcon = document.createElement('i');

    // tarea guarda la tarea coincidente con el índice de tarea que pasa como argumento el la función
    const tarea = taskArray.find((indice) => (indice.id == idTarea));

    // Agrego id de tarea para poder trabajar conjuntamente el input check, li e icono de la baura con su tarea correspondiente (id == idTarea)
    li.setAttribute('id', idTarea);
    trashIcon.setAttribute('id', idTarea);
    input.setAttribute('id', idTarea)

    // Añadir classes y atributos a los nuevos elementos que se crean
    input.setAttribute('type', 'checkbox'); 
    input.classList.add('task-checkbox');
    span.classList.add('task-text');
    trashIcon.setAttribute('class', 'fa fa-trash');

    // Poner nombre easignar el nombre de la tarea a el sapn para mostrarlo
    span.value = tarea.name;
    span.textContent = span.value;

    // Agregar elementos html 
    li.appendChild(article).appendChild(input);
    li.appendChild(article).appendChild(span);
    li.appendChild(trashIcon);
    taskList.appendChild(li); 
    
  
    // Asignamos un eventListener a cada elemento input checkbox que se crea
    input.addEventListener('click', () => {
      
      
        // Se comprueba si el checkbox está o no marcado y se establece el atributo task.done = true / false, según corresponda. También se modifican algunos estilos.
        if (input.checked) {
            span.style.color = 'red'
            span.style.textDecoration = 'line-through';
            span.style.textDecorationColor = 'black'
            tarea.done = true;
        } else {
            span.style.color = 'black'
            span.style.textDecoration = 'none';
            tarea.done = false;
        }
       
    });

    // Se agrega evnto click al icono del cubo de basura
    trashIcon.addEventListener('click', removeTask);

}

// AÑADIR TAREA
addButton.addEventListener('click', () => {
    if (fieldEmpty()) {
        alert('Por favor, pon nombre a la tarea');
    } else {
        
        const tarea = makeTask(taskName.value);

        // Ejemplo de coerción !taskArray.length. Al poner  not(!) convierte lo que deberia ser un 0 en un booleano (false)

        if (!taskArray.length) {
                taskArray.push(tarea);
                addTask(tarea.id);
                cleanNameOfTask();  
        } else {
           
            if (duplicatedTasdk(taskName.value)) {
                alert('Ya existe una tarea con esa descripción');
                cleanNameOfTask();
                
            } else {
                
                taskArray.push(tarea);
                addTask(tarea.id);
                cleanNameOfTask();  
            }        
        }
    }
})

// Borrar tarea
function removeTask(event){
   
    // trashId hace referencia al elemento que dispara el evento
    const trashId = event.target.parentElement;
   
    // Recordatorio: taskList es la id de la etiqueta <ul>
    const taskList = document.getElementById('taskList')

    if (taskList.hasChildNodes()) {
        // Borrar tarea del array de tareas
        taskArray.splice(trashId.id)

        // Borrar tarea de la pantalla
        taskList.removeChild(trashId)
    } 
    
}

// Función para comprobar que la tarea no esté ya añadida. Devuelve true / false
function duplicatedTasdk(nameNewTask) {
    
    //Ejemplo de coerción. Cadena no vacía devuelve true*
    const truth = 'cadena no vacia';
    let founded = 0;

    let longitud = taskArray.length;
    let i = 0;
   
    do {
        
        if (nameNewTask == taskArray[i].name) {
            //*
            founded = Boolean(truth);
        }
        i++;
    } while (i < longitud);
    
    return founded;
}