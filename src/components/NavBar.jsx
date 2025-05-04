import React from 'react'

export function NavBar() {
    return (
        <>
            <nav className="hidden sm:flex w-full px-6 py-4 bg-white shadow-md flex flex-col lg:flex-row items-center justify-between lg:fixed">
                <div className="text-2xl font-bold text-gray-600 tracking-wide">
                    Sivaraman S
                </div>
                <ul className='flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-2 lg:mt-0 text-gray-600 font-medium text-lg'>
                    <li><a href='#about' className='hover:text-blue-500 transition-colors cursor-pointer'>About</a></li>
                    <li><a href="#education" className="hover:text-blue-500 transition-colors cursor-pointer">
                        Education
                    </a></li>
                    <li><a href='#experience' className='hover:text-blue-500 transition-colors cursor-pointer'>Experience</a></li>
                    <li><a href='#project' className='hover:text-blue-500 transition-colors cursor-pointer'>Project</a></li>
                    <li><a href='#skills' className='hover:text-blue-500 transition-colors cursor-pointer'>Skills</a></li>
                    <li><a href='#contact' className='hover:text-blue-500 transition-colors cursor-pointer'>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}