"use client"
import { IconMenu, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isAdShowing, setIsAddShowing] = useState(true)

    return (
        <div className=' w-full fixed z-50 max-h-[150px]'>
            {
                isAdShowing &&
                <div className=' w-full flex items-center justify-between text-white bg-blue-950 min-h-[70px] p-2 lg:mb-4'>
                    <h1 className=' text-[15px] font-bold text-center lg:w-[95%]'>Backtesting 2.0 is now live on TradeZella 🚀. Check it out here!</h1>
                    <button onClick={() => setIsAddShowing(false)}><IconX stroke={2} /></button>
                </div>
            }
            <div className=' min-h-[80px] w-full lg:w-[95%] lg:py-[35px] lg:px-[15px] rounded-xl mx-auto border-b lg:border lg:border-slate-300 border-b-slate-300 flex items-center justify-between p-[5px]'>
                <Link href={"/"} className=' uppercase text-xl lg:text-3xl'>Tradezella</Link>
                <button className=' lg:hidden'><IconMenu /></button>

                <div className=' hidden lg:block'>
                    <Link href={""} className=' mr-[30px] text-xl p-2 hover:bg-slate-200 duration-500 rounded-md'>Features</Link>
                    <Link href={""} className=' mr-[30px] text-xl p-2 hover:bg-slate-200 duration-500 rounded-md'>Supported Brokers</Link>
                    <Link href={""} className=' mr-[30px] text-xl p-2 hover:bg-slate-200 duration-500 rounded-md'>Discord</Link>
                    <Link href={""} className=' mr-[30px] text-xl p-2 hover:bg-slate-200 duration-500 rounded-md'>Pricing</Link>
                    <Link href={""} className=' mr-[30px] text-xl p-2 hover:bg-slate-200 duration-500 rounded-md'>Resources</Link>
                </div>

                <div className=' hidden lg:flex items-center justify-center'>
                    <Link href={""} className=' mr-[30px] text-xl p-2 hover:bg-slate-200 duration-500 rounded-md'>Log In</Link>

                    <Link
                        href={""}
                        className=' w-[150px] block text-center rounded-lg text-white font-semibold py-[15px] bg-gradient-to-r from-purple-700 to-pink-600'
                    >
                        Get Started &gt;
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar