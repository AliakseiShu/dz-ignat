import React, { ChangeEvent,KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  onEnter: (e:KeyboardEvent<HTMLInputElement>) => void
  error: string
  totalUsers: number
}

function onEnter() {

}

const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
  const inputClass = s.error ? s.errorInput : s.input

  return(
    <div className={s.greeting}>
      <div>
        <input
          value={name}
          onChange={setNameCallback}
          className={inputClass}
          onKeyDown={onEnter}
          onBlur={setNameCallback}
        />
        <div className={s.error}>{error}</div>
        </div>
        <button onClick={addUser} className={s.button} disabled={!name}>add</button>
        <span className={s.count}>{totalUsers}</span>
      </div>
           )
      }

      export default Greeting
