import { Header, Categories, Location, Gallery } from '../components/Home';
import { Quote } from '../components/main';

const Home = () => {
 
  return (
    <>
    <Header/>
    <Categories/>
    <Quote
       quote='"We make everything in-house, from scratch, with the freshest ingredients that meet our high standards.”'
       buttonEl={true}/>
    <Location/>
    <Gallery/>
  </>
  )
}

export default Home
