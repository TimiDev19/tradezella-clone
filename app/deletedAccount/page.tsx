import React from 'react'
import { IconCheck } from '@tabler/icons-react';
import Link from 'next/link';

const page = () => {
    return (
        <div className=' w-screen h-screen bg-black flex items-center justify-center'>
            <div className=' flex flex-col items-center justify-center text-white/30'>
                <div className=' text-white/30 p-5 border border-white/30 rounded-full mb-[10px]'>
                    <IconCheck size={68} stroke={1} className='' />
                </div>
                <h1 className=' text-white font-extrabold text-3xl mb-4'>Account Deleted Successfully</h1>
                <p>YourAgent X account has been deleted successfully</p>
                <Link href={"/"} className=' mt-4 mx-auto text-center bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-[#AB4FA8]/60 duration-500'>Done</Link>
            </div>
        </div>
    )
}

export default page