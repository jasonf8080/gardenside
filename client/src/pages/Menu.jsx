import { Link } from 'react-router-dom';
import { Header, Categories, MenuList} from '../components/Menu';

const Menu = () => {
  return (
    <>
    <Header/>
      <section className='py-10 md:py-[200px] container flex justify-center items-center flex-col'>
        {/* <Categories/>
        <MenuList/> */}
        <p className='text-center text-2xl mb-4  '>We're putting the finishing touches on our menu. It will be available soon.</p>
        <Link to={'/'} className='border-accent border-2 bg-accent text-white px-6 py-2'>Back to Home</Link>
      </section>
    </>
  );
};

export default Menu;
