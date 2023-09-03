
interface Props {
  todo : string,
  setTodo : React.Dispatch<React.SetStateAction<string>>,
  handleAdd : (e:React.FormEvent)=> void,
}

const InputField = ({todo,setTodo,handleAdd}:Props) => {
  return (
    <form onSubmit={handleAdd}>
       <input type="text" placeholder="Enter a Task" value={todo} onChange={(e)=>setTodo(e.target.value)} />
       <button type="submit">Add</button>
    </form>
  )
}

export default InputField