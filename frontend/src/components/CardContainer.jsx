import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const CardContainer = () => {
  return (
    <StyledCardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </StyledCardContainer>
  )
}

export default CardContainer

const StyledCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`