'use client'

import React from 'react'
import { GoSearch } from 'react-icons/go';
import Avatar from 'react-avatar';

const Navbar = () => {
    return (
        <header>
            <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
                {/* gradient */}
                <div className='absolute top-0 left-0
                w-full h-96 bg-gradient-to-br
                  from-pink-400  to-[#0055D1] rounded-md
                  filter blur-3xl opacity-60 -z-50' />
                {/* title */}
                <h1 className='w-44 md:w-56 pb-10 md:pb-0 font-semibold text-2xl'>Kanban-board</h1>
                <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
                    <form  className='flex items-center space-x-5 bg-white rounded p-2 shadow-md flex-1 md:flex-initial' action="">
                        <GoSearch className='text-gray-400 h-6 w-6' />
                        <input className='flex-1 outline-none p-2' type="text" placeholder='Search' />
                        <button type="submit" hidden>search</button>
                    </form>

                    {/* avatar */}
                    <Avatar name='Prakash' round size='50' color='#0055D1' />
                </div>
            </div>
        </header>
    )
}

export default Navbar