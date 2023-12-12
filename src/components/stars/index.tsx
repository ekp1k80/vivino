import styled from '@emotion/styled';
import Rating from '@mui/material/Rating/Rating';
import React from 'react'

interface IStarReviewProps {
  reviewNumber: number
}

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#891826',
  },
});

const StarReview: React.FC<IStarReviewProps> = ({reviewNumber}) => {
  const startNumber = Math.floor(reviewNumber);

  return (
    <StyledRating name="vivino-wine-star-count" value={startNumber} readOnly />
  )
}

export default StarReview