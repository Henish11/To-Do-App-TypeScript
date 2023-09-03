import { Todo } from "../model"
import SingleTodo from "./SingleTodo"

interface Props{
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todoList,setTodoList} :Props) => {

  return (
    <div className="todoList">
        {
         todoList.map((item)=>{
              return <SingleTodo key={item.id} item={item} todoList={todoList} setTodoList={setTodoList}/>
         })   
        }
    </div>
  )
}

export default TodoList