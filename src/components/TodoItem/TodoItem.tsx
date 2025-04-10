import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../../store/reducers/todoReducer'
import './TodoItemStyle.scss'

import unchecked from '../../svg/radio_unchecked.svg'
import greenCheck from '../../svg/checkmark-svgrepo-com.svg' 

interface ITodoItemProps {
  id: string,
  text: string,
  isActive: boolean
}

function TodoItem({ id, text, isActive }: ITodoItemProps) {
  const dispatch = useDispatch()

  return (
    <div className="todo-item">
      <img
        src={isActive ? unchecked : greenCheck}
        alt="toggle"
        className="todo-item__icon"
        onClick={() => dispatch(toggleTodo(id))}
      />
      <span className={isActive ? "todo-item__text" : "todo-item__text finished"}>
        {text}
      </span>
    </div>
  )
}

export default TodoItem
