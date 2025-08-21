import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div
            id='hero'
            className=' w-[100vw] pt-[150px] min-h-[100vh] flex items-center lg:justify-start lg:items-center justify-center p-[2.5%]'
        >
            <div className=' w-[83%] lg:w-[45%]'>
                <h1 className=' font-bold text-4xl text-center mb-6'>
                    Everything you ever wanted to know about your trading...
                </h1>

                <h1 className=' font-semibold text-xl text-center mb-6'>
                    ...but your spreadsheets never told you.
                </h1>

                <p className=' text-center mb-11 text-slate-400'>
                    TradeZella shows you the metrics that matter–and the behaviours that lead to profit with the power of journaling and analytics.
                </p>

                <Link
                    href={""}
                    className=' w-full block text-center rounded-lg text-white font-semibold py-[15px] bg-gradient-to-r from-purple-700 to-pink-600'
                >
                    Get Started Now
                </Link>
            </div>
        </div>
    )
}

export default Hero