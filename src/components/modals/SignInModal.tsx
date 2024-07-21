'use client'
import { Box, Modal, TextField } from '@mui/material'
import React, { useState } from 'react';
import Button from '../ui/Buttons/Button';
import './index.css';
import { SignIn } from '@/types/auth/auth';
import GoogleButton from "react-google-button";

const getDeviceInfo = () => {
  let device_id = localStorage.getItem('device_id');
  let device_name = localStorage.getItem('device_name');

  if (!device_id) {
    device_id = 'device-' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('device_id', device_id);
  }

  if (!device_name) {
    device_name = navigator.userAgent; // Можно использовать User Agent как device_name
    localStorage.setItem('device_name', device_name);
  }

  return { device_id, device_name };
};

const SignInModal = ({open, handleClose}: {open: boolean, handleClose: () => void}) => {

  const { device_id, device_name } = getDeviceInfo();

  const [values, setValues] = useState<SignIn>({
    email: '',
    password: ''
  });
  console.log(device_id, device_name)
  const onGoogleLoginSuccess = () => {
    const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
    const REDIRECT_URI = 'auth/api/login/google/';
  
    const scope = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' ');
  
    const params = {
      response_type: 'code',
      client_id: "438232002490-dg7fkuu79idbm7tbs1m98gouub007bbl.apps.googleusercontent.com",
      redirect_uri: `http://192.168.126.115:8000/${REDIRECT_URI}`,
      prompt: 'select_account',
      access_type: 'offline',
      scope,
      state: JSON.stringify({ device_id, device_name })
    };
  
    const urlParams = new URLSearchParams(params).toString();
    // console.log(`${GOOGLE_AUTH_URL}?${urlParams}`)
    window.location.href = `${GOOGLE_AUTH_URL}?${urlParams}`;
  };

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
        <Box sx={{ width: '400px', height: '400px', background: '#1e3333', borderRadius: '10px', padding: '20px' }}>
            <h2 className='text-xl font-semibold mt-8 text-center'>Войти</h2>
            <form className='flex flex-col items-center py-7 gap-6'>
                <GoogleButton onClick={onGoogleLoginSuccess} label="Sign in with Google"/>
            </form>
        </Box>
    </Modal>
  )
}

export default SignInModal
