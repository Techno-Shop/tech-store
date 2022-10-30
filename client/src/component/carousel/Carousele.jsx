import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import "./Carousel.css"

export default function Carousele() {
  return (
    <div className='carr'>
    <MDBCarousel showControls fade >
    
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        mask="black-light"
        src='https://cdn.mos.cms.futurecdn.net/U5Fdom8yDwVcEivFjiqajF-1200-80.jpg.webp'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://images.pexels.com/photos/3829227/pexels-photo-3829227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg'
        alt='...'
      >
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
}