import React, { FC, ReactNode, useState } from 'react'

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string
    height: string
    variant?: CardVariant
    children?: ReactNode
    onClick: (num: number)=>void
}

const Card: FC<CardProps> = ({width,height,children,variant,onClick}) => {

  const [num, setnum] = useState(0)

    const borderVariant = variant === CardVariant.outlined ? '2px solid grey' : 'none'
    const bacgroundVariant = variant === CardVariant.primary ? 'gray' : ''

  return (
    <div 
        style={{width, height, border: borderVariant, background: bacgroundVariant}}
        onClick={()=>onClick(num)}
    >
       { children }
    </div>
  )
}

export default Card