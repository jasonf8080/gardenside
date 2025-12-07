import React from 'react'

const MenuItemLoading = () => {
    const loadingData = Array.from({length: 6}, () => {
        return ``
    })

    console.log(loadingData)

  return (
    <>
        {loadingData.map((item) => {
            return   <article className='md:min-w-[1fr]' >
                <div className='px-2 md:px-4 py-4'>
                    <span className="h-[32px] bg-[#ebe8e3] rounded animate-pulse w-3/4 mb-1"></span>
                    <p className='h-[50px] bg-[#ebe8e3] rounded animate-pulse w-full mb-2'></p>
                     <p className='h-[25px] bg-[#ebe8e3] rounded animate-pulse w-1/2'></p>
                    {/* <p className='font-bold mt-4 text-xl text-orange-950'>
                    $8.00
                    </p> */}
                </div>
            </article>
        })}
    </>
  )
}

export default MenuItemLoading
