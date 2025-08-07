import Link from 'next/link'
import React from 'react'

import { useRouter } from 'next/navigation';

type DeleteAccountModalProps = {
    setIsDeleteAccountModalOpen: (open: boolean) => void;
};

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({ setIsDeleteAccountModalOpen }) => {
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
                    setIsDeleteAccountModalOpen(false)
                }
            }
        >
            <div className=' h-fit w-full bg-white dark:bg-black rounded-t-3xl'>
                <div className=' h-full p-2 w-[98%] lg:w-[70%] mx-auto'>
                    <button onClick={() => setIsDeleteAccountModalOpen(false)} className=' mb-[20px] block cursor-pointer w-[100px] h-[4px] rounded-full bg-white/30 mx-auto'></button>
                    <h1 className=' font-extrabold text-[18px] lg:text-3xl lg:text-center mb-[10px] text-black dark:text-white'>Reason for deletion?</h1>
                    <p className=' text-black dark:text-white/30 text-[13px] lg:text-center mb-[10px]'>Please select your reason for delting your Agent X account</p>
                    <form className=' text-black dark:text-white/30 w-full'>
                        <p>Reason*</p>
                        <select name="" id="" className=' text-[22px] lg:text-3xl w-full focus:outline-none mb-[10px]'>
                            <option value="Select">Select</option>
                        </select>
                    </form>
                    <div className=' w-full lg:flex items-center justify-between'>
                        <Link href="/deletedAccount" className='lg:hidden w-full mb-[10px] text-[15px] font-bold block text-center bg-red-500 text-white py-[10px] px-[100px] rounded-md hover:bg-red-500/60 duration-500'>Delete</Link>
                        <button onClick={() => setIsDeleteAccountModalOpen(false)} className=' lg:hidden mb-[10px] text-[15px] font-bold block w-full text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Cancel</button>
                        <button onClick={() => setIsDeleteAccountModalOpen(false)} className=' max-sm:hidden w-[49%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Cancel</button>
                        <Link href="/deletedAccount" className='max-sm:hidden w-[49%] text-center bg-red-500 text-white py-[10px] px-[100px] rounded-md hover:bg-red-500/60 duration-500'>Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccountModal