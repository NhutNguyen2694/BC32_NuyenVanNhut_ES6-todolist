function apiGetTodoList() {
    return axios({
           url: "https://630ef0cd498924524a822a4c.mockapi.io/todolist",
           method: "GET",   
       });
   }

   function apiAddTodo(todo) {
    return axios({
           url: "https://630ef0cd498924524a822a4c.mockapi.io/todolist",
           method: "POST",
           data: todo,
       });
   }

   function apiDeleteTodo(todoID) {
    return axios({
           url: `https://630ef0cd498924524a822a4c.mockapi.io/todolist/${todoID}`,
           method: "DELETE",
       });
   }

   function apiGetTodoById(todoID) {
    return axios({
           url: `https://630ef0cd498924524a822a4c.mockapi.io/todolist/${todoID}`,
           method: "GET",
       });
   }

   function apiUpdateTodo(todoID, todo) {
    return axios({
           url: `https://630ef0cd498924524a822a4c.mockapi.io/todolist/${todoID}`,
           method: "PUT",
           data: todo,
       });
   }