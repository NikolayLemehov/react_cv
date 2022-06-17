import React from 'react';
import {Stack} from "@mui/material";
import JobPosition from "./JobPosition";
import Term from "./Term";
import Company from "./Company";

interface IProps {
  jobPosition: string
  term: string
  company: string
}


const Position: React.FC<IProps> = (props) => {
  const {jobPosition, term, company} = props
  return (
    <Stack direction={'column'} sx={{width: '100%'}}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <JobPosition>{jobPosition}</JobPosition>
        <Term>{term}</Term>
      </Stack>
      <Company>{company}</Company>
    </Stack>
  );
};

export default Position;