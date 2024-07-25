let tasks = [];

const buttonAddTask= document.getElementById('addTask');

const calendarIcon = document.getElementById('calendar');
const calendarModal = document.getElementById('calendarModal');
calendarIcon.addEventListener('click', () =>{
    flatpickr(calendarIcon).open();
})

//localstorage

function saveTasks (){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function loadTasks() {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks){
        tasks= JSON.parse(storedTasks); 
        tasks.map ( (task) => {
         renderTasks(task); 
        })
       
    }
}

loadTasks();

buttonAddTask.addEventListener('click',() =>{
    const taskTitleInput= document.getElementById('inputTitle');
    const input= document.getElementById('inputTask');
    const insert= document.getElementById('inputDate');
    
    const taskImageInput = document.getElementById('taskImage');
    const taskText= input.value.trim();   
    const taskTitle= taskTitleInput.value.trim(); 
    const dateText= insert.value.trim();
    const taskImage = taskImageInput.files[0];
    

    if(taskText === '' || taskTitle === '' || dateText === '' || !taskImage){
        alert ('Enter all task details')
        return 
    }
    const reader = new FileReader();
    reader.onload = function (event) {
      const taskImageUrl = event.target.result

//object 
      let myTask = {
        title: taskTitle,
        description: taskText,
        date: dateText,
        image: taskImageUrl
    }

    tasks.push(myTask);
    saveTasks();
    renderTasks(myTask);


    input.value= '';
    taskTitleInput.value= '';
    insert.value= '';
    taskImageInput.value= '';
    
    reader.readAsDataURL(taskImage);
    }

   
})

   


function renderTasks(task) {
    const list= document.getElementById('taskList');
    const newItem = document.createElement('li'); 
    newItem.classList.add('w-full','h-full','rounded-lg','shadow-lg','grid','items-center', 'justify-between','bg-gray-200');
    
    const titleSpan = document.createElement('span');
    titleSpan.textContent = `Title: ${task.title}`
    titleSpan.classList.add('text-lg')

    const taskSpan = document.createElement('span');
    taskSpan.textContent = `Task: ${task.description}`
    taskSpan.classList.add('text-lg')
 
    const dateSpan = document.createElement('span');
    dateSpan.textContent = `Date: ${new Date(task.date).toLocaleDateString()}`
    dateSpan.classList.add('text-lg')

    const imageElement = document.createElement('img');
    imageElement.classList.add('w-full', 'h-auto', 'mt-3')
    imageElement.src = task.image;
    
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.classList.add('m-3')
    checkbox.addEventListener('change', () =>{
        titleSpan.classList.add('line-through')
        taskSpan.classList.add('line-through')
        dateSpan.classList.add('line-through')

    })

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('p-2','rounded-md','hover:bg-red-400','shadow-lg', 'font-semibold');
    deleteBtn.addEventListener('click', () =>{
        const list= document.getElementById('taskList');
        const task= event.target.parentElement;
        list.removeChild(task)
       
    })

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('flex','items-center','w-full');
    taskContainer.appendChild(checkbox)
    taskContainer.appendChild(taskSpan)

   
    newItem.appendChild(titleSpan);
    newItem.appendChild(dateSpan);
    newItem.appendChild(taskContainer);
    newItem.appendChild(imageElement);
    newItem.appendChild(deleteBtn);
    list.appendChild(newItem);

}
    






    
