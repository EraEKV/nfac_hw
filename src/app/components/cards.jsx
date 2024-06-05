import React from 'react'
import data from "../data.json"
import Card from './layout/card'

const Cards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data.map((item) => (
            <Card
                key={item.id}
                title={item.title}
                date={item.date}
                name={item.author}
            />
        ))}     
        {/* <h2 className="px-[20px] py-[30px] border-black cursor-pointer transition hover:scale-105 text-white dark:bg-gray-800 rounded-xl"> Test Card</h2> */}
    </div>
  )
}

export default Cards