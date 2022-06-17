import React from 'react';
import {Container, Paper, Stack} from "@mui/material";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

const App: React.FC = () => {
  return (
    <Container maxWidth={"md"} sx={{p: 2}}>
      <Paper sx={{p: 5}}>
        <Stack direction={'column'} spacing={3}>
          <Header/>
          <MainSection/>
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;
