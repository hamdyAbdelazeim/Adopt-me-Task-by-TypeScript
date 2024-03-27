import React, { useState } from 'react'

interface PRops {
  images: string[]
}
function Carousel(props: PRops) {
  const [index, setIndex] = useState(0)
  const { images } = props
  return (
    <div className='carousel'>
      <img src={images[index]} alt='animal' />
      <div className='carousel-smaller'>
        {' '}
        {images &&
          images.map((photo, item) => {
            return (
              <img
                className={index === item ? 'active' : ''}
                src={photo}
                alt='animal'
                key={photo}
                onClick={() => setIndex(item)}
              />
            )
          })}{' '}
      </div>
    </div>
  )
}

export default Carousel
