
const form = document.querySelector('#addHere');
const todo = document.querySelector('#todoList');
let todoArr = localStorage.getItem('todos') ?
JSON.parse(localStorage.getItem('todos')) : [];
let taskCount = 0;


form.addEventListener('submit', function(e) {
	  e.preventDefault();
    const newTask = document.createElement('li');
    const check = document.createElement('input');
    const deleteBtn = document.createElement('button');

    newTask.id = (++taskCount);

    check.type = 'checkbox';
    check.onchange = toggleTask;
    check.style.marginRight = '10px';

    deleteBtn.style.backgroundColor = 'red';
    deleteBtn.style.color = 'white';
    deleteBtn.style.borderRadius = '5px';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.innerText = 'Delete';

    todoArr.push(add.value);
    localStorage.setItem('todos', JSON.stringify(todoArr));
    newTask.innerText = add.value;
    add.value = '';
    todo.appendChild(newTask);
    newTask.prepend(check);  
    newTask.appendChild(deleteBtn);
	   

    deleteBtn.addEventListener('click', function(e) {
	   if (e.target.tagName === 'BUTTON') {
		  e.target.parentElement.remove();
	   
    }
  });
});



function toggleTask(){
  const task = document.getElementById(this.parentNode.id);
  if(this.checked)
  {
    task.style.textDecoration = 'line-through'; 
  }
  else
  {
    task.style.textDecoration = 'none';
  }
};

const allDel= document.querySelector('#deleteAll');
allDel.addEventListener('click', function(e) {
  e.preventDefault();
	if (e.target.tagName === 'BUTTON') {
		document.getElementById("todoList").innerHTML = "";
    localStorage.clear();
    todoArr = [];
}});

// let prevTodo = JSON.parse(localStorage.getItem('todos'));

//definitely sourced and put together this snippet of code from google...it renders mhe localstorage to the page
document.body.onload=()=>
{
    if(localStorage.getItem('todos')!=undefined)
    {
    todo.innerText = localStorage.todos;
    }
  };

    
  