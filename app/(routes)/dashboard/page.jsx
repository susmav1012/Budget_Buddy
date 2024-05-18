"use client"
import React from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import CardInfo from './_components/CardInfo';
import { eq ,sql,getTableColumns,desc} from 'drizzle-orm';
import { db } from '@/utils/dbConfig';
import { useState } from 'react';
import { useEffect } from 'react';
import { Budgets,Expenses } from '@/utils/schema';
import BarChartDashboard from './_components/BarChartDashboard';
import BudgetItem from './budgets/_components/BudgetItem';
import ExpenseListTable from './expenses/_components/ExpenseListTable';
function Dashboard() {
  const {user}=useUser();
  const [budgetList,setBudgetList]=useState([]);
  const [expensesList,setExpensesList]=useState([]);
  useEffect(()=>
    {
      user&&getBudgetList();
    },[user])
  
  
  /**
   * Used to get budget list
   */
  const getBudgetList=async()=>{
    const result=await db.select({
          ...getTableColumns(Budgets),
          
          totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
          totalItem:sql `count(${Expenses.id})`.mapWith(Number)
  }).from(Budgets)
  .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
  .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
  .groupBy(Budgets.id)
  .orderBy(desc(Budgets.id));
  setBudgetList(result);
  getAllExpenses();
  console.log(result);
  
  }

  /**
   * Used to get all the expenses
   */
  const getAllExpenses=async()=>{
      const result=await db.select({
          id:Expenses.id,
          name:Expenses.name,
          amount:Expenses.amount,
          createdAt:Expenses.createdAt
      }).from(Budgets)
      .rightJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
      .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(Expenses.id))
      setExpensesList(result);
      console.log(result);
  }
  return (
   <div>
        <div className='p-8'>
            <h2 className='font-bold text-3xl'>Hi, {user?.fullName} 👋</h2>
            <p className='text-gray-500'>Here's what happening with your money, Let's manage your expense</p>
            <CardInfo budgetList={budgetList}/>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-5'>
              <div className='md:col-span-2'>
                <BarChartDashboard
                budgetList={budgetList}
                />
              <ExpenseListTable
              expensesList={expensesList}
              refreshData={()=>getBudgetList()}/>

              </div>
              <div className='grid gap-5'>
                <h2 className='font-bold text-lg'> Latest Budgets</h2>
                {budgetList.map((budget,index)=>(
                  <div>
                      <BudgetItem budget={budget} key={index}/>
                  </div>
                ))}
              </div>

            </div>
        </div>
  </div>
  )
}

export default Dashboard