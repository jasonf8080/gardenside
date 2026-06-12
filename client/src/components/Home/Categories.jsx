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
            className='pt-14 pb-2 md:pt-24 md:pb-24 container relative z-0'
        >
            <h1 className='text-2xl md:text-4xl mb-3 md:mb-6 font-heading'>Shop our collection</h1>
            <div className='w-full  py-6 pb-28 flex gap-3 md:gap-5 mb-8 overflow-scroll'>
                {inView && 
                    categories.map((item, index) => {
                    return (
                        <motion.article 
                            onClick={() => navigate(`/menu?category=${item.name}`)} 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5, delay: parseFloat(`0.${index * 2}`)}}
                            className="cursor-pointer w-[300px] h-[300px] md:w-[380px] md:h-[380px]">
                                <motion.img 
                                src={item.image} 
                                alt={item.name} 
                                loading="lazy"
                                className="object-cover max-w-[300px] min-w-[300px] max-h-[300px] min-h-[300px] md:max-w-[380px] md:min-w-[380px] md:max-h-[380px] md:min-h-[380px] shadow-xl shadow-[#bbb]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                                />
                                <h3 className='font-heading pt-6 text-center text-2xl'>{item.name}</h3>
                        </motion.article>
                    )
                    })}
            </div>
        </section>
    )
}

export default Categories
