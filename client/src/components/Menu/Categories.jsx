import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { categories } from "../../data"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Categories = () => {
      const navigate = useNavigate();
      const [searchParams] = useSearchParams();
      const category = searchParams.get('category') || 'pastries';

  return (
        <div className='w-full border-y-[1px] border-y-[#817573] py-6 pb-4 flex gap-3 md:gap-5 mb-4 md:mb-8 overflow-scroll'>
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(`/menu?category=${item.name}`, { replace: true })}
              className="cursor-pointer min-w-[125px] md:min-w-[140px] max-w-[125px] md:max-w-[140px]"
            >
              <LazyLoadImage
                className={`${category === item.name && 'border-[6px] border-secondary shadow-3xl '} max-w-full min-w-full shadow-lg`}
                src={item.image}
                 effect="blur"    
                alt={item.name}
              />
              <h3 className='font-heading pt-4 text-center'>{item.name}</h3>
            </button>
          ))}
        </div>
  )
}

export default Categories
