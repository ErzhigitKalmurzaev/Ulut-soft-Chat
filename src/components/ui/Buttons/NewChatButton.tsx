import { SquarePen } from 'lucide-react'
import React from 'react'
import './index.css'

const NewChatButton = () => {
  return (
    <button className='new-chat'>
      Новый чат
      <SquarePen size={18} color='white'/>
    </button>
  )
}

export default NewChatButton
