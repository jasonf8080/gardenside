import React from 'react'
import { categories } from '../../data'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'


const Categories = () => {
    const navigate = useNavigate();
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    return (
        <section 
            ref={ref} 
            className='pt-14 pb-2 md:pt-24 md:pb-24 container relative z-0 flex justify-center items-center flex-col'
        >
            <h1 className='text-2xl md:text-4xl mb-3 md:mb-6 font-heading'>Shop our collection</h1>
            {/* <img className='max-w-[80px] md:max-w-[100px]' src="https://png.pngtree.com/png-clipart/20240109/original/pngtree-cartoon-croissant-png-image_14061296.png" alt="pastry" /> */}
            <p className='text-lg md:text-2xl text-center'>From homemade pastries to savory vies and perfectly brewed coffee explore out handcrafted favorites</p>
            <div className='w-full  py-6  flex gap-3 md:gap-5 mb-8 overflow-scroll'>
                {inView && 
                    categories.map((item, index) => {
                    return (
                        <motion.article 
                            onClick={() => navigate(`/menu?category=${item.name}`)} 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5, delay: parseFloat(`0.${index * 2}`)}}
                            className="cursor-pointer bg-[#fff2e5]">
                                <motion.img 
                                src={item.image} 
                                alt={item.name} 
                                loading="lazy"
                                className="object-cover max-w-[300px] min-w-[300px] max-h-[300px] min-h-[300px] md:max-w-[380px] md:min-w-[380px] md:max-h-[380px] md:min-h-[380px]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                                />
                                <div className='p-5 pb-8 flex flex-col justify-center items-center text-center'>
                                    <h3 className='font-heading text-center text-2xl'>{item.name}</h3>
                                    <p className='text-lg mt-1 mb-3'>{item.content}</p>
                                    <button className="primary-button !bg-accent !border-accent !font-normal px-4 py-1">{`Shop ${item.name}`}</button>
                                </div>
                                
                        </motion.article>
                    )
                    })}
            </div>

            {/* <button className='font-semibold uppercase text-xl'>View All Collection</button> */}
        </section>
    )
}

export default Categories
