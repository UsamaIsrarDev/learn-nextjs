import Card from '@/components/core/Card/Card'
import React from 'react'

const CardInfo = () => {
    const data = [
        {
            id: 1, 
            title: 'Card 1',
            description: 'This is card 1',
            date: '02-02-1999'
        },
        {
            id: 2, 
            title: 'Card 2',
            description: 'This is card 2',
            date: '02-02-1999'
        }
    ]
  return (
    <div>
        {data.map((item, index) => {
            return <Card key={index} data={item} />
        })}
    </div>
  )
}

export default CardInfo
