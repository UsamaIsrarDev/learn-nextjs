import React from 'react'

interface dataProps {
    data: {
        id: number;
        title: string;
        description: string;
        date: string;
    }
}

const Card: React.FC<dataProps> = ({data}) => {
  return (
    <div className='border-2 border-gray-500'>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  )
}

export default Card
