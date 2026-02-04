"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
            <div className="mx-auto max-w-5xl px-4">
                <div className="flex h-17 items-center justify-between">

                    {/* logo */}
                    <Link href="/" className="text-xl font-bold text-gray-900">Ankur</Link>

                    {/* navigation links */}
                    <div className="gap-8 flex">
                        <a href="#about"
                            className="text-gray-600 hover:text-gray-900 transition-colors">
                            About
                        </a>
                        <a href="#skills"
                            className="text-gray-600 hover:text-gray-900 transition-colors">
                            Skills
                        </a>
                        <a href="#projects"
                            className="text-gray-600 hover:text-gray-900 transition-colors">
                            Projects
                        </a>
                        <a href="#contact"
                            className="text-gray-600 hover:text-gray-900 transition-colors">
                            Contact
                        </a>

                    </div>

                </div>
            </div>

        </nav>
    )
}