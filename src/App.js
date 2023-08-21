import './App.css';
import Hero from '../src/components/Hero'
import Header from '../src/components/header'
import Carousel from './components/carousel';
import HeroMap from './components/heroMap';
import NossoTime from './components/nossoTime';

import Slide from './components/Slide';
import Feedbacks from './components/Feedbacks';
import Form from './components/Form';
import Footer from './components/Footer/Index';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HeroMap />
      <Carousel Sli={<Slide />} />
      <NossoTime/>
      <Carousel Sli={<Feedbacks />} />
      <Form />
      <Footer/>
    </>

  );
}

export default App;
