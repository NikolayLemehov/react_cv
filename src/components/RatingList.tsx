import React from 'react';
import {Box, Grid, Stack} from "@mui/material";
import RatingItem from "./RatingItem";

interface IRateItem {
  text: string
  rate: number
}

interface IProps {
  rateList: IRateItem[]
}

const RatingList: React.FC<IProps> = ({rateList}) => {
  const count = Math.ceil(rateList.length / 2)

  return (
    <Box sx={{width: '100%'}}>
      <Grid container columnSpacing={5} direction={'row'}>
        <Grid item xs={6}>
          {rateList.slice(0, count).map((it, i) =>
            <Stack key={i}>
              <RatingItem text={it.text} defaultValue={it.rate} max={5}/>
            </Stack>
          )}
        </Grid>
        <Grid item xs={6}>
          {rateList.slice(count).map((it, i) =>
            <Stack key={i}>
              <RatingItem text={it.text} defaultValue={it.rate} max={5}/>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default RatingList;