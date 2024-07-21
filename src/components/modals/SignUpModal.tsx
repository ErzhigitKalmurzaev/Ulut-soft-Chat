'use client'
import { Box, Modal, TextField } from '@mui/material'
import React, { useState } from 'react';
import Button from '../ui/Buttons/Button';
import './index.css';
import { SignUp } from '@/types/auth/auth';
import authService from '@/services/api/auth';

const SignUpModal = ({open, handleClose}: {open: boolean, handleClose: () => void}) => {

  const [values, setValues] = useState<SignUp>({
    email: '',
    password: '',
    repeatPassword: ''
  });

  const submitData = () => {
    try {
      authService.signUp(values).then(res => {
        handleClose();
      })
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
        <Box sx={{ width: '400px', height: '450px', background: '#1e3333', borderRadius: '10px', padding: '20px' }}>
            <h2 className='text-xl font-semibold mt-8 text-center'>Зарегестрироваться</h2>
            <form className='flex flex-col items-center py-7 gap-6'>
                <TextField 
                  label="Email"
                  variant="standard" 
                  value={values.email}
                  type='email'
                  required={true}
                  onChange={(e) => setValues({...values, email: e.target.value})}
                  className='input-block'
                  color='secondary'
                />
                <TextField 
                  label="Пароль" 
                  variant="standard" 
                  value={values.password}
                  type='password'
                  required={true}
                  onChange={(e) => setValues({...values, password: e.target.value})}
                  className='input-block'
                  color='secondary'
                />
                <TextField 
                  id="standard-basic" 
                  label="Повторите пороль" 
                  variant="standard" 
                  value={values.repeatPassword}
                  type='password'
                  required={true}
                  error={values.repeatPassword !== values.password}
                  onChange={(e) => setValues({...values, repeatPassword: e.target.value})}
                  className='input-block'
                  color='secondary'
                  sx={{ mb: '20px' }}
                />
                <Button variant='signUp' onClick={submitData}>Зарегестрироваться</Button>
            </form>
        </Box>
    </Modal>
  )
}

export default SignUpModal
