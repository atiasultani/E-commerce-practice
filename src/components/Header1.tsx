import React from 'react'
import Image from 'next/image'


const Header1 = () => {
  return (
    <div className='
    position-absolute
lg:w-screen sm:w-screen

py-[16px]

 bg-black text-white'>
      
      { /* start up */}
<div className='

justify-between 
flex 
flex-row 
px-60

'>
  <div className='

lg:flex       sm:grid
lg:flex-row   sm:grid-flow-col

gap-[31px]

position-absolute
w-[859px]    
h-[24px]        
top-[2px]

'>
<p className='lg:text-16 sm:text-3'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
<p className='underline'>ShopNow</p>
</div>

 <div className='
flex
flex-row
justify-between
items-center
gap-[15px]

w-[78px]
h-[24px]

'> 
<select>
<option> English</option>
<option>Urdu</option>
<option>Chainess</option>
<Image src="/footer/Vector.png" alt="icon-dropdown" width={10} height={10} />
</select>
  </div>     

      </div>
      </div>     
  )
}

export default Header1
