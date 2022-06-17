import React from 'react';
import styled from "@emotion/styled";

interface IImage {
  src: string
  alt: string
}

const StyledImage = styled('img')`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Image: React.FC<IImage> = (props) => {

  return (
    <StyledImage src={props.src} alt={props.alt}/>
  );
};

export default Image;