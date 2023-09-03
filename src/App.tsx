import './App.css'
import InputField from './component/InputField'
import TodoList from './component/TodoList'
import {useState} from 'react'
import { Todo } from './model'


const App:React.FC = () => {

  const [todo,setTodo] = useState<string>('')
  const [todoList,setTodoList] = useState<Todo[]>([])


   const handleAdd = (e:React.FormEvent) =>{
      e.preventDefault()
      if(todo){
        setTodoList([...todoList,{id:Date.now(),todo,isDone:false}])
        localStorage.setItem('Todos',JSON.stringify([...todoList,{id:Date.now(),todo,isDone:false}]))
        setTodo('')
      }
   }
   console.log(todoList);
   

  return (
    <div className='container'>
      <div className='todoFormWrap'>
        <h1>Taskify</h1>
        <InputField  todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todoList={todoList} setTodoList={setTodoList}/>
      </div>
    </div>
  )
}

export default App
