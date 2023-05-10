import React from 'react'
import { Image, Title, Wrapper } from './style'

const Card = ({ title, image, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Title>{title}</Title>
      <Image src={image} alt='Not found!' />
    </Wrapper>
  )
}

export default Card