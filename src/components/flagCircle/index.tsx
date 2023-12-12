import styled from '@emotion/styled'
import React from 'react'

const CircleContainer = styled.div`
width: fit-content;
height: fit-content;
`
const Circle = styled.div`
border-radius: 100%;
width: 14px;
height: 14px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`


interface IFlagCircleProps {
  countryCode: string
}

const FlagCircle: React.FC<IFlagCircleProps> = ({ countryCode }) => {
  return (
    <CircleContainer>
      <Circle>
        <span className={`fi fis fi-${countryCode}`}></span>
      </Circle>
    </CircleContainer>
    
  )
}

export default FlagCircle