import React from 'react';

interface IProps {
  children: JSX.Element[]
}

const ItemList: React.FC<IProps> = ({children}) => {
  return (
    <ul style={{margin: 0}}>
      {children.map((child, i) => <li key={i}>{child}</li>)}
    </ul>
  );
};

export default ItemList;