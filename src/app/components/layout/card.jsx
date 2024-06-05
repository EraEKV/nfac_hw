import React from 'react'
import Link from 'next/link';


const Card = ({id, title, date, name}) => {
  return (
    <Link href={`/blog/${id}`} className="w-full max-w-sm bg-white rounded-lg shadow-md hover:scale-105 transition-all">
      {/* <img src="/placeholder.svg" alt="Card Image" className="w-full rounded-t-lg" /> */}
      <div className="p-6 min-h-[200px] max-h-[240px]">
        <div className="items-center mb-4">
          <h2 className="mb-8 text-xl font-bold text-gray-900">{title}</h2>
        </div>
        <p className="text-gray-700 mb-4">
        </p>
        <div className="flex-wrap flex items-center justify-between">
          <h2>{name}</h2>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>

            <span className="text-gray-500">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card