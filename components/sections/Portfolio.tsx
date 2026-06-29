"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PortfolioCard from "../cards/PortfolioCard";

interface Project {
    id: number;
    title: string;
    category: "Design" | "Development" | "Brand";
    tags: string[];
    previewType: "uiux" | "web" | "branding" | "marketing";
}

const projects: Project[] = [
    {
        id: 1,
        title: "Apex FinTech App",
        category: "Design",
        tags: ["UI/UX", "iOS", "Crypto"],
        previewType: "uiux",
    },
    {
        id: 2,
        title: "Nova Cloud Platform",
        category: "Development",
        tags: ["Next.js", "SaaS", "Tailwind"],
        previewType: "web",
    },
    {
        id: 3,
        title: "Vibe Fashion Identity",
        category: "Brand",
        tags: ["Logo", "Typography", "Guidelines"],
        previewType: "branding",
    },
    {
        id: 4,
        title: "Growth Analytics Deck",
        category: "Design",
        tags: ["UI/UX", "Dashboard", "BI"],
        previewType: "marketing",
    },
    {
        id: 5,
        title: "Zenith Smart Home Portal",
        category: "Design",
        tags: ["UI/UX", "Figma", "Web app"],
        previewType: "uiux",
    },
    {
        id: 6,
        title: "Helix Web3 Platform",
        category: "Development",
        tags: ["React", "Ethers.js", "Motion"],
        previewType: "web",
    },
];

type CategoryFilter = "All" | "Design" | "Development" | "Brand";

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

    const filteredProjects = projects.filter(
        (project) => activeFilter === "All" || project.category === activeFilter
    );

    const categories: CategoryFilter[] = ["All", "Design", "Development", "Brand"];

    return (
        <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
            {/* Background decorative glows */}
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 radial-glow pointer-events-none opacity-20" />

            <Container>
                <SectionTitle
                    title="Selected Works"
                    subtitle="Explore a curated showcase of digital products we've designed, engineered, and scaled."
                />

                {/* Filter Tabs */}
                <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
                    {categories.map((category) => {
                        const isActive = activeFilter === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`relative px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                                    isActive
                                        ? "text-white"
                                        : "text-muted hover:text-foreground border border-border hover:bg-foreground/5 bg-transparent"
                                }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-accent rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                            >
                                <PortfolioCard
                                    title={project.title}
                                    category={project.category}
                                    tags={project.tags}
                                    previewType={project.previewType}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Container>
        </section>
    );
}
