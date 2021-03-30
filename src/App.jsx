import React, {useEffect, useState} from "react";

function under(e) {
  let el = e.target
  if(e.target.children.length > 0 ) el = e.target.querySelector('p')
  if(el.classList.contains('line-through')) {
    el.classList.remove('line-through')
  }else el.classList.add('line-through')
}
const check = () => {
  return (
    <p className="check">&#x2713;</p>
  )
}

function Todo(todo) {
  return (
    <div onClick={under} className="todo hover:bg-mauve-light text-gun-dark p-4 text-3xl bg-mauve flex items-center" key={todo.id}>
        <div className="check h-7 w-7 bg-citwhite-light mr-2"></div>
        <p className="">{todo.title}</p>
    </div>
  )
}


export default function App() {
  const [todo_items, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((response) => response.json())
      .then((json) => {
        let x = json.map(todo => Todo(todo))
        setTodos(x)
      })
  }, todo_items)

  return (
    <div className="App">
      <div className="todo-title bg-chetblue text-gun text-center font-bold py-4 rounded-t-lg mt-3">
        <p className="uppercase text-3xl">todo</p>
      </div>
      <div className="todo-holder flex-col">
        {todo_items}
      </div>
    </div>
  );
}