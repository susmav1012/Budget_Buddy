"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import { UserButton, useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
function SideNav() {
    const {isSignedIn}=useUser();
    const menuList=[{
        id:1,
        name:'Dashboard',
        icon:LayoutGrid,
        path:'/dashboard'
    },
    {
        id:2,
        name:'Budgets',
        icon:PiggyBank,
        path:'/dashboard/budgets'
    },
    {
        id:3,
        name:'Expenses',
        icon:ReceiptText,
        path:'/dashboard/expenses'
    }
  
    ]
    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[path])
  return (
    <div className='h-screen p-5 border shadow-sm'>
    <Link href={isSignedIn ? "/dashboard" : "/"}>
        <Image
          src={'/logo.svg'}
          alt="logo"
          width={40}
          height={50}
        />
      </Link>
   
    <div className='mt-5'>
        
        {menuList.map((menu,index)=>(
        <Link key={menu.id} href={menu.path}>
            <h2 className={`flex gap-2 items-center
            text-gray-500 font-medium p-5 
            mb-2 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100
            ${path==menu.path&&'text-primary bg-blue-100'}`}>
            <menu.icon/>
            {menu.name}
            </h2>
        </Link>
    
  ))
}</div>
<div className='flex fixed bottom-10 p-5 items-center'>
    <UserButton/> 
        Profile
</div>
</div>
  )}
export default SideNav