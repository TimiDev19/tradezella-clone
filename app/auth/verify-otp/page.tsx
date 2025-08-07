"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
    const [validOTP, setValidOTP] = useState(false)

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     let input = e.target.value.replace(/\D/g, ''); // Strip non-digits
    //     input = input.slice(0, 4); // Max 10 digits

    //     // Set completion state
    //     setIsComplete(input.length === 4);

    //     // Format: 00 0000 0000
    //     let formatted = '';
    //     if (input.length > 0) formatted += input.slice(0, 3);
    //     if (input.length > 2) formatted += '' + input.slice(3, 4);

    //     setValue(formatted);
    // };

    //Api integration
    const router = useRouter();
    const params = useSearchParams();
    const phone = params.get('phone');

    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (!phone) {
            router.replace('/auth/phone');
        }
    }, [phone]);

    // const handleVerify = async () => {
    //     const res = await fetch('/api/verify-otp', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ phone, otp }),
    //     });

    //     if (res.ok) {
    //         const data = await res.json();
    //         // You can store token or userId here
    //         router.push('/adminPage');
    //     } else {
    //         setError('Invalid OTP');
    //     }

    //     console.log(res)
    // };

    // DOES NOT STORE THE TOKEN
    // const handleVerify = async () => {
    //     try {
    //         const res = await fetch('/api/verify-otp', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ phone, otp }),
    //         });

    //         if (res.ok) {
    //             const data = await res.json();

    //             console.log('Response data:', data); // 🔍 Check the token here

    //             if (data.token) {
    //                 // Store token if needed
    //                 localStorage.setItem('authToken', data.token); // optional

    //                 // Redirect
    //                 router.push('/adminPage');
    //             } else {
    //                 setError('No token received from server.');
    //             }
    //         } else {
    //             const errorData = await res.json();
    //             console.error('Verification failed:', errorData);
    //             setError(errorData.message || 'Invalid OTP');
    //         }
    //     } catch (err) {
    //         console.error('Error verifying OTP:', err);
    //         setError('An unexpected error occurred');
    //     }
    // };

    const handleVerify = async () => {
        try {
            const res = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, otp }),
            });

            if (res.ok) {
                const data = await res.json();

                if (data.token) {
                    // 🔐 Store token in sessionStorage
                    sessionStorage.setItem('authToken', data.token);

                    // Redirect to protected route
                    router.push('/adminPage');
                } else {
                    setError('No token received from server.');
                }
            } else {
                const errorData = await res.json();
                setError(errorData.message || 'Invalid OTP');
            }
        } catch (err) {
            console.error('Error verifying OTP:', err);
            setError('An unexpected error occurred');
        }
    };

    // TO RETRIEVE THE TOKEN
    //     const token = sessionStorage.getItem('authToken');

    // const res = await fetch('/api/protected', {
    //     headers: {
    //         'Authorization': `Bearer ${token}`,
    //     },
    // });




    if (!phone) return null;

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
                <div className='hidden lg:block w-[100vw] mx-auto bg-[#f6f5f5] dark:bg-black py-[30px]'>
                    <div className=' w-[70%] m-auto'>

                        <div className=' text-[#0000008C] dark:text-slate-600 text-sm mb-[4px]'>
                            {
                                validOTP ?
                                    (
                                        <p className=" text-red-400 font-medium">Please enter a valid OTP</p>
                                    )
                                    :
                                    (
                                        <p> Enter OTP</p>
                                    )
                            }
                        </div>

                        <form className=' font-bold text-2xl mb-[10px] flex items-center'>
                            {/* <select name="" id="" className=' mr-[2px]'>
                                <option value="+996">+996</option>
                            </select> */}
                            <input id="custom-number"
                                type="text"
                                inputMode="numeric"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder='_ _ _ _' className='bg-transparent appearance-none focus:outline-none text-black' />
                        </form>
                        <h1 className=' mb-4 text-sm text-black dark:text-slate-600'>Resend OTP in <span className=' text-[#ab4fa8]'>01:59 sec</span></h1>

                        <div className=' w-full flex items-center justify-between'>
                            {/* {
                                isComplete ? */}
                                    (<button onClick={handleVerify} className=' w-[49%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black dark:hover:bg-[#AB4FA8]/60 duration-500'>Verify</button>)
                            {/* //         :
                            //         (<button onClick={() => setValidOTP(true)} className=' cursor-pointer w-[49%] text-center bg-blue-500 text-white/60 py-[10px] px-[100px] rounded-md hover:bg-[#1B1B1B] duration-500'>Verify</button>)
                            // } */}
                            <Link href="/" className=' w-[49%] text-center bg-red-500 text-white py-[10px] px-[100px] rounded-md hover:bg-red-500/60 duration-500'>Cancel</Link>
                        </div>
                    </div>
                </div>

                <div className=' lg:hidden w-screen bg-white dark:bg-black py-[10px] rounded-t-2xl block px-[10px]'>
                    <Link href={"/auth/phone"} className=' mx-auto block h-[4px] w-[32px] rounded-full bg-[#0000001A] dark:bg-[#FFFFFF1A] dark:border dark:border-[#FFFFFF00] mb-[20px]'></Link>
                    <div className=' text-[#0000008C] dark:text-slate-600 text-[13px] mb-[4px]'>
                        {
                            validOTP ?
                                (
                                    <p className=" text-red-400 font-medium">Please enter a valid OTP</p>
                                )
                                :
                                (
                                    <p> Enter OTP</p>
                                )
                        }
                    </div>

                    <form className=' font-bold text-2xl mb-[10px] flex items-center'>
                        {/* <select name="" id="" className=' mr-[2px]'>
                                <option value="+996">+996</option>
                            </select> */}
                        <input id="custom-number"
                            type="text"
                            inputMode="numeric"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder='_ _ _ _' className='bg-transparent appearance-none focus:outline-none text-black' />
                    </form>

                    <h1 className=' mb-4 text-[14px] text-black dark:text-slate-600'>Resend OTP in <span className=' text-[#ab4fa8]'>01:59 sec</span></h1>

                    <button onClick={handleVerify} className=' mb-[10px] text-[15px] font-bold block w-full text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Verify</button>
                    <Link href="/" className=' w-full mb-[10px] text-[15px] font-bold block text-center bg-red-500 text-white py-[10px] px-[100px] rounded-md hover:bg-red-500/60 duration-500'>Cancel</Link>
                </div>
            </div>
        </div>
    )
}

export default page