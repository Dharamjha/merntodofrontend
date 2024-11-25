import { useEffect, useState } from 'react'
import Todo from './components/Todo'
import { addtodo, getAlltodo, updatetodo, deletetodo } from './utils/Handleapi'


function App() {

  const [todo, setTodo] = useState([])
  const [text, setText] = useState("")
  const [isupdating, setIsupdating] = useState(false)
  const[todoid, setTodoid] = useState("")

  useEffect(() => {
        getAlltodo(setTodo)
  },[])

  const updatemode = (_id,text) => {
       setIsupdating(true)
       setText(text)
       setTodoid(_id)
  }


  return (
   <div className='App'>
      <div className="container">

    <h1>ToDo App</h1>
    <div className="top">
      <input type="text" placeholder='Add TodoS...' value={text} onChange={(e) => setText(e.target.value)} />


      <div className="add" 
      onClick={ isupdating ? 
      () => updatetodo(todoid,text,setTodo,setText,setIsupdating) :  () => addtodo (text,setText,setTodo)}>{isupdating ? "Update" : "Add"}</div>
    </div>
    <div className="list">

      {todo.map((item) => <Todo key={item._id} text={item.text} updatemode={() => updatemode(item._id, item.text)} 
        deletetodo={() => deletetodo(item._id, setTodo)}
        />)}


    </div>
      </div>
   </div>
  )
}

export default App
