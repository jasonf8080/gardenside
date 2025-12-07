import { Header, Categories, MenuList} from '../components/Menu';

const Menu = () => {
  return (
    <>
    <Header/>
      <section className='py-10 md:py-16 container'>
        <Categories/>
        <MenuList/>
      </section>
    </>
  );
};

export default Menu;
