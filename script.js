const buttonAddTask= document.getElementById('addTask');

buttonAddTask.addEventListener('click',()=>{
    const put= document.getElementById('inputTitle');
    const input= document.getElementById('inputTask');
    const insert= document.getElementById('inputDate');
    const list= document.getElementById('taskList');
    const taskText= input.value.trim();   
    const titleText= put.value.trim(); 
    const dateText= insert.value.trim();

    const newItem = document.createElement('li'); 
    newItem.classList.add('p-4', 'rounded','shadow','flex','items-center', 'justify-between','bg-gray-200');
    
    const titleSpan = document.createElement('span');
    titleSpan.textContent = `Title: ${titleText}`
    titleSpan.classList.add('text-xl')

    const taskSpan = document.createElement('span');
    taskSpan.textContent = `Task: ${taskText}`
    
 
    const dateSpan = document.createElement('span');
    dateSpan.textContent = `Date: ${dateText}`
    dateSpan.classList.add('text-sm','text-gray-800')



    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.classList.add('m-3', )
    checkbox.addEventListener('change', () =>{
        titleSpan.classList.add('line-through')
        taskSpan.classList.add('line-through')
        dateSpan.classList.add('line-through')

    })

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('p-2', 'rounded','hover:bg-red-400','shadow-lg', 'font-semibold');
    deleteBtn.addEventListener('click', () =>{
        const list= document.getElementById('taskList');
        const task= event.target.parentElement;
        list.removeChild(task)
       
    })

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('flex','items-center');
    taskContainer.appendChild(checkbox)
    taskContainer.appendChild(taskSpan)
    
    newItem.appendChild(titleSpan);
    newItem.appendChild(dateSpan);
    newItem.appendChild(taskContainer);
    newItem.appendChild(deleteBtn);
    list.appendChild(newItem);

    input.value= '';
    put.value= '';
    insert.value= '';
    
})




    
