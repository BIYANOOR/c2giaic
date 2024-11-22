"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-green-600 text-white py-2 px-6 relative">
            <div className="container mx-auto flex items-center justify-between">
                <div className="relative flex items-center">
                    <div className="absolute -bottom-4">
                        <Image
                            src="/logo2.png" // Replace with your logo image path
                            alt="Logo"
                            width={80} // Increased width for better visibility
                            height={80} // Increased height for better visibility
                            className="rounded-full object-cover"
                        />
                    </div>
                    <span className="ml-24 text-xl font-semibold">Sobia Furqan&apos;s</span> {/* Adjusted margin to avoid overlap */}
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/" legacyBehavior>
                        <a className="hover:text-green-300">Home</a>
                    </Link>
                    <Link href="/about" legacyBehavior>
                        <a className="hover:text-green-300">About</a>
                    </Link>
                    <Link href="/suggestions" legacyBehavior>
                        <a className="hover:text-green-300">Suggestions</a>
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-green-600 text-white py-2 px-4">
                    <Link href="/" legacyBehavior>
                        <a className="block py-2 hover:text-green-300">Home</a>
                    </Link>
                    <Link href="/about" legacyBehavior>
                        <a className="block py-2 hover:text-green-300">About</a>
                    </Link>
                    <Link href="/suggestions" legacyBehavior>
                        <a className="block py-2 hover:text-green-300">Suggestions</a>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
