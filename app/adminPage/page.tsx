"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ellipse from "@/assets/Ellipse 17.png"
import ellipse1 from "@/assets/Ellipse 16.png"
import ellipse2 from "@/assets/Ellipse 15.png"
import ellipse3 from "@/assets/Ellipse 14.png"
import ellipse4 from "@/assets/Ellipse 13.png"
import ellipse5 from "@/assets/Ellipse 12.png"
import ellipse6 from "@/assets/Ellipse 6.png"
import logo from "@/assets/logo.png"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const page = () => {
    const [value, setValue] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [validOTP, setValidOTP] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, ''); // Strip non-digits
        input = input.slice(0, 4); // Max 10 digits

        // Set completion state
        setIsComplete(input.length === 4);

        // Format: 00 0000 0000
        let formatted = '';
        if (input.length > 0) formatted += input.slice(0, 3);
        if (input.length > 2) formatted += '' + input.slice(3, 4);

        setValue(formatted);
    };

    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (!token) {
            router.replace('/');
        }
    }, []);

    return (
        <div className=' w-screen h-screen bg-[#000000] relative flex items-start justify-center'>
            <div className=' h-[calc(100vh-150px)] bg-[#f6f5f5] dark:bg-black w-full z-[25] flex flex-col items-center justify-end'>
                <div className=' w-[70%] mx-auto h-[60px] bg-[#E6E6E6] dark:bg-[#1B1B1B] text-[#9E9E9E] dark:text-white rounded-2xl px-[30px] flex items-center justify-between'>
                    <input
                        type="text"
                        placeholder='Send message'
                        className=' w-[90%] h-full focus:outline-none bg-transparent text-black dark:text-white'
                    />
                    <SendRoundedIcon className=' cursor-pointer' />
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default page