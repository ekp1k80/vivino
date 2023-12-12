import React from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid/Grid'
import FlagCircle from '../flagCircle'
import styled from '@emotion/styled'

const WineryText = styled(Typography)`
  display: block;
  color: #1e1e1e;
  background-color: transparent;
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`

const WineNameText = styled(Typography)`
  display: block;
  color: #1e1e1e;
  background-color: transparent;
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`

const RegionText = styled(Typography)`
  color: #1e1e1e;
  background-color: transparent;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  padding-left: 8px;
`

interface IMainContentProps {
  wineryName: string
  wineName: string
  wineYear: string
  countryCode: string
  regionName: string
  countryName: string
}

const MainContent: React.FC<IMainContentProps> = ({
  wineryName,
  wineName,
  wineYear,
  countryCode,
  regionName,
  countryName,
}) => {
  return (
    <Grid container item flexDirection={"column"} alignItems={"start"}>
      <Grid>
        <WineryText>{wineryName}</WineryText>
      </Grid>
      <Grid>
        <WineNameText>{wineName} {wineYear}</WineNameText>
      </Grid>
      <Grid container item justifyContent={"start"} alignItems={"center"}>
        <FlagCircle countryCode={countryCode} />
        <RegionText>{regionName}, {countryName}</RegionText>
      </Grid>
    </Grid>
  )
}

export default MainContent