"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ellipse from "@/assets/Ellipse 17.png"
import ellipse1 from "@/assets/Ellipse 16.png"
import ellipse2 from "@/assets/Ellipse 15.png"
import ellipse3 from "@/assets/Ellipse 14.png"
import ellipse4 from "@/assets/Ellipse 13.png"
import ellipse5 from "@/assets/Ellipse 12.png"
import ellipse6 from "@/assets/Ellipse 6.png"
import logo from "@/assets/logo.png"
import Link from 'next/link'

const page = () => {
    const [value, setValue] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, ''); // Strip non-digits
        input = input.slice(0, 10); // Max 10 digits

        // Set completion state
        setIsComplete(input.length === 10);

        // Format: 00 0000 0000
        let formatted = '';
        if (input.length > 0) formatted += input.slice(0, 2);
        if (input.length > 2) formatted += ' ' + input.slice(2, 6);
        if (input.length > 6) formatted += ' ' + input.slice(6, 10);

        setValue(formatted);
    };

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
            <div className=' absolute h-full w-full bg-slate-900/60 flex flex-col items-center justify-end z-[8]'>
                <div className=' w-[100vw] mx-auto bg-[#f6f5f5] dark:bg-black py-[30px]'>
                    <div className=' w-[70%] m-auto'>
                        <p className=' text-black dark:text-slate-600 text-sm mb-[4px]'>Mobile Number</p>
                        <form className=' font-bold text-2xl mb-[10px] flex items-center'>
                            <select name="" id="" className=' mr-[2px] text-black dark:text-slate-600'>
                                <option value="+996">+996</option>
                            </select>
                            <input id="custom-number"
                                type="text"
                                inputMode="numeric"
                                value={value}
                                onChange={handleChange} placeholder='00 0000 0000' className=' appearance-none focus:outline-none text-black dark:text-slate-600' />
                        </form>
                        {/* {isComplete && (
        <p className="mt-2 text-green-600 font-medium">✅ Input complete!</p>
      )} */}
                        <div className=' w-full flex items-center justify-between'>
                            {
                                isComplete ?
                                    (<Link href="/otp" className=' w-[49%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Proceed</Link>)
                                    :
                                    (<Link href="" className=' w-[49%] text-center bg-black/60 dark:bg-[#AB4FA8]/60 text-white/60 py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Proceed</Link>)
                            }
                            <Link href="/" className=' w-[49%] text-center bg-red-500 text-white py-[10px] px-[100px] rounded-md hover:bg-red-500/60 duration-500'>Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page