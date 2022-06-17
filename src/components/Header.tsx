import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import imgUrl from "../myphoto.jpg"
import Image from "./Image";
import {Email, LinkedIn, LocationOn, Phone, Telegram} from '@mui/icons-material';

interface ILinkedStack {
  children: JSX.Element[]
}

const LinkedStack: React.FC<ILinkedStack> = ({children}) => {
  return (
    <Stack direction={'row'} spacing={2} alignItems={'center'}>
      {children}
    </Stack>
  )
};

const Header: React.FC = () => {
  return (
    <Stack spacing={7} direction={'row'}>
      <Box sx={{borderRadius: 2, overflow: 'hidden', width: 150, height: 150}}>
        <Image src={imgUrl} alt={'user'}/>
      </Box>
      <Box>
        <Stack spacing={2}>
          <Box>
            <Typography variant={'h6'}>Full Stack Developer</Typography>
            <Typography variant={'h3'}>Mykola Liemiekhov</Typography>
          </Box>
          <Stack>
            <LinkedStack>
              <Phone/>
              <a href="tel:+380636536097">
                <Typography variant={'body2'}>+380636536097</Typography>
              </a>
            </LinkedStack>

            <LinkedStack>
              <Email/>
              <a href="mailto:nicklemster@gmail.com">
                <Typography variant={'body2'}>nicklemster@gmail.com</Typography>
              </a>
            </LinkedStack>

            <LinkedStack>
              <LocationOn/>
              <Typography variant={'body2'}>Cherkasy, Ukraine</Typography>
            </LinkedStack>

            <LinkedStack>
              <LinkedIn/>
              <a href="https://www.linkedin.com/in/nikolay-liemiekhov-270520180/">
                <Typography variant={'body2'}>Nikolay Liemiekhov</Typography>
              </a>
            </LinkedStack>

            <LinkedStack>
              <Telegram/>
              <a href="https://t.me/nicklemster">
                <Typography variant={'body2'}>@nicklemster</Typography>
              </a>
            </LinkedStack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Header;
