import React from 'react'
import data from '../../data.json'

const Blog = ({ params }) => {
    const blogId = parseInt(params.blogId)
    const blogData = data[blogId - 1]

    return (
        <div className='md:py-20 min-h-screen flex flex-col items-center cursor-pointer'>
            <div className='shadow-2xl w-full sm:w-3/4 max-w-4xl flex flex-col items-center justify-center p-5 md:p-10 bg-white rounded-lg '>
                <h1 className="text-2xl md:text-4xl mb-4 md:mb-8 lg:mb-10 text-center font-bold text-gray-900">{blogData.title}</h1>
                <p className="text-lg md:text-xl font-medium text-center pb-5 border-b-[1px]">{blogData.description}</p>
                <div className='block sm:flex mt-5 space-x-6 text-gray-800'>
                    <p>{blogData.author}</p>
                    <div className='flex space-x-1 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <p>{blogData.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog