export default function Footer() {
    return (
        <footer className="bg-gray-900 px-4 py-12 text-white">
            <div className="mx-auto max-w-5xl">

                {/* Top Section */}
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                    {/* Logo & Copyright */}
                    <div>
                        <h3 className="text-xl font-bold">Ankur</h3>
                        <p className="mt-2 text-gray-400">Full Stack Developer & AI/ML Engineer</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a href="https://github.com/ankur0704" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="#" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="#" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            Twitter
                        </a>
                    </div>

                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-700"></div>

                {/* Bottom Section */}
                <div className="text-center text-gray-400">
                    <p>© 2026 Ankur. All rights reserved.</p>
                    <p className="mt-2 text-sm">Built with Next.js & Tailwind CSS</p>
                </div>

            </div>
        </footer>
    );
}