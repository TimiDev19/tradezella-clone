import Link from 'next/link'
import React from 'react'

type LogoutModalProps = {
    setIsLogoutModalOpen: (open: boolean) => void;
};

const LogoutModal: React.FC<LogoutModalProps> = ({ setIsLogoutModalOpen }) => {
    return (
        <div
            className='fixed right-0 left-0 top-0 bottom-0 px-2 py-4 overflow-scroll z-50 flex-col justify-end items-center flex bg-[#00000080] scrollbar-hide'
            onClick={
                (e) => {
                    if (e.target !== e.currentTarget) {
                        return
                    }
                    setIsLogoutModalOpen(false)
                }
            }
        >
            <div className=' h-fit w-full bg-black rounded-t-3xl'>
                <div className=' h-full p-2 w-[70%] mx-auto'>
                    <button onClick={() => setIsLogoutModalOpen(false)} className=' mb-[20px] block cursor-pointer w-[100px] h-[4px] rounded-full bg-white/30 mx-auto'></button>
                    <h1 className=' font-extrabold text-3xl mb-[10px]'>Are you sure you want to logout?</h1>
                    <p className=' text-white/30 mb-[10px]'>help text will go here is one or two lines this is dummy text as of now</p>
                    <div className=' w-full flex items-center justify-between'>
                        <button onClick={() => setIsLogoutModalOpen(false)} className=' w-[49%] text-center bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-[#AB4FA8]/60 duration-500'>Cancel</button>
                        <Link href="/" className=' w-[49%] text-center bg-red-500 text-white py-[10px] px-[100px] rounded-md hover:bg-red-500/60 duration-500'>Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutModal