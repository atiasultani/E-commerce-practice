import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header2 = () => {
  return (
<div className='
flex
flex-row
items-center

p-0
gap-[148px]

position-absolute
w-[1170px]
h-[40px]
left-135
top-88
'>
        
    {/* logo & routs */}
    <div className='
flex
justify-evenly

w-[675px]
h-[24px]
'>
      <h1 className='px-40 font-bold'> Exclusive</h1>
    <Link className='hover:underline hover:underline-offset-4' href="/"> Home</Link>
    <Link className='hover:underline hover:underline-offset-4' href="/about">About</Link>
    <Link className='hover:underline hover:underline-offset-4' href="/contact">Contact</Link>
    <Link className='hover:underline hover:underline-offset-4' href="/signup">Sign Up</Link>
    </div>

    {/* search & cart container */}
    <div className='
flex        
flex-row
items-center
p-0
px-24
gap-[24px]

w-[347px]
h-[38px]
'>
    <div className='
flex
flex-row
justify-evenly
p-0
gap-[3px]

w-[211px]
h-[24px]
'>
    <input type='search' placeholder='What are you looking for?' size={22}/>
    <Image src="/header2/search-icon.svg" alt='search bar' 
    width={20} height={20} className='-ml-5 mr-10' />
    </div>

    <Image src="/header2/like-icon.svg" alt='search bar' width={20} height={20}/>
    <Image src="/header2/cart-icon.svg" alt='search bar' width={20} height={20}/>
    </div>
</div>
  )
}

export default Header2
