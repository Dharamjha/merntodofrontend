import axios from 'axios'

const baseurl = "https://merntodoo-backend.onrender.com"

const getAlltodo = (settodo) => {
    axios.get(baseurl)
    .then(({data}) => {
        console.log('data --->', data);
        settodo(data)
        
    })
}

const addtodo = (text, setText, setTodo) => {
  axios
  .post(`${baseurl}/save`, {text})
  .then((data) => {
    console.log(data);
    setText("")
    getAlltodo(setTodo)
  })
  .catch((err) => console.log(err))

}

const updatetodo = (todoid, text, setTodo, setText, setIsupdating) => {
  axios
  .post(`${baseurl}/update`, {_id: todoid, text})
  .then((data) => {
    setText("")
    setIsupdating(false)
    getAlltodo(setTodo)
  })
  .catch((err) => console.log(err))
}

const deletetodo = (_id, setTodo) => {
  axios
  .post(`${baseurl}/delete`, {_id})
  .then((data) => {
    console.log(data)
    getAlltodo(setTodo)
  })
  .catch((err) => console.log(err))
}

export{getAlltodo, addtodo, updatetodo, deletetodo}