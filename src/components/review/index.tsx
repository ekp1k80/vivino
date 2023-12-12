import { Typography, styled } from '@mui/material'
import Grid from '@mui/material/Grid/Grid'
import React from 'react'
import StarReview from '../stars'

const BigText = styled(Typography)`
  font-size: 40px;
  line-height: 48px;
  font-weight: 400;
`

interface IWineReviewProps {
  reviewsNumber: number
  reviewsPromedy: number
}

const WineReview: React.FC<IWineReviewProps> = ({ reviewsNumber, reviewsPromedy }) => {
  const reviewCountText = reviewsNumber !== 1 ? `${reviewsNumber} ratings` : `1 rating`

  return (
    <Grid container item xs flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <Grid item>
        <BigText>{reviewsPromedy}</BigText>
      </Grid>
      <Grid item>
        <StarReview reviewNumber={reviewsPromedy} />
      </Grid>
      <Grid item>
        <Typography>{reviewCountText}</Typography>
      </Grid>
    </Grid>
  )
}

export default WineReview