import React from 'react'
import Paper from '@mui/material/Paper/Paper'
import Grid from '@mui/material/Grid/Grid'
import WineReview from '../review'
import MainContent from '../mainContent'
import styled from '@emotion/styled'

const WineBottle = styled.img`
  max-height: 200px;
  max-width: 70xp;
  margin-top: -13%;
  padding-bottom: 13%;
`

export interface IMainCardProps {
  wineryName: string
  wineName: string
  wineYear: string
  countryCode: string
  regionName: string
  countryName: string

  reviewsNumber: number
  reviewsPromedy: number

  bottleImgUrl: string
}

const MainCard: React.FC<IMainCardProps> = ({
  wineryName,
  bottleImgUrl,
  countryCode,
  countryName,
  regionName,
  reviewsNumber,
  reviewsPromedy,
  wineName,
  wineYear
}) => {
  return (
    <Paper elevation={2} >
      <Grid container item xs>
        <Grid item xs>
          <WineBottle src={bottleImgUrl} />
        </Grid>
        <Grid item xs={6}>
        <MainContent
          wineryName={wineryName}
          wineName={wineName}
          wineYear={wineYear}
          countryCode={countryCode}
          countryName={countryName}
          regionName={regionName}
        />
        </Grid>
        <Grid item xs>
          <WineReview reviewsNumber={reviewsNumber} reviewsPromedy={reviewsPromedy}></WineReview>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MainCard