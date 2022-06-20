import React from 'react';
import Cv from "./components/Cv";
import {Stack} from "@mui/material";

const App: React.FC = () => {
  return (
    <Stack direction={'column'}>
      <Cv type='print'/>
      {/*<Cv/>*/}
    </Stack>
  );
}

export default App;
