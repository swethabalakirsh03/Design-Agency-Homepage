"use client";

import { motion, Variants } from "framer-motion";
import Button from "../common/Button";

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Animation settings
    const containerVariants: Variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            y: 30,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };


    const glowVariants: Variants = {
        animate: {
            scale: [1, 1.05, 1],
            opacity: [0.7, 0.9, 0.7],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background"
        >
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-overlay z-0" />

            {/* Glowing background circles for visual depth */}
            <motion.div
                variants={glowVariants}
                animate="animate"
                className="absolute inset-0 radial-glow z-0 pointer-events-none"
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* Upper Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center space-x-2 px-4 py-1.5 border border-accent/20 bg-accent/5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider text-accent uppercase mb-8"
                    >
                        <span className="text-accent">•</span>
                        <span>DESIGN STUDIO - EST. 2019</span>
                    </motion.div>

                    {/* Massive Bold Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter leading-[0.95] mb-8 text-foreground max-w-5xl flex flex-col items-center"
                    >
                        <span>We craft brands</span>
                        <span>that</span>
                        <span className="text-accent">demand</span>
                        <span className="text-accent">attention</span>
                    </motion.h1>

                    {/* Tagline Paragraph */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                    >
                        A full-service design agency shaping digital identities
                        <br className="hidden sm:inline" />
                        for ambitious companies that refuse to blend in.
                    </motion.p>

                    {/* Dual slanted CTA buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                    >
                        <Button
                            variant="primary"
                            slanted={true}
                            onClick={() => scrollToSection("portfolio")}
                            className="px-8 py-3.5 w-full sm:w-auto"
                        >
                            View Our Work
                        </Button>

                        <Button
                            variant="outline"
                            slanted={true}
                            onClick={() => scrollToSection("contact")}
                            className="px-8 py-3.5 border-accent/25 hover:border-accent/80 text-foreground w-full sm:w-auto"
                        >
                            Get in touch
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
