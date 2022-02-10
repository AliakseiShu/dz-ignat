import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}
const Message = (props: MessagePropsType) => {
  return (
    <div className={s.message}>
      <img src={props.avatar}/>
      <div className={s.insideMessage}>
        <h3 className={s.name}>{props.name}</h3>
        <p className={s.text}>{props.message}</p>
        <p className={s.time}>{props.time}</p>
      </div>
    </div>
  )
}

export default Message
