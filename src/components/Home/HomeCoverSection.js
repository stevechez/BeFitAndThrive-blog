import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const HomeCoverSection = () => {

  return (
    <div className='w-full inline-block'>
  
        <Image src="/hero-image.jpg" alt="hero image" width={1000} height={200}
  
    
        className='w-full object-center h-200 '
    
    
        />
</div>
     
  )
}

export default HomeCoverSection