import React from 'react'
import { suppliers } from '../../data'

const Suppliers = () => {
  return (
    <section className="py-16 pb-32 ">
        <div className="container mx-auto px-4">
            <h2 className="font-heading tracking-wider font-bold text-2xl md:text-4xl mb-3 md:mb-8">Local Partners</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 ">
                {suppliers.map((supplier) => {
                    return <Supplier key={supplier.title} {...supplier}/>
                })}
            </div>
        </div>
    </section>
  )
}


const Supplier = ({title, location}) => {
    return (
        <article className='rounded-2xl p-1'> 
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <p className="text-lg md:text-lg ">{location}</p>
        </article>
    )
}

export default Suppliers
