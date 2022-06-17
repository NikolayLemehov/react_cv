import React from 'react';
import {Typography} from "@mui/material";

interface IProps {
  text: string
}

const SectionTitle: React.FC<IProps> = (props) => {
  return (
    <Typography variant={'h6'} sx={{borderBottom: '3px solid black', textTransform: 'uppercase', fontWeight: 600}}>
      {props.text}
    </Typography>
  );
};

export default SectionTitle;