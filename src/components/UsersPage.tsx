import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import List from './List'
import UserItem from './UserItem'
import { useNavigate } from 'react-router-dom'


const UsersPage: FC = () => {

  const [users, setusers] = useState<IUser[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers('https://jsonplaceholder.typicode.com/users')

  }, [])

  async function fetchUsers(url: string) {
    try {
      const response = await axios.get<IUser[]>(url)
      setusers(response.data)
    } catch (error) {
      alert(error)
    }
  }

  // console.log(navigate("/users/" +2))

  return <List items={users} renderItem={(user: IUser) => <UserItem onClick={()=>navigate("/users/" + user.id)} user={user} key={user.id} />} />
}

export default UsersPage