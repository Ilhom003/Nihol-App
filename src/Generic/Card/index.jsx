import React from 'react'
import { Image, Title, Wrapper } from './style'

const Card = ({title,image}) => {
  return (
    <Wrapper>
        <Title>{title}</Title>
        <Image src={image} alt='Not found!' />
    </Wrapper>
  )
}

export default Card