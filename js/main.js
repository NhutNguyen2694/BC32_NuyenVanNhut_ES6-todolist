getTodoList()

function getTodoList(){
    apiGetTodoList()
    .then((response) => {
        console.log(response.data);
        let todoList = response.data.map((todo) => {
            return new Todo(todo.id, todo.name, todo.check)
        })
        // Hiển thị
        let newTodoList=[...todoList]
        newTodoList = newTodoList.filter((todo)=> {
            return todo.check===true;
        })
        displayTodo(newTodoList);
        todoList = todoList.filter((todo)=>{
            return todo.check===false
        })
        display(todoList)
    })
    .catch((error) => {
        console.log(error);
    });
}
getTodoList()
function getTodoListAZ(){
    apiGetTodoList()
    .then((response) => {
        console.log(response.data);
        let todoList = response.data.map((todo) => {
            return new Todo(todo.id, todo.name, todo.check)
        })
        let newTodoList=[...todoList]
        newTodoList = newTodoList.filter((todo)=> {
            return todo.check===true;
        })
        newTodoList = newTodoList.sort(function(a,b){return a.name - b.name});
        newTodoList.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });

        displayTodo(newTodoList);
        todoList = todoList.filter((todo)=>{
            return todo.check===false
        })
        todoList = todoList.sort(function(a,b){return a.name - b.name});

        todoList.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });

        display(todoList)
    })
    .catch((error) => {
        console.log(error);
    });
}
function getTodoListZA(){
    apiGetTodoList()
    .then((response) => {
        console.log(response.data);
        let todoList = response.data.map((todo) => {
            return new Todo(todo.id, todo.name, todo.check)
        })
        let newTodoList=[...todoList]
        newTodoList = newTodoList.filter((todo)=> {
            return todo.check===true;
        })
        newTodoList = newTodoList.sort(function(a,b){return b.name - a.name});
        newTodoList.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase(); 
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
            return 0;
          });
        displayTodo(newTodoList);
        todoList = todoList.filter((todo)=>{
            return todo.check===false
        })
        todoList = todoList.sort(function(a,b){return b.name - a.name});
        todoList.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase(); 
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
            return 0;
          });
        display(todoList)
    })
    .catch((error) => {
        console.log(error);
    });
}
function addTodo(todo){
    apiAddTodo(todo)
    .then(() => {
        getTodoList();
    })
    .catch((error) => {
        console.log(error);
    })
}

function deleteTodo(todoID){
    apiDeleteTodo(todoID)
    .then(() => {
   
        getTodoList();
    })
    .catch((error) => {
        console.log(error);
    })
}

function updateTodo(todoID, todo){
    apiUpdateTodo(todoID, todo)
    .then(() => {
        getTodoList();
    })
    .catch ((error) => {
        console.log(error);
    })
}

function display(todoList){
    let output = todoList.reduce((result, todo, index)=> {
        return result + `
        <li> ${todo.name}
        <div class="buttons">
            <button class="remove">
                <i class="fa-solid fa-trash-can" data-type="delete" data-id="${todo.id}"></i>
            </button>
            <button class="complete">
                <i class="fa-regular fa-circle-check" data-type="complete" data-id="${todo.id}"></i>
            </button>
        </div>
    </li>`
    },"") 
    dom('#todo').innerHTML = output
    
}

function displayTodo(todoListCheck){
    let output = todoListCheck.reduce((result, todo, index)=> {
        return result + `
        <li> ${todo.name}
        <div class="buttons">
            <button class="remove">
                <i class="fa-solid fa-trash-can" data-type="delete" data-id="${todo.id}"></i>
            </button>
            <button class="complete">
                <i class="fa-regular fa-circle-check" data-type="complete" style="color:#25b99a" data-id="${todo.id}"></i>
            </button>
        </div>
    </li>`
    },"")  
    dom('#completed').innerHTML = output
}


dom("#addItem").addEventListener("click", () => {
    let id = dom("#maTodo").value
    let name = dom("#newTask").value;
    let check = false;
    let todo = new Todo(null, name, check)
    addTodo(todo)
});

dom(".card__todo").addEventListener("click", (evt) => {
    let id = evt.target.getAttribute("data-id");
    let elType = evt.target.getAttribute("data-type");

    if(elType === "delete"){
        deleteTodo(id);}
     else if(elType === "complete"){
        
        apiGetTodoById(id)
        .then((response) =>{
            let todo = response.data;
            todo.check = true;
            updateTodo(id, todo)
        })
        .catch((error) => {
            console.log(error);
        });
    }
    });
dom("#two").addEventListener("click", (evt) => {
    getTodoListAZ()
    
})

dom("#three").addEventListener("click", (evt) =>{
    getTodoListZA()
})
function dom(selector){
  return  document.querySelector(selector)
}