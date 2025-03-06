'use client'
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
    const [open, setOpen] = useState(false)

    return <>
        <header className="bg-[#FEA500] flex justify-between px-5 items-center text-white">
            <Link href={'/'} className="pointer">
                <h1 className="text-2xl font-sans font-extrabold">calchere.com</h1>
            </Link>
            <nav className={'hidden md:block'}>
                <ul className="flex  gap-5 text-xl font-medium overflow-hidden ">
                    <Link href={'/date'}><li className="hover:bg-white/30 transition duration-200 ease-in-out hover:text-black p-5 rounded-md">Date</li></Link>
                    <Link href={'/finance'}><li className="hover:bg-white/30 transition duration-150 ease-in-out hover:text-black p-5 rounded-md">Finance</li></Link>
                    <Link href={'/health'}><li className="hover:bg-white/30 transition duration-150 ease-in-out hover:text-black p-5 rounded-md">Health</li></Link>
                </ul>
            </nav>
            <button className="md:hidden" onClick={() => setOpen(!open)}>
                <Menu size={30} />
            </button>
            <nav className={`absolute transition-all duration-500 ease-in-out md:hidden overflow-hidden w-full top-[4.8rem]  left-0 bg-[#FEA500] 
                ${open ? 'translate-y-0 opacity-100' : ' translate-y-full opacity-0 '}`}>
                <ul className={`flex flex-col gap-5 text-xl font-medium overflow-hidden ${open == false && "hidden" }`}>
                    <Link href={'/date'} onClick={() => setOpen(false)}>
                        <li className="hover:bg-white/30 transition duration-200 ease-in-out hover:text-black p-5 rounded-md">Date</li>
                    </Link>
                    <Link href={'/finance'} onClick={() => setOpen(false)}>
                        <li className="hover:bg-white/30 transition duration-150 ease-in-out hover:text-black p-5 rounded-md">Finance</li>
                    </Link>
                    <Link href={'/health'} onClick={() => setOpen(false)}>
                        <li className="hover:bg-white/30 transition duration-150 ease-in-out hover:text-black p-5 rounded-md">Health</li>
                    </Link>
                </ul>
            </nav>
        </header>
    </>
}