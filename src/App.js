import './App.css';
import Hero from './components/Hero'
import Header from './components/header'
import Carousel from './components/carousel';
import HeroMap from './components/heroMap';
import NossoTime from './components/nossoTime';

import Slide from './components/Slide';
import Feedbacks from './components/Feedbacks';
import Form from './components/Form';
import Footer from './components/Footer/Index';
import SmSlide from './components/sm-slide';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HeroMap />
      <Carousel Sli={<Slide/>}/>
      <NossoTime />
      <Carousel Sli={<Feedbacks/>}/>
      <Form />
      <Footer/>
    </>

  );
}

export default App;
