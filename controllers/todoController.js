const todos = [];


exports.addTodo = function (req,res){
  const todo = {
    "id": Date.now() % 100,
    "title": "Hello",
    "description": "you have to say hello",
  }
  todos.push(todo);
  const obj = {
    error: false,
    message: "A todo created",
    data: todo
  };
  res.json(obj);
}

exports.getSingleTodo = function (req,res){
  req.params.todoID
  for(let i = 0 ; i< todos.length; i++){
    if(todos[i].id == req.params.todoID){
      const obj = {
        error: false,
        message: "A found",
        data: todos[i]
      };
      res.json(obj);
    }
  }


  const obj = {
    error: false,
    message: "No todo found with ID "+req.params.todoID
  };
  res.json(obj);
}

exports.getTodos = function (req,res){
  const obj = {
    error: false,
    message: "",
    data: todos
  };
  res.json(obj);
}
