import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { ITodo } from '../types/types'
import List from './List'
import TodoItem from './TodoItem'
import { useNavigate } from 'react-router-dom'


const TodosPage: FC = () => {

    const [todos, settodos] = useState<ITodo[]>([])
    const navigate = useNavigate()

  useEffect(() => {
    
    fetchTodos('https://jsonplaceholder.typicode.com/todos?_limit=10')
  }, [])

  
  async function fetchTodos(url: string){
    try {
      const response = await axios.get<ITodo[]>(url)
      settodos(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return <List items={ todos } renderItem={(todo: ITodo)=> <TodoItem onClick={()=>navigate("/todos/" + todo.id)} todo={todo} key={todo.id} />} />
}

export default TodosPage