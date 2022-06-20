import React from 'react';
import {Typography} from "@mui/material";

interface IProps {
  children: JSX.Element[]
}

const ItemList: React.FC<IProps> = ({children}) => {
  return (
    <ul style={{margin: 0}}>
      {children.map((child, i) => <li key={i}><Typography>{child}</Typography></li>)}
    </ul>
  );
};

export default ItemList;