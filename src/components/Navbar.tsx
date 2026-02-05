"use client";

import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-neutral-700">
            <div className="mx-auto max-w-5xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* logo */}
                    <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                        Ankur
                    </Link>

                    {/* navigation links */}
                    <div className="gap-8 flex items-center">
                        <a
                            href="#about"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#skills"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Contact
                        </a>

                        {/* Animated theme toggle */}
                        <AnimatedThemeToggler className="rounded-lg bg-gray-200 dark:bg-neutral-800 p-2 transition-colors hover:bg-gray-300 dark:hover:bg-neutral-700 text-gray-900 dark:text-white" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
