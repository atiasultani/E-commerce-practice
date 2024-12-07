import React from 'react'
import Link from 'next/link'

const home = () => {
  return (
    <div className='w-screen' >
      Home Page
      
  <Link href="./productdetail" className='px-10'>Product Detail </Link>

    </div>
  )
}

export default home
