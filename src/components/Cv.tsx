import React from 'react';
import {Container, Paper, Stack} from "@mui/material";
import Header from "./Header";
import MainSection from "./MainSection";

interface ICv {
  type?: 'print'
}

const Cv: React.FC<ICv> = (props) => {

  return props.type === 'print' ? (
    <Container maxWidth={"md"} sx={{p: 2}}>
      <Stack direction={'column'} spacing={3}>
        <Header/>
        <MainSection/>
      </Stack>
    </Container>
  ) : (
    <Container maxWidth={"md"} sx={{p: 2}}>
      <Paper sx={{p: 5}}>
        <Stack direction={'column'} spacing={3}>
          <Header/>
          <MainSection/>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Cv;