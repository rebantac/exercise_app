import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';


import Logo from '../assets/images/n2logo2.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4' className='footer-container'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt="logo" width='50px' height='50px' />

        <Typography variant='h6' pb='40px' mt='20px'>
          2022 Rebanta Chakraborty All rights reserved
        </Typography>

        <p className='icons'>
          <a href='https://www.instagram.com/_mr_meat_ball_/'><AiFillInstagram /></a>

          <a href='https://www.linkedin.com/in/rebanta-chakraborty2002/'><AiFillLinkedin /></a>

          <a href='https://github.com/rebantac/exercise_app'><AiFillGithub /></a>
        </p>
      </Stack>
    </Box>
  )
}

export default Footer