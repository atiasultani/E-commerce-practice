import React from 'react'
import Image from 'next/image'


const contact = () => {
  return (
    <div className='flex flex-col'>
      
    {/* contact numbers */}
    <div className='
position-absolute;
width-[340px];
height-[457px];
ml-40
mt-40
'> 
      <div className='flex flex-row font-bold gap-4 py-4 '>
      <Image src="/contact section/icon-phone.png" alt="ph.icon" width={40 } height={40}/> 
      <p>Call To Us</p>
      </div>
    
      <p className='py-3'>We are available 24/7, 7 days a week.</p>
      <p className='py-3'>Phone: +8801611112222</p>
    
    </div>
    <hr className='w-[340px] ml-40
'/>    

    <div className=' flex flex-row gap-4 font-bold py-4 ml-40
'>
    <Image src="/contact section/icon-mail.png" alt="ph.icon" width={40 } height={40}/> 
      <p>Write To US</p>
    </div> 
    <div> 
      <p className='py-3'>Fill out our form and we will contact you within 24 hours.</p>
      <p className='py-3'>Emails: customer@exclusive.com</p>
      <p className='py-3'>Emails: support@exclusive.com</p>

    </div>


    </div>
  )
}

export default contact
