import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://img.freepik.com/photos-premium/ordinateur-conception-sites-web-rendu-3d-bureau_72104-4375.jpg?w=740'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://sbsinformatique.com/7818-large_default/clavier-gaming-redragon-k617-fizz-60-rgb-black.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/042.webp'
        alt='...'
      />
    </MDBCarousel>
  )
}



