// Array para guardar las tareas
let taskArray = [];

// Variable para contabilizar el número de tareas
let idTask = 0;
//  Función constructora Obeto tarea
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
    if (taskName.value == '') {
        return true;
    } else {
        return false;
    }
}

// Crear tarea
function makeTask(nameTask){
    const tarea = new task(nameTask);
    console.log('id arrayTareas' + tarea.id )
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

    let index = taskArray.at(-1);


    // li.setAttribute('id', index.id);
    // trashIcon.setAttribute('id', index.id);
    // Agrego id de tarea para poder trabajar conjuntamente el input check con su tarea.done correspondiente
    input.setAttribute('id', idTarea)
    input.setAttribute('type', 'checkbox'); 
    input.classList.add('task-checkbox');
    span.classList.add('task-text');
    trashIcon.setAttribute('class', 'fa fa-trash');
    span.value = index.name;
    console.log('span.value '+span.value)
    span.textContent = span.value;
    li.appendChild(article).appendChild(input);
    li.appendChild(article).appendChild(span);
    li.appendChild(trashIcon);
    taskList.appendChild(li); 

  
    console.log('idTarea ' +idTarea);
    input.addEventListener('click', (event) => {
        const target = event.target;
        
        if (input.checked) {
            span.style.color = 'red'
            span.style.textDecoration = 'line-through';
            span.style.textDecorationColor = 'black'
            taskArray[target.id].done = true;
        } else {
            span.style.color = 'black'
            span.style.textDecoration = 'none';
            taskArray[target.id].done = false;
        }
        console.log( target)
        console.log('target.id '+target.id)
        console.log('indice utlimo ' + index.id)
        console.log('taskArray ' + taskArray[index.id].id)
    });

    trashIcon.addEventListener('click', removeTask);

    // const checked = input.checked;
    // console.log(checked);

    input.setAttribute('type', 'checkbox'); 
    // input.classList.add('task-checkbox');
    // span.classList.add('task-text');
    // trashIcon.setAttribute('class', 'fa fa-trash');
    // console.log(span.value = (taskArray.at(-1)).name);
    // span.textContent = span.value;
    // li.appendChild(article).appendChild(input);
    // li.appendChild(article).appendChild(span);
    // li.appendChild(trashIcon);
    // taskList.appendChild(li);
}

// Añadir tarea
addButton.addEventListener('click', () => {
    if (fieldEmpty()) {
        alert('Por favor, pon nombre a la tarea');
    } else {
        let tarea = makeTask(taskName.value);
        taskArray.push(tarea);
        addTask(tarea.id);
        //addTaskNumber();
        cleanNameOfTask();  
        console.log('añadiendo')
        
    }
})

// Borrar tarea
function removeTask(event){
    //const idTrash = document.getElementsByClassName('fa fa-trash')
    //const li = Array.from(document.querySelectorAll('li'))

    // Elemnto que dispara el evento
    const trashId = event.target.parentElement;
    //const ul = document.querySelectorAll('li')
    const taskList = document.getElementById('taskList')
    console.log('trasId' + trashId.id)
    if (taskList.hasChildNodes()) {
        taskArray.splice(trashId.id)
        //taskList.removeChild(taskList.children[trashId.id])
        taskList.removeChild(trashId)
        refreshTaskLenght();
        //addTask();
    } 
    
   
    // taskList.removeChild(li.id = trashId);
    
   
   // console.log(trashId)
     console.log(trashId.id)
    //  console.log(li)
    
    
}

function removeAll() {
    const taskList = document.getElementById("taskList");
    while (taskList.hasChildNodes()) {
      taskList.removeChild(taskList.firstChild);
      refreshTaskLenght();
    
    }
  }

  function refreshTaskLenght() {
    idTask = (taskArray.length);
  }

//   function duplicatedTasdk(newTask) {
    
//     taskArray.forEach(element) =>{
//         if () {
            
//         } else {
            
//         }
//     }

//   }