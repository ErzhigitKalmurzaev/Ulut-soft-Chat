import React from 'react'
import { ArrowUp } from 'lucide-react';
import './index.css'

const ChatInput = ({
  value,
  setValue,
  sendMessage,
}) => {

  const keyDown = (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
  }

  return (
    <div className='wrapper w-full flex rounded-xl'>
      <input 
        type="text"
        placeholder='Суроонузду бериниз'
        value={value}
        className='input'
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={keyDown}
      />
      <button 
        style={{backgroundColor: value?.length > 0 ? 'white' : '#676767'}}
        onClick={sendMessage}
      >
        <ArrowUp size={25} color='#2f2f2f' />
      </button>
    </div>
  )
}

export default ChatInput
