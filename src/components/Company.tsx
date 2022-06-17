import React from 'react';
import {Typography} from "@mui/material";

interface IProps {
  children: string
}

const Company: React.FC<IProps> = (props) => {
  return (
    <Typography sx={{opacity: '0.5'}}>
      {props.children}
    </Typography>
  );
};

export default Company;