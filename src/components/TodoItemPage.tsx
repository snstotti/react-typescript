import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ITodo } from '../types/types'

const TodoItemPage: FC = () => {

    const [todo, settodo] = useState<ITodo | null>(null)

    const params = useParams()
    const navigate = useNavigate()
  
    useEffect(() => {
        fetchTodo('https://jsonplaceholder.typicode.com/todos/' + params.id )
  
    }, [])
  
    async function fetchTodo(url: string) {
      try {
        const response = await axios.get<ITodo>(url)
        settodo(response.data)
      } catch (error) {
        alert(error)
      }
    }

  return (
      <div>
          <button onClick={() => navigate("/todos")}>Back</button>
          <div className="">
          {todo?.id}. {todo?.title}
          </div>
          <div className="">
              {todo?.completed?"Выполнено":"Невыпонено"}
          </div>
      </div>
  )
}

export default TodoItemPage