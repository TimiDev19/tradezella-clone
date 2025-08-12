"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar'
import { IconCompass } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import { IconSun } from '@tabler/icons-react';
import { IconFile } from '@tabler/icons-react';
import { IconShield } from '@tabler/icons-react';
import { IconInfoCircle } from '@tabler/icons-react';
import ChangeLanguageModal from '@/app/modals/ChangeLanguageModal'
import TermsAndConditionsModal from '@/app/modals/TermsAndConditionsModal'
import PrivacyPolicyModal from '@/app/modals/PrivacyPolicyModal'
import LogoutModal from '@/app/modals/LogoutModal'
import DeleteAccountModal from '@/app/modals/DeleteAccountModal'
import useDarkMode from '@/hooks/useDarkmode'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nConfig from '@/next-i18next.config';
import { useTranslation } from 'next-i18next';


const page = () => {
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (!token) {
            router.replace('/');
        }
    }, []);


    const { theme, toggleTheme } = useDarkMode();

    const [value, setValue] = useState('');
    const [notificationsOn, setNotificationsOn] = useState(true)
    const [darkMode, setDarkMode] = useState(true)

    const [laguageModalOpen, setIsLanguageModalOpen] = useState(false)
    const [termsAndConditionsModalOpen, setIsTermsAndConditionsModalOpen] = useState(false)
    const [privacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] = useState(false)
    const [logoutModalOpen, setIsLogoutModalOpen] = useState(false)
    const [deleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false)

    console.log({ laguageModalOpen })




    const length: number = 0

    return (
        <div className='bg-white dark:bg-[#000000] relative flex items-start justify-center h-screen w-screen'>
            <div className=' h-[calc(100vh-150px)] overflow-y-scroll bg-white dark:bg-black w-full z-[25] flex flex-col items-center justify-end'>
                <div className=' w-full lg:w-[70%] mx-auto h-[90%] text-black dark:text-white rounded-2xl px-[7px] lg:px-[30px]'>
                    <h1 className=' font-extrabold text-4xl mb-[10px]'>Settings</h1>
                    <div className=' w-full h-full flex flex-col items-center justify-start text-slate-500 dark:text-white/60'>
                        <button
                            onClick={() => setIsLanguageModalOpen(true)}
                            className=' cursor-pointer w-full  flex items-center justify-between h-[80px mb-[10px]]'
                        >
                            <div className=' lg:w-[8%] max-sm:mr-[10px] pb-[10px] h-full flex items-center justify-center'>
                                <div className=" lg:h-[60px] lg:w-[60px] h-[50px] w-[50px] rounded-full bg-[#E8E8E8] dark:bg-white/10 flex items-center justify-center">
                                    <IconCompass size={32} stroke={1} />
                                </div>
                            </div>

                            <div className=' text-left w-[90%] h-full flex items-center justify-center border-b border-b-slate-400 dark:border-b-white/50 pb-[10px]'>
                                <div className=' w-full'>
                                    <h1 className=' text-black dark:text-white font-bold text-[16px] lg:text-xl'>Choose a language</h1>
                                    <p className=' text-slate-400 dark:text-white/60 text-[13px] lg:text-sm'>Choose the preferred language</p>
                                </div>
                            </div>
                        </button>

                        <button
                            className=' cursor-pointer w-full  flex items-center justify-between h-[80px] mb-[10px]'
                        >
                            <div className=' lg:w-[8%] wfit pb-[10px] h-full flex items-center justify-center'>
                                <div className=" lg:h-[60px] max-sm:mr-2 lg:w-[60px] h-[50px] w-[50px] rounded-full bg-[#E8E8E8] dark:bg-white/10 flex items-center justify-center">
                                    <IconBell size={32} stroke={1} />
                                </div>
                            </div>

                            <div className=' text-left w-[90%] h-full flex items-center justify-center border-b border-b-slate-400 dark:border-b-white/50 pb-[10px]'>
                                <div className=' w-full flex items-center justify-between'>
                                    <div>
                                       <h1 className=' text-black dark:text-white font-bold text-[16px] lg: text-xl'>Notifications</h1>
                                        <p className=' text-slate-400 dark:text-white/60 text-[13px] lg:text-sm'>Let us inform you about special offers</p>
                                    </div>

                                    <div onClick={() => setNotificationsOn(!notificationsOn)} className={`duration-500 cursor-pointer w-[42px] p-1 h-[24px] rounded-full flex items-center ${notificationsOn ? 'justify-end bg-[#AB4FA8]' : 'justify-start bg-[#E8E8E8] dark:bg-[#AB4FA8]'}`}>
                                        <div className=' h-[20px] w-[20px] rounded-full bg-white'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button
                            className=' cursor-pointer w-full  flex items-center justify-between h-[80px] mb-[10px]'
                        >
                            <div className=' lg:w-[8%] w-fit pb-[10px] h-full flex items-center justify-center'>
                                <div className=" max-sm:mr-2 lg:h-[60px] lg:w-[60px] h-[50px] w-[50px] rounded-full bg-[#E8E8E8] dark:bg-white/10 flex items-center justify-center">
                                    <IconSun size={32} stroke={1} />
                                </div>
                            </div>

                            <div className=' text-left w-[90%] h-full flex items-center justify-center border-b border-b-slate-400 dark:border-b-white/50 pb-[10px]'>
                                <div className=' w-full flex items-center justify-between'>
                                    <div>
                                        <h1 className=' text-black dark:text-white font-bold text-[16px] lg:text-xl'>Dark Mode</h1>
                                        <p className=' text-slate-400 dark:text-white/60 text-[13px] lg:text-sm'>Enable dark mode</p>
                                    </div>

                                    <div onClick={toggleTheme} className={`duration-500 cursor-pointer w-[42px] p-1 h-[24px] rounded-full flex items-center dark:justify-end dark:bg-[#AB4FA8] justify-start bg-[#E8E8E8]`}>
                                        <div className=' h-[20px] w-[20px] rounded-full bg-white'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        {/* <h1
                            onClick={toggleTheme}
                            className="p-2 rounded bg-gray-200 dark:bg-gray-800"
                        >
                            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
                        </h1> */}

                        <button
                            onClick={() => setIsTermsAndConditionsModalOpen(true)}
                            className=' cursor-pointer w-full  flex items-center justify-between h-[80px] mb-[10px]'
                        >
                            <div className=' lg:w-[8%] max-sm:mr-[10px] pb-[10px] h-full flex items-center justify-center'>
                                <div className=" lg:h-[60px] lg:w-[60px] h-[50px] w-[50px] rounded-full bg-[#E8E8E8] dark:bg-white/10 flex items-center justify-center">
                                    <IconFile size={32} stroke={1} />
                                </div>
                            </div>

                            <div className=' text-left w-[90%] h-full flex items-center justify-center border-b border-b-slate-400 dark:border-b-white/50 pb-[10px]'>
                                <div className=' w-full'>
                                    <h1 className=' text-black dark:text-white font-bold text-[16px] lg:text-xl'>Terms & conditions</h1>
                                    <p className=' text-slate-400 dark:text-white/60 text-[13px] lg:text-sm'>View our terms & conditions</p>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => setIsPrivacyPolicyModalOpen(true)}
                            className=' cursor-pointer w-full  flex items-center justify-between h-[80px] mb-[10px]'
                        >
                            <div className=' lg:w-[8%] max-sm:mr-[10px] pb-[10px] h-full flex items-center justify-center'>
                                <div className=" lg:h-[60px] lg:w-[60px] h-[50px] w-[50px] rounded-full bg-[#E8E8E8] dark:bg-white/10 flex items-center justify-center">
                                    <IconShield size={32} stroke={1} />
                                </div>
                            </div>

                            <div className=' text-left w-[90%] h-full flex items-center justify-center border-b border-b-slate-400 dark:border-b-white/50 pb-[10px]'>
                                <div className=' w-full'>
                                    <h1 className=' text-black dark:text-white font-bold text-[16px] lg:text-xl'>Privacy Policy</h1>
                                    <p className=' text-slate-400 dark:text-white/60 text-[13px] lg:text-sm'>View our privacy policy</p>
                                </div>
                            </div>
                        </button>

                        <button
                            className=' cursor-pointer w-full  flex items-center justify-between h-[80px] mb-[10px]'
                        >
                            <div className=' lg:w-[8%] max-sm:mr-[10px] pb-[10px] h-full flex items-center justify-center'>
                                <div className=" lg:h-[60px] lg:w-[60px] h-[50px] w-[50px] rounded-full bg-[#E8E8E8] dark:bg-white/10 flex items-center justify-center">
                                    <IconInfoCircle size={32} stroke={1} />
                                </div>
                            </div>

                            <div className=' text-left w-[90%] h-full flex items-center justify-center border-b border-b-slate-400 dark:border-b-white/50 pb-[10px]'>
                                <div className=' w-full'>
                                    <h1 className=' text-black dark:text-white font-bold text-[16px] lg:text-xl'>About Agent X</h1>
                                    <p className=' text-slate-400 dark:text-white/60 text-[13px] lg:text-sm'>Learn about Agent X</p>
                                </div>
                            </div>
                        </button>

                        <div className=' w-full flex items-center justify-center'>
                            <button
                                onClick={() => setIsDeleteAccountModalOpen(true)}
                                className=' text-red-500 max-sm:font-bold hover:text-red-500/60 duration-500 mx-[5px]'
                            >
                                Delete Account
                            </button>

                            <button
                                onClick={() => setIsLogoutModalOpen(true)}
                                className=' text-[#AB4FA8] max-sm:font-bold hover:text-[#AB4FA8]/60 mx-[5px] duration-500'
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />

            {
                laguageModalOpen && <ChangeLanguageModal setIsLanguageModalOpen={setIsLanguageModalOpen} />
            }

            {
                termsAndConditionsModalOpen && <TermsAndConditionsModal setIsTermsAndConditionsModalOpen={setIsTermsAndConditionsModalOpen} />
            }

            {
                privacyPolicyModalOpen && <PrivacyPolicyModal setIsPrivacyPolicyModalOpen={setIsPrivacyPolicyModalOpen} />
            }

            {
                logoutModalOpen && <LogoutModal setIsLogoutModalOpen={setIsLogoutModalOpen} />
            }

            {
                deleteAccountModalOpen && <DeleteAccountModal setIsDeleteAccountModalOpen={setIsDeleteAccountModalOpen} />
            }
        </div>
    )
}

export default page

