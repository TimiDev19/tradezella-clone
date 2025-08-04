import Link from 'next/link'
import React from 'react'

type LogoutModalProps = {
    setIsLogoutModalOpen: (open: boolean) => void;
};

const LogoutModal: React.FC<LogoutModalProps> = ({ setIsLogoutModalOpen }) => {
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
                <div className=' h-full p-2 w-[70%] mx-auto'>
                    <button onClick={() => setIsLogoutModalOpen(false)} className=' mb-[20px] block cursor-pointer w-[100px] h-[4px] rounded-full bg-slate-200 dark:bg-white/30 mx-auto'></button>
                    <h1 className=' font-extrabold text-3xl text-center mb-[10px] text-black dark:text-white'>Are you sure you want to logout?</h1>
                    <p className=' text-black dark:text-white/30 text-center mb-[10px]'>help text will go here is one or two lines this is dummy text as of now</p>
                    <div className=' w-full flex items-center justify-between'>
                        <button onClick={() => setIsLogoutModalOpen(false)} className=' w-[49%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Cancel</button>
                        <Link href="/" className=' w-[49%] text-center bg-red-500 text-white py-[10px] px-[100px] rounded-md hover:bg-red-500/60 duration-500'>Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutModal