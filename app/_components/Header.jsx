"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Dashboard from '../(routes)/dashboard/page';
function Header() {

    const {user,isSignedIn}=useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
       
        {isSignedIn?
        
          
       <h1 className='text-primary'>Budget Buddy</h1>
      
       :
       <>
       <Link href={isSignedIn ? "/dashboard" : "/"}>
       <Image
         src={'/logo.svg'}
         alt="logo"
         width={40}
         height={50}
       />
    
     </Link>
    
    
        <Link href={'/sign-in'}>
        <Button> Get Started </Button>
        </Link>
      </>
        }

    </div>
  )
}

export default Header