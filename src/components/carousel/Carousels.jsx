import React from 'react';
import { Carousel } from 'react-bootstrap';
export default function Carousels(){



    return(<> 
    <Carousel className='bg-slate-600 '>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[638px]"
            src="..."  // İlk görselin URL'sini buraya ekleyin
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[638px]"
            src="..."  // İkinci görselin URL'sini buraya ekleyin
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[638px]"
            src="..."  // Üçüncü görselin URL'sini buraya ekleyin
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel></>);
}