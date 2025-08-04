import React from 'react'

type ChangeLanguageModalProps = {
    setIsLanguageModalOpen: (open: boolean) => void;
};

const ChangeLanguageModal: React.FC<ChangeLanguageModalProps> = ({ setIsLanguageModalOpen }) => {
    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex flex-col items-center justify-end"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setIsLanguageModalOpen(false);
                }
            }}
        >
            <div className=' h-[60vh] w-full bg-white dark:bg-black rounded-t-3xl p-2'>
                <button onClick={() => setIsLanguageModalOpen(false)} className=' mb-[20px] block cursor-pointer w-[100px] h-[4px] rounded-full bg-slate-200 dark:bg-white/30 mx-auto'></button>
                <h1 className=' font-extrabold text-3xl text-center mb-[10px] text-black dark:text-white'>Choose a language</h1>
                <p className=' text-white/30 text-center mb-[10px]'>Choose preferred language for you</p>
                <div className=' max-w-[750px] mx-auto grid grid-cols-2 '>
                    <button className=' h-[52px] w-[350px] bg-black dark:bg-[#AB4FA8] text-white rounded-xl cursor-pointer mb-[15px] block'>English</button>
                    <button className=' h-[52px] w-[350px] bg-[#E9E9E9] dark:bg-white/30 hover:bg-black dark:hover:bg-[#AB4FA8] duration-500 text-black hover:text-white dark:text-white rounded-xl cursor-pointer mb-[15px]'>française</button>
                    <button className=' h-[52px] w-[350px] bg-[#E9E9E9] dark:bg-white/30 hover:bg-black dark:hover:bg-[#AB4FA8] duration-500 text-black hover:text-white dark:text-white rounded-xl cursor-pointer mb-[15px]'>العربية</button>
                    <button className=' h-[52px] w-[350px] bg-[#E9E9E9] dark:bg-white/30 hover:bg-black dark:hover:bg-[#AB4FA8] duration-500 text-black hover:text-white dark:text-white rounded-xl cursor-pointer mb-[15px]'>português</button>
                    <button className=' h-[52px] w-[350px] bg-[#E9E9E9] dark:bg-white/30 hover:bg-black dark:hover:bg-[#AB4FA8] duration-500 text-black hover:text-white dark:text-white rounded-xl cursor-pointer mb-[15px]'>普通话</button>
                    <button className=' h-[52px] w-[350px] bg-[#E9E9E9] dark:bg-white/30 hover:bg-black dark:hover:bg-[#AB4FA8] duration-500 text-black hover:text-white dark:text-white rounded-xl cursor-pointer mb-[15px]'>española</button>
                    <button className=' h-[52px] w-[350px] bg-[#E9E9E9] dark:bg-white/30 hover:bg-black dark:hover:bg-[#AB4FA8] duration-500 text-black hover:text-white dark:text-white rounded-xl cursor-pointer mb-[15px]'>हिंदी</button>
                    <button className=' h-[52px] w-[350px] bg-[#E9E9E9] dark:bg-white/30 hover:bg-black dark:hover:bg-[#AB4FA8] duration-500 text-black hover:text-white dark:text-white rounded-xl cursor-pointer mb-[15px]'>Deutsch</button>
                    <button className=' h-[52px] w-[350px] bg-[#E9E9E9] dark:bg-white/30 hover:bg-black dark:hover:bg-[#AB4FA8] duration-500 text-black hover:text-white dark:text-white rounded-xl cursor-pointer mb-[15px]'>اردو</button>
                    <button className=' h-[52px] w-[350px] bg-[#E9E9E9] dark:bg-white/30 hover:bg-black dark:hover:bg-[#AB4FA8] duration-500 text-black hover:text-white dark:text-white rounded-xl cursor-pointer mb-[15px]'>Deutsch</button>
                </div>
            </div>
        </div>
    )
}

export default ChangeLanguageModal