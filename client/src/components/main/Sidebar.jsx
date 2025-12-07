import React from 'react'

const Sidebar = () => {
  return (
    <aside className='hidden fixed top-0 left-0 min-h-[100vh] w-[480px] bg-[#2d2c2b] z-[99] text-white '>
      <ul className='text-4xl max-w-[300px] mx-auto mt-20'>
        <li className='mb-6'>Home</li>
        <li className='mb-6'>About</li>
        <li>Menu</li>
      </ul>
    </aside>
  )
}

export default Sidebar
