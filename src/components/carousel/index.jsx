import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from '../Slide';


const Carousel = ({Sli}) => {
  console.log(Sli);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            bottom: 0,
            position: "relative"
          }}
        >
          <ul style={{ margin: "0px",marginTop:"20px" }}> {dots} </ul>
        </div>
      ),
    };
  
    return (
       <>
       <div className='h-116 md:h-108 lg:h-104'>
          <div className='flex'>

          <h1 className='pb-5 ml-2 mt-5 text-2xl'>________</h1> <h1 className='text-primary font-bold text-3xl ml-4 mt-7 mb-12'> Atuação</h1>
          </div>
        <div className='overflow-x-clip  '>    
          <Slider {...settings} className='h-52'>
            <div>
              {Sli}
            </div>
            <div>
              {Sli}
            </div>
            <div>
              {Sli}
            </div>
          </Slider>
          </div>  
       </div>
      </>
    );
  };
  
  export default Carousel;
  