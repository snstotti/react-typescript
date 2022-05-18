import React, { FC } from 'react'
import Card, { CardVariant } from './Card'

const CardPage: FC = () => {
  return (
    <Card width='300px' height='200px' variant={CardVariant.primary} onClick={(num) => console.log(num)} >
    <button>Click</button>
    <div className="">fdf</div>
  </Card>
  )
}

export default CardPage