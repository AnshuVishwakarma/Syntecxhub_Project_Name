// const inputBox=document.getElementById("input-box")
// const listContainer=document.getElementById("list-container")
// function addTask(){
//     if(inputBox.value===''){
//         alert("you must writing something")
//     }else{
//         let li=document.createElement("li")
//         li.innerHTML=inputBox.value  
//         listContainer.appendChild(li) 
//     }
//     inputBox.value===''
// }

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTask() {
      const taskInput = document.getElementById("input-box");
      const text = taskInput.value.trim();

      if (text === "") {
        alert("Please enter a task!");
        return;
      }

      tasks.push({ text, completed: false });
      saveTasks();
      taskInput.value = "";
      renderTasks();
    }

    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    }

    function renderTasks() {
      const taskList = document.getElementById("list-container");
      taskList.innerHTML = "";

      tasks.forEach((task, index) => {
          const li = document.createElement("li");
          li.className = task.completed ? "completed" : "";

          li.innerHTML = `
            <span>${task.text}</span>
            <div class="actions">
              <button class="complete" onclick="toggleTask(${index})"><i class="bi bi-check-circle"></i></button>
              <button class="delete" onclick="deleteTask(${index})"><i class="bi bi-trash3"></i></button>
            </div>
          `;

        taskList.appendChild(li);
      });
    }

    renderTasks();

    // 

    // allow adding task with Enter key
    const taskInputEl = document.getElementById("input-box");
    taskInputEl.addEventListener('keydown', function(e){
      if(e.key === 'Enter') addTask();
    });