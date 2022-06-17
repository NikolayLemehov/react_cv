import React from 'react';
import {Rating, Stack, Typography} from "@mui/material";
import LensIcon from '@mui/icons-material/Lens';

interface IProps {
  text: string
  defaultValue: number
  max: number
}

const RatingItem: React.FC<IProps> = (props) => {
  const {text, defaultValue, max} = props
  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{width: '100%'}}>
      <Typography>{text}</Typography>
      <Rating
        sx={{color: '#000000', fontSize: '0.9rem'}}
        // size={'small'}
        defaultValue={defaultValue} max={max} readOnly
        icon={<LensIcon fontSize="inherit" color={'inherit'} />}
        emptyIcon={<LensIcon fontSize="inherit" color={'inherit'} />}
      />
    </Stack>
  );
};

export default RatingItem;