import Image from 'next/image'
import React from 'react'
import ellipse from"@/assets/Ellipse 17.png"
import ellipse1 from "@/assets/Ellipse 16.png"
import ellipse2 from "@/assets/Ellipse 15.png"
import ellipse3 from "@/assets/Ellipse 14.png"
import ellipse4 from "@/assets/Ellipse 13.png"
import ellipse5 from "@/assets/Ellipse 12.png"
import ellipse6 from "@/assets/Ellipse 6.png"
import logo from "@/assets/logo.png"
import Link from 'next/link'
import lightLogo from "@/assets/light-logo.png"

const Hero = () => {
    return (
        <div className=' w-screen h-screen bg-white dark:bg-[#000000] relative flex items-center justify-center'>
            <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
                <Image
                    src={ellipse}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
                <Image
                    src={ellipse1}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg--transparent flex items-center justify-center z-[4]'>
                <Image
                    src={ellipse2}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[5]'>
                <Image
                    src={ellipse3}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[6]'>
                <Image
                    src={ellipse4}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[7]'>
                <Image
                    src={ellipse5}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[7]'>
                <Image
                    src={ellipse6}
                    alt=''
                    className=''
                />
            </div>
            <div className=' hidden absolute h-full w-full bg-g-transparent dark:flex flex-col items-center justify-end z-[8] pb-[30px]'>
                <Image
                    src={logo}
                    alt=''
                    className=' mb-[10px]'
                />
                <Link href="/termsandconditions" className=' bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md font-extrabold hover:bg-[#AB4FA8]/60 duration-500'>Get Started</Link>
            </div>
            <div className=' dark:hidden absolute h-full w-full bg-g-transparent flex flex-col items-center justify-end z-[8] pb-[30px]'>
                <Image
                    src={lightLogo}
                    alt=''
                    className=' mb-[10px]'
                />
                <Link href="/termsandconditions" className=' bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md font-extrabold hover:bg-[#AB4FA8]/60 duration-500'>Get Started</Link>
            </div>
        </div>
    )
}

export default Hero