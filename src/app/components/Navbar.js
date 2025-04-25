"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Bars4Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {useState} from "react";

export default function Navbar() {
    // Hooks
    const [menuOpen, setMenuOpen] = useState(false)

    // Variables
    const linkClass = "px-[12px]";
    const activeLinkClass = "text-[var(--green)] md:text-[var(--white)] underline";

    // Checking paths
    const pathname = usePathname();

    // Path Arrays
    const paths = [
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "About Us",
            "path": "/about-us"
        },
        {
            "name": "Our Work",
            "path": "/our-work"
        },
        {
            "name": "Contact Us",
            "path": "/contact-us"
        }
    ]

    return (
        <header className="bg-white shadow-md fixed top-0 w-full z-50">
            <div
                className="flex flex-row justify-between bg-[var(--blue)] px-[32px] py-[12px] text-[var(--lightblue)] h-[64px]">
                <div className="flex flex-row justify-start items-center">
                    <Image width="40" height="40" src="/images/bengusa.png" alt="lacha"/>
                    <div className="text-2xl ml-[16px] text-white">bengUSA.pro</div>
                </div>
                <nav className="hidden md:flex flex-row justify-end items-center">
                    {paths.map((item, index) => {
                        return (
                            <Link key={`navlink-${index}`}
                                  className={`${linkClass} ${(item.path == pathname) ? activeLinkClass : ''}`}
                                  href={item.path}>{item.name}</Link>
                        )
                    })}
                </nav>
                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <XMarkIcon className="w-6 h-6 text-white"/> :
                        <Bars4Icon className="w-6 h-6 text-white"/>}
                </button>
            </div>

            {/* Mobile Side Menu */}
            <div
                className={`fixed top-[70] text-black right-0 h-full w-64 bg-[var(--lightblue)] shadow-lg p-6 transition-transform duration-300 z-40 ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <nav className="flex flex-col gap-4">
                    {paths.map((item, index) => {
                        return (
                            <Link key={`navlinkmobile-${index}`}
                                  className={`${linkClass} ${(item.path == pathname) ? activeLinkClass : ''}`}
                                  href={item.path} onClick={() => setMenuOpen(false)}>{item.name}</Link>
                        )
                    })}
                </nav>
            </div>

            {menuOpen && (
                <div
                    className="fixed inset-0 z-30 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    )
}