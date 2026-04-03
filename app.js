  let todos = JSON.parse(localStorage.getItem("todos")) || [];
                                                                                                                     
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));                                                            
  }                                      

  function render() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";                                                                                             
   
    todos.forEach((todo, index) => {                                                                                 
      const li = document.createElement("li");
      if (todo.done) li.classList.add("done");
                                                                                                                     
      li.innerHTML = `
        <input type="checkbox" ${todo.done ? "checked" : ""} onchange="toggleTodo(${index})" />                      
        <span>${todo.text}</span>                                                                                    
        <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
      `;                                                                                                             
      list.appendChild(li);              
    });                                                                                                              
  }
                                                                                                                     
  function addTodo() {                   
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (!text) return;
    todos.push({ text, done: false });                                                                               
    input.value = "";
    saveTodos();                                                                                                     
    render();                            
  }

  function toggleTodo(index) {
    todos[index].done = !todos[index].done;
    saveTodos();                                                                                                     
    render();
  }                                                                                                                  
                                         
  function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    render();
  }
                                                                                                                     
  // Allow Enter key to add todo
  document.addEventListener("DOMContentLoaded", () => {                                                              
    document.getElementById("todoInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") addTodo();                                                                              
    });
    render();                                                                                                        
  });                                                                      
