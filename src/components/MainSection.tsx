import React from 'react';
import {Box, Stack} from "@mui/material";
import SectionItem from "./SectionItem";
import SectionTitle from "./SectionTitle";
import PositionItem from "./PositionItem";
import Position from "./Position";
import ItemList from "./ItemList";
import RatingList from "./RatingList";
import {skillList} from "../data/skills";
import RatingItem from "./RatingItem";

const MainSection = () => {
  return (
    <Stack spacing={3}>
      <SectionItem>
        <SectionTitle text='Experience'/>
        <Box>
          <PositionItem>
            <Position
              jobPosition={'Front End Developer'}
              term={'04/2020 - 02/2022'}
              company={'LigaA'}
            />
            <ItemList>
              <Box>Convert Figma layouts to HTML pages and create JS functionality оn vanilla JS.</Box>
              <Box>Completed 13 NDA projects</Box>
              <Box>Projects team: QA, РМ, Team Lead, Backend Developer, 1-5 - Frontend Developer</Box>
            </ItemList>
          </PositionItem>
        </Box>
      </SectionItem>

      <SectionItem>
        <SectionTitle text='Skills'/>
        <RatingList rateList={skillList}/>
      </SectionItem>

      <SectionItem>
        <SectionTitle text='English level'/>
        <RatingItem text={'Elementary'} defaultValue={2} max={9}/>
      </SectionItem>

      <SectionItem>
        <SectionTitle text='Education'/>
        <Position
          jobPosition={'React Developer'}
          term={'09/28/2020 - 11/02/2020'}
          company={'HTML Academy'}
        />
        <Position
          jobPosition={'JavaScript. Client Application Architecture'}
          term={'10/18/2019 - 01/29/2020'}
          company={'HTML Academy'}
        />
        <Position
          jobPosition={'Frontend Developer'}
          term={'01/21/2019 - 10/14/2019'}
          company={'HTML Academy'}
        />
      </SectionItem>

      <SectionItem>
        <SectionTitle text='Certificates'/>
        <Position
          jobPosition={'React. Development of Complex Front-end Applications'}
          term={'12/02/2020'}
          company={'HTML Academy'}
        />
        <Position
          jobPosition={'Professional JavaScript, level 2'}
          term={'01/29/2020'}
          company={'HTML Academy'}
        />
        <Position
          jobPosition={'Profession "Front-end Developer"'}
          term={'10/14/2019'}
          company={'HTML Academy'}
        />
      </SectionItem>
    </Stack>
  );
};

export default MainSection;