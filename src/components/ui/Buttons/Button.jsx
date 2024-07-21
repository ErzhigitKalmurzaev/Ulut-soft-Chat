import React from 'react'

const Button = ({ variant, children, onClick }) => {

    const VARIANTS = {
        signIn: {
            width: '100%',
            height: '42px',
            backgroundColor: '#1e3333',
            borderRadius: '8px',
            color: 'white',
            padding: '10px',
            fontSize: '14px',
            fontWeight: '500',
            ':hover': {
              backgroundColor: '#9ca4a4',
            } 
        },
        signUp: {
            width: '100%',
            height: '42px',
            backgroundColor: '#2f7070',
            borderRadius: '8px',
            color: 'white',
            padding: '10px',
            fontSize: '14px',
            fontWeight: '500'
        }
    }

  return (
    <button style={VARIANTS[variant]} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
