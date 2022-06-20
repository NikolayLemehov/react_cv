import React from 'react';
import {styled, Typography} from "@mui/material";

interface IProps {
  text: string
}

const StyledTypography = styled(Typography)(({theme}) => `
  border-bottom: ${theme.typography.htmlFontSize / 4}px solid black;
`)

const SectionTitle: React.FC<IProps> = (props) => {
  return (
    <StyledTypography variant={'h6'} sx={{textTransform: 'uppercase', fontWeight: 600}}>
      {props.text}
    </StyledTypography>
  );
};

export default SectionTitle;