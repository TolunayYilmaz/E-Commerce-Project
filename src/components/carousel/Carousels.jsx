import React from 'react';
import { Carousel } from 'react-bootstrap';
export default function Carousels(){



    return(<> 
    <Carousel className='bg-slate-600 h-[640px] 2xl:h-[815px]'>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[100%]"
            src="..."  
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[100%]"
            src="..."  
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[100%]"
            src="..."  
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel></>);
}