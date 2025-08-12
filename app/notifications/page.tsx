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

// interface Notifications {
//     _id: string;
//     subject: string;
//     question: string;
//     updatedAt: string;
// }

const page = () => {
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (!token) {
            router.replace('/');
        }
    }, []);
    const [value, setValue] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [validOTP, setValidOTP] = useState(false)

    // ------------TO PULL THE NOTIFICATIONS------------ 
    // const [notifications, setNotifications] = useState<Notifications[]>([]);    
    // useEffect(() => {
    //     fetch("https://toa-hephzibah-backend.onrender.com/api/assignment").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             const formattedData = data.map((assignment: any) => ({
    //                 ...assignment,
    //             }));

    //             setNotifications(formattedData);
    //         }
    //     ).catch((error) => console.error('Error fetching courses:', error));
    // }, [])

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
    const length: number = 0

    return (
        <div className=' w-screen h-screen bg-[#000000] relative flex items-start justify-center'>
            <div className=' h-[calc(100vh-150px)] bg-[#f6f5f5] dark:bg-black w-full z-[25] flex flex-col items-center justify-end'>
                <div className=' w-full lg:w-[70%] mx-auto h-[90%] text-black dark:text-white rounded-2xl px-[30px]'>
                    <h1 className=' font-extrabold text-4xl'>Notifications</h1>
                    <div className=' w-full h-full flex items-center justify-center text-black dark:text-white/60'>
                        {length === 0 && <p>No notifications yet</p>}
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default page