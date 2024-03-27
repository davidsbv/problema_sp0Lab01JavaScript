// Variable para contabilizar el número de tareas
let idTask = 0;

// Array para guardar las tareas
let taskArray = [];

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
    return tarea;
}

// Función para colocar las tareas en el documento
function refreshTasks(){


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


    for (let i = 0; i < taskArray.length; i++) {
       
        li.setAttribute('id', i);
        trashIcon.setAttribute('id', i);
        input.setAttribute('id', i)
        input.setAttribute('type', 'checkbox'); 
        input.classList.add('task-checkbox');
        span.classList.add('task-text');
        trashIcon.setAttribute('class', 'fa fa-trash');
        console.log(span.value = taskArray[i].name);
        span.value = taskArray[i].name;
        span.textContent = span.value;
        li.appendChild(article).appendChild(input);
        li.appendChild(article).appendChild(span);
        li.appendChild(trashIcon);
        taskList.appendChild(li); 

        console.log(input)
        
        input.addEventListener('click', (event) => {
            const target = event.target;
            if (input.checked) {
                span.style.color = 'red'
                span.style.textDecoration = 'line-through';
                taskArray[target.id].done = true;
            } else {
                span.style.color = 'black'
                span.style.textDecoration = 'none';
                taskArray[target.id].done = false;
            }
            console.log(taskArray[i])
        });

        trashIcon.addEventListener('click', removeTask);

        // const checked = input.checked;
        // console.log(checked);

    }

    // input.setAttribute('type', 'checkbox'); 
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
        taskArray.push(makeTask(taskName.value));
        refreshTasks();
        //refreshTasksNumber();
        cleanNameOfTask();  
        
    }
})

// Borrar tarea
function removeTask(event){
    //const idTrash = document.getElementsByClassName('fa fa-trash')
    const trashId = event.target;
    const li = Array.from(document.querySelectorAll('li'))
    
    //taskList.removeChild(trashId);
    //refreshTasks();
     console.log(trashId)
     console.log(li)
    
    
}