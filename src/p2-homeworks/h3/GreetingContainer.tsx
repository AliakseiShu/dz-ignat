import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('') // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    const trimmedName = e.currentTarget.value.trim()
    if (trimmedName) {
      setName(trimmedName)
      setError('')
    } else
      setName('') // need to fix
    setError('error')
  }
  const addUser = () => {
    addUserCallback(name)
    alert(`Hello ${name} !`) // need to fix
  }
  const onEnter = (e: KeyboardEvent<HTMLInputElement>)=> {
    if (e.key === 'Enter' && name) {
      addUser()
      setName('')
    }
  }

  const totalUsers = users.length

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      onEnter={onEnter}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
