import React from 'react';
import {Stack} from "@mui/material";

interface IProps {
  children: JSX.Element[]
}

const SectionItem: React.FC<IProps> = (props) => {
  return (
    <Stack direction={'column'} spacing={3}>
      {props.children}
    </Stack>
  );
};

export default SectionItem;