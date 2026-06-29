"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiDribbble, FiTwitter } from "react-icons/fi";
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};
export default function Footer() {
    const currentYear = new Date().getFullYear();



    return (
        <footer className="bg-card text-foreground border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-0.5">
                            <span className="text-xl font-bold tracking-widest text-foreground">VOID</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></span>
                            <span className="text-xl font-light tracking-widest text-foreground">STUDIO</span>
                        </div>
                        <p className="text-sm text-muted max-w-sm">
                            We are a design agency shaping digital identities and premium interfaces for ambitious brands that demand attention.
                        </p>
                    </div>

                    {/* Navigation Links Column */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">
                            Explore
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection("services")}
                                    className="text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("portfolio")}
                                    className="text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
                                >
                                    Work
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Social links Column */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">
                            Socials
                        </h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full border border-border text-muted hover:text-foreground hover:border-foreground transition-all cursor-pointer"
                                aria-label="Github"
                            >
                                <FiGithub size={18} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full border border-border text-muted hover:text-foreground hover:border-foreground transition-all cursor-pointer"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin size={18} />
                            </a>
                            <a
                                href="https://dribbble.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full border border-border text-muted hover:text-foreground hover:border-foreground transition-all cursor-pointer"
                                aria-label="Dribbble"
                            >
                                <FiDribbble size={18} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full border border-border text-muted hover:text-foreground hover:border-foreground transition-all cursor-pointer"
                                aria-label="Twitter"
                            >
                                <FiTwitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Subfooter */}
                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                        &copy; {currentYear} VOID.STUDIO. All rights reserved. Built with Next.js and Tailwind CSS.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/" className="text-xs text-muted hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/" className="text-xs text-muted hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
