import { useInView } from 'react-intersection-observer'
import { showcase } from '../../data'
import { motion } from 'framer-motion'


const Showcase = () => {
  return (
    <section className="pt-6 md:pt-10 pb-20">
        {showcase.map((item, index) => {
            return (
            <ShowcaseItem 
                key={item.title}
                index={index}
                title={item.title}
                content={item.text}
                image={item.image}
                />
        )
        })}
     </section>
  )
}

const ShowcaseItem = ({index, title, content, image}) => {
  const {ref, inView} = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="pt-12 md:pt-[200px] pb-10 min-h-[800px]">
    <div className="max-w-[90%] md:max-w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-24">
     <div 
        className=
        {`${index === 1 
        ? 'order-[1] md:order-[1]'
        : 'order-1 md:order-[-1]'
        } basis-[64%] flex items-center md:border-t-[2px] border-[#c3b9b3]`}
         >
        {inView && <motion.div
         initial={{opacity: 0, y: -20}}
         animate={{opacity: 1, y: 0}}
         transition={{duration: 0.5, delay: 0.5}}
         className="">
          <h1 className="font-heading tracking-wider font-bold text-2xl md:text-4xl mb-3 md:mb-6">{title}</h1>
          <p
            className="text-lg md:text-xl leading-[1.5] md:leading-[2]"
            dangerouslySetInnerHTML={{ __html: content }}></p>
        </motion.div>}
      </div>

      <div 
        className={
          `${index === 1 
            ? ' order-[-1] md:order-[-1]'
            : 'order-[-1] md:order-[1]'
          } 
          basis-[36%]`}
        >

     {inView &&      
         <motion.img
            className="relative w-full h-full object-cover"
            src={image}
            alt=""
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            loading="lazy"
        />}
      </div>
    </div>
  </section>
  )
}
export default Showcase
