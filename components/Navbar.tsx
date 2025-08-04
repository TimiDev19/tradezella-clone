"use client"
import React, { useState } from 'react'
import ellipse6 from "@/assets/Ellipse 6.png"
import Link from 'next/link'
import Image from 'next/image'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => {
    const [agent, setAgent] = useState(true)
    const [settings, setSettings] = useState(false)
    const [showSettings, setShowSettings] = useState(true)
    const [showNotifications, setShowNotifications] = useState(true)
    const [notifications, setNotificaions] = useState(false)

    const agentLink = () => {
        setSettings(false)
        setNotificaions(false)
        setAgent(true)
        setShowNotifications(true)
        setShowSettings(true)
    }

    const settingsLink = () => {
        setNotificaions(false)
        setAgent(false)
        setSettings(true)
        setShowNotifications(false)
    }

    const notificationsLink = () => {
        setSettings(false)
        setAgent(false)
        setNotificaions(true)
        setShowSettings(false)
    }
    return (
        <div className=' h-[100vh] w-[100vw] absolute flex flex-col items-center justify-end z-[20] bg-slate-900/60'>
            <div className=' h-[150px] w-full bg-[#f6f5f5] dark:bg-black flex items-center justify-center'>
                <Link
                    onClick={() => settingsLink()}
                    href={"/settings"}
                    className={`p-1 ${showSettings ? 'block' : 'hidden'} ${settings ? `border border-white rounded-full` : `text-[#1B1B1B] border-[#1B1B1B] border rounded-full`} mx-[20px]  w-[60px] h-[60px] hover:h-[70px] flex items-center justify-center hover:w-[70px] duration-700`}
                >
                    <SettingsOutlinedIcon
                        fontSize="large"
                    />
                </Link>

                <Link
                    onClick={() => agentLink()}
                    href={"/adminPage"}
                    className={`p-1 ${agent && `border border-black dark:border-white rounded-full`} mx-[20px]`}
                >
                    <Image
                        src={ellipse6}
                        alt=''
                        className={` w-[60px] hover:w-[70px] duration-700`}
                    />
                </Link>

                <Link
                    onClick={() => notificationsLink()}
                    href={"/notifications"}
                    className={`p-1 ${showNotifications ? 'block' : 'hidden'} ${notifications ? `border border-white rounded-full` : `text-[#1B1B1B] border-[#1B1B1B] border rounded-full`} mx-[20px]  w-[60px] h-[60px] hover:h-[70px] flex items-center justify-center hover:w-[70px] duration-700`}
                >
                    <NotificationsNoneOutlinedIcon
                        fontSize="large"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Navbar