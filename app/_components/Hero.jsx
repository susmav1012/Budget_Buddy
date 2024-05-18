"use client"
import React from 'react'

import { useUser } from '@clerk/nextjs';
import Dashboard from '../(routes)/dashboard/page';
import SideNav from '../(routes)/dashboard/_components/SideNav';
import DashboardLayout from '../(routes)/dashboard/layout';

function Hero({children}) {
  const {user,isSignedIn}=useUser();
  return (
    <div>
    {isSignedIn?
    <div className='flex'>
      <div className='fixed md:w-64 hidden md:block'><SideNav/></div>
      <div className='flex-grow ml-64'>
      <Dashboard/>
      </div>
    </div>
    
    :
   
    <section className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          Expense tracker
  
          <span className="text-primary sm:block"> Manage Your Expense</span>
        </h1>
  
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Headache with your budget? Track here and save money!
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/sign-in"
          >
            Get Started
          </a>
  
          
        </div>
      </div>
    </div>
  </section>
    }
    </div>
    
  )
}

export default Hero