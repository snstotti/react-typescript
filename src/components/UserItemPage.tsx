import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import UserItem from './UserItem'
import { useParams, useNavigate } from 'react-router-dom'


const UserItemPage: FC = () => {


    const [user, setuser] = useState<IUser | null>(null)

    const params = useParams()
    const navigate = useNavigate()
  
    useEffect(() => {
      fetchUser('https://jsonplaceholder.typicode.com/users/' + params.id )
  
    }, [])
  
    async function fetchUser(url: string) {
      try {
        const response = await axios.get<IUser>(url)
        setuser(response.data)
      } catch (error) {
        alert(error)
      }
    }
  
   

  return (
    <div>
        <button onClick={()=>navigate('/users')}>Back</button>
        <h2>Страница пользователя {user?.name}</h2>
        <div className="">
            {user?.email}
        </div>
        <div className="">
            {user?.address.city} {user?.address.street} {user?.address.zipcode}
        </div>
    </div>
  )
}

export default UserItemPage