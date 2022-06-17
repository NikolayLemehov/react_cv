import React from 'react';
import {Stack} from "@mui/material";

interface IProps {
  children: JSX.Element[]
}

const PositionItem: React.FC<IProps> = (props) => {
  return (
    <Stack>
      {props.children}
    </Stack>
  );
};

export default PositionItem;