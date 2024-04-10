

let tasks = [];

const renderTasks = () => {
   console.log('This is js');
   const taskList = document.getElementById('taskList');
   taskList.innerHTML = '';

   tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task.name;
      const btn = document.createElement('button');
      btn.innerHTML='<div id="btn2">delete</div>';
      btn.className='delete-button';
      btn.onclick = ()=>deleteTask(index);

      li.appendChild(btn);
      taskList.appendChild(li);
   })
}


   
const addtask =() => {
         const name = document.getElementById('taskInput');
         if(name !==''){
            const task ={
               name:name.value,
               date:new Date()
            }
            tasks.push(task);
            renderTasks();
         }
      }   

      const deleteTask =(index) =>{
         tasks.splice(index , 1);
         renderTasks();
      }

      const countTasks = ()=>{
         alert("total number of tasks is:" +tasks.length)
      }
   