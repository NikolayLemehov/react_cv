import React from 'react';
import {Typography} from "@mui/material";

interface IProps {
  children: string
}

const JobPosition: React.FC<IProps> = (props) => {
  return (
    <Typography sx={{fontWeight: 700}}>
      {props.children}
    </Typography>
  );
};

export default JobPosition;