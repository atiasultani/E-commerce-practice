import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=' 
  position-absolute;
 flex
 justify-center
md:w-screen   sm:w-auto        
md:h-[440px]    sm:h-auto
                  sm:py-8
left-[0px]
top-[1703px]


bg-black
text-white
'>

{ /* sub container */}
<div className='  
md:flex      sm:grid 
md:flex-row   sm:grid-flow-col
md:justify-center
flex-start
p-0
gap-[87px]             
md:pt-[7em]  sm:pt-7    

position-absolute       
md:w-[1170px]   sm:w-screen
md:h-[236px]    sm:h-full  
md:left-[135px]            sm: ml-20 
top-[80px]              
'>

{/*frame1 open*/}
<div className=' 
 flex
 flex-col
 items-start
 md:p-0 sm:pb-6
 gap-[16px]

w-[217px]
h-[188px]
'>
{/*text-frame1 open tag*/} 
<h1 className='font-bold'>Exclusive </h1>
<h3>Subscribe</h3>
<p>Get 10% off your first order</p>    
{/*text-frame1 close tag*/}

{/* {input email frame1 open tag}*/}
    <div className='
  
flex
flex-row
items-center
gap-1
px-6
py-3
box-border
w-[217]
h-[48]

border-[1px] 
rounded-4
'> 
    <input type='email' placeholder=' enter your e-mail ' className='bg-black text-white'/>
    <Image src="/footer/icon-send.png" alt="icon-send" 
    width={50} height={50}
     className='px-2'/>
</div>
{/*frame1 close*/}
</div>
{/* frame2 open*/}
<div className=' 
flex
flex-col
flex-start
p-0                   
gap-[24px] 

w-[175px]
h-{180px}
'>
  <h1 className='font-bold'> Support</h1>
  <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
  <p>exclusive@gmail.com</p>
  <p>+88015-88888-9999</p>
</div>
{/* frame2 close*/}
{/* frame3 open*/}
<div className='
flex
flex-col
flex-start
p-0
gap-[24px]   
md:w-[123px]    sm:w-[50px]
md:h-[236px]    sm:h-[90px]
'>
<h1 className='font-bold'>Account</h1>
<p>My Account</p>
<p>Login / Register</p>
<p>Cart</p>
<p>Wishlist</p>
<p>Shop</p>
</div>
{/* frame3 close*/}

{/* frame4 open*/}
<div className='
flex
flex-col
flex-start
p:0            
gap-[16px]      

 md:w-[109px]    sm:w-[40]
 md:h-[144px]    sm:h-[50]
'>
<h1 className='font-bold'>Quick Link</h1>
<p>Privacy Policy</p>
<p>Terms Of Use</p>
<p>FAQ</p>
<p>Contact</p>
</div>
{/* frame4 close*/}
{/* frame5 open*/}
<div>
  <div className='
flex
flex-col
flex-start
p-0   
gap-[24px]

md:w-[198px]      sm:w-[50px]
md:h-[162px]     sm:h-[60px]
'>
  <div className='
flex
flex-col
flex-start;
p-0                 
md:gap-[15px]          sm:gap-2

md:w-[198px]      sm:w-[50px]
md:h-[110px]     sm:h-[60px]
'>
    <h1 className='font-bold'> Downlode App</h1>
    <p className='text-[12.8px]'>Save $3 with App New User Only</p>
    <Image src="/footer/qr-code.png" alt='QR-Code' width={198} height={84}/>
  </div>
  </div>
<div className='
flex
flex-row
flex-start
p-0
pt-8        
gap-[24px]

md:w-[168px]    sm:w-[30px]
h-[50px]

'>
  <Image src="/footer/Vector.png" alt='facebook' width={10} height={10}/>
  <Image src="/footer/icon-Twitter.svg" alt='twitter' width={24} height={24}/>
  <Image src="/footer/icon-instagram.svg" alt='instagram' width={24} height={24}/>
  <Image src="/footer/icon-Linkedin.svg" alt='linkedIn' width={24} height={24}/>

</div>

</div>
{/* frame5 close*/}

{/*sub-main*/}</div>
      
    {/*main*/}</div> 
  )
}

export default Footer
