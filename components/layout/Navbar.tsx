"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/layout/ThemeProvider";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import Button from "../common/Button";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-0.5 cursor-pointer">
                    <span className="text-xl font-bold tracking-widest text-foreground">VOID</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></span>
                    <span className="text-xl font-light tracking-widest text-foreground">STUDIO</span>
                </Link>

                {/* Central Links (Desktop) */}
                <div className="hidden md:flex items-center space-x-8">
                    <button
                        onClick={() => scrollToSection("services")}
                        className="text-sm font-medium text-muted hover:text-foreground transition-colors cursor-pointer"
                    >
                        Services
                    </button>
                    <button
                        onClick={() => scrollToSection("portfolio")}
                        className="text-sm font-medium text-muted hover:text-foreground transition-colors cursor-pointer"
                    >
                        Work
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="text-sm font-medium text-muted hover:text-foreground transition-colors cursor-pointer"
                    >
                        Contact
                    </button>
                </div>

                {/* Right side CTA & Theme (Desktop) */}
                <div className="hidden md:flex items-center space-x-5">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-foreground/5 transition-all duration-500 ease-in-out cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
                    </button>

                    <Button
                        variant="primary"
                        slanted={true}
                        onClick={() => scrollToSection("contact")}
                    >
                        Let's talk
                    </Button>
                </div>

                {/* Mobile Menu Trigger & Theme Toggle */}
                <div className="flex md:hidden items-center space-x-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-border py-4 px-6 absolute top-full left-0 right-0 shadow-lg flex flex-col space-y-4">
                    <button
                        onClick={() => scrollToSection("services")}
                        className="text-left py-2 font-medium text-muted hover:text-foreground transition-colors cursor-pointer"
                    >
                        Services
                    </button>
                    <button
                        onClick={() => scrollToSection("portfolio")}
                        className="text-left py-2 font-medium text-muted hover:text-foreground transition-colors cursor-pointer"
                    >
                        Work
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="text-left py-2 font-medium text-muted hover:text-foreground transition-colors cursor-pointer"
                    >
                        Contact
                    </button>
                    <Button
                        variant="primary"
                        slanted={true}
                        onClick={() => scrollToSection("contact")}
                        className="w-full justify-center"
                    >
                        Let's talk
                    </Button>
                </div>
            )}
        </nav>
    );
}
