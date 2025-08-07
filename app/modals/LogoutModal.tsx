import Link from 'next/link'
import React from 'react'

import { useRouter } from 'next/navigation';

type LogoutModalProps = {
    setIsLogoutModalOpen: (open: boolean) => void;
};

const LogoutModal: React.FC<LogoutModalProps> = ({ setIsLogoutModalOpen }) => {

    const router = useRouter();

    const logout = () => {
        sessionStorage.removeItem('authToken');
        router.push('/');
    };
    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex flex-col items-center justify-end"
            onClick={
                (e) => {
                    if (e.target !== e.currentTarget) {
                        return
                    }
                    setIsLogoutModalOpen(false)
                }
            }
        >
            <div className=' h-fit w-full bg-white dark:bg-black rounded-t-3xl'>
                <div className=' h-full p-2 w-[98%] lg:w-[70%] mx-auto'>
                    <button onClick={() => setIsLogoutModalOpen(false)} className=' mb-[20px] block cursor-pointer w-[100px] h-[4px] rounded-full bg-slate-200 dark:bg-white/30 mx-auto'></button>
                    <h1 className=' font-extrabold text-[18px] lg:text-3xl lg:text-center mb-[10px] text-black dark:text-white'>Are you sure you want to logout?</h1>
                    <p className=' text-black dark:text-white/30 text-[13px] lg:text-center mb-[10px]'>help text will go here is one or two lines this is dummy text as of now</p>
                    <div className=' w-full lg:flex items-center justify-between'>
                        <button onClick={logout} className=' lg:hidden w-full mb-[10px] text-[15px] font-bold block text-center bg-red-500 text-white py-[10px] px-[100px] rounded-md hover:bg-red-500/60 duration-500'>Logout</button>
                        <button onClick={() => setIsLogoutModalOpen(false)} className=' lg:hidden mb-[10px] text-[15px] font-bold block w-full text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Cancel</button>
                        <button onClick={() => setIsLogoutModalOpen(false)} className=' max-sm:hidden w-[49%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Cancel</button>
                        <button onClick={logout} className='max-sm:hidden w-[49%] text-center bg-red-500 text-white py-[10px] px-[100px] rounded-md hover:bg-red-500/60 duration-500'>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutModal