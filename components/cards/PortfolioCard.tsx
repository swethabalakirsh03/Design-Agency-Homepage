"use client";

import { motion } from "framer-motion";
import Card from "../common/Card";
import { FiArrowUpRight } from "react-icons/fi";

interface Props {
    title: string;
    category: string;
    tags: string[];
    previewType: "uiux" | "web" | "branding" | "marketing";
}

export default function PortfolioCard({
    title,
    category,
    tags,
    previewType,
}: Props) {
    // Custom inline SVGs & CSS for premium visuals instead of plain templates
    const renderVisualPreview = () => {
        switch (previewType) {
            case "uiux":
                return (
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#13111C] to-[#0A090F] flex items-center justify-center p-6 overflow-hidden group">
                        {/* Glowing radial circles */}
                        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                        
                        {/* Simulated Phone Mockup */}
                        <div className="relative w-36 h-56 rounded-2xl border-2 border-border/80 bg-[#0c0a0f] p-3 shadow-2xl flex flex-col space-y-3 transform rotate-6 translate-y-4 group-hover:-translate-y-1 group-hover:rotate-0 transition-all duration-500">
                            {/* Notch */}
                            <div className="w-12 h-3.5 bg-border rounded-full mx-auto" />
                            {/* App Content */}
                            <div className="w-full h-8 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-between px-2">
                                <div className="w-8 h-2 bg-accent/30 rounded" />
                                <div className="w-3 h-3 rounded-full bg-accent" />
                            </div>
                            <div className="flex-1 space-y-2">
                                <div className="w-full h-12 rounded-lg bg-neutral-900 border border-border p-2 flex flex-col justify-between">
                                    <div className="w-6 h-1.5 bg-muted rounded" />
                                    <div className="w-12 h-3 bg-white/10 rounded" />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="h-10 rounded-lg bg-neutral-900 border border-border p-2 flex flex-col justify-between">
                                        <div className="w-4 h-1 bg-muted rounded" />
                                        <div className="w-8 h-2 bg-purple-500/30 rounded" />
                                    </div>
                                    <div className="h-10 rounded-lg bg-neutral-900 border border-border p-2 flex flex-col justify-between">
                                        <div className="w-4 h-1 bg-muted rounded" />
                                        <div className="w-8 h-2 bg-accent/30 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "web":
                return (
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0c10] to-[#12141c] flex items-center justify-center p-6 overflow-hidden">
                        <div className="absolute -bottom-6 w-full h-32 bg-accent/5 blur-xl rounded-full" />
                        
                        {/* Simulated Code Panel & Interface */}
                        <div className="relative w-56 h-36 rounded-xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden transform -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
                            {/* Header */}
                            <div className="w-full h-6 bg-border/40 px-3 flex items-center justify-between border-b border-border">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                                </div>
                                <div className="w-20 h-2 bg-muted/30 rounded" />
                            </div>
                            {/* Code lines */}
                            <div className="p-3 font-mono text-[6px] text-muted space-y-1.5 flex-1">
                                <div className="flex items-center space-x-1">
                                    <span className="text-purple-400">const</span>
                                    <span className="text-blue-400">app</span>
                                    <span className="text-white">=</span>
                                    <span className="text-yellow-400">createAgency</span>
                                    <span>();</span>
                                </div>
                                <div className="flex items-center space-x-1 pl-3">
                                    <span className="text-blue-400">app</span>
                                    <span>.</span>
                                    <span className="text-green-400">render</span>
                                    <span>{"({"}</span>
                                    <span className="text-accent">brand</span>
                                    <span>:</span>
                                    <span className="text-yellow-300">"VOID"</span>
                                    <span>{"});"}</span>
                                </div>
                                <div className="w-full h-6 bg-[#07080b] rounded border border-border/60 mt-1 flex items-center px-2 justify-between">
                                    <div className="w-12 h-1 bg-white/20 rounded animate-pulse" />
                                    <div className="w-6 h-2 bg-accent/25 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "branding":
                return (
                    <div className="absolute inset-0 bg-[#0c0d12] flex items-center justify-center p-6 overflow-hidden">
                        {/* Minimalist Geometry Canvas */}
                        <div className="relative w-44 h-44 rounded-full border border-border/40 flex items-center justify-center group-hover:scale-95 transition-transform duration-700">
                            <div className="absolute w-32 h-32 rounded-full border border-border/20" />
                            <div className="absolute w-20 h-20 rounded-full border border-accent/20" />
                            
                            {/* The Logo Geometry */}
                            <div className="relative z-10 flex flex-col items-center">
                                <span className="text-3xl font-black tracking-widest text-white group-hover:tracking-[0.2em] transition-all duration-500">V</span>
                                <div className="w-1 h-1 bg-accent rounded-full mt-1" />
                            </div>
                            
                            {/* Alignment metrics lines */}
                            <div className="absolute w-48 h-[1px] bg-border/20 transform rotate-45" />
                            <div className="absolute w-48 h-[1px] bg-border/20 transform -rotate-45" />
                        </div>
                    </div>
                );
            case "marketing":
                return (
                    <div className="absolute inset-0 bg-[#090b10] flex items-center justify-center p-6 overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
                        
                        {/* Analytical Charts */}
                        <div className="relative w-48 h-32 flex flex-col justify-end items-stretch space-y-3">
                            {/* Curved Wave Line */}
                            <svg className="w-full h-16 text-accent" viewBox="0 0 100 30" fill="none">
                                <path 
                                    d="M0 25 C20 10, 40 5, 60 20 C80 35, 90 15, 100 5" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    className="drop-shadow-[0_0_8px_rgba(255,85,59,0.5)]"
                                />
                                <path 
                                    d="M0 25 C20 10, 40 5, 60 20 C80 35, 90 15, 100 5 L100 30 L0 30 Z" 
                                    fill="url(#gradient)" 
                                    opacity="0.15" 
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#ff553b" />
                                        <stop offset="100%" stopColor="#ff553b" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Bar Chart rows */}
                            <div className="flex items-end justify-between h-10 px-4">
                                <div className="w-3.5 h-6 bg-border rounded-t group-hover:h-8 transition-all duration-500" />
                                <div className="w-3.5 h-10 bg-accent rounded-t group-hover:h-7 transition-all duration-500" />
                                <div className="w-3.5 h-4 bg-border rounded-t group-hover:h-5 transition-all duration-500" />
                                <div className="w-3.5 h-8 bg-purple-500 rounded-t group-hover:h-10 transition-all duration-500" />
                                <div className="w-3.5 h-5 bg-border rounded-t group-hover:h-3 transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <Card className="p-0 overflow-hidden flex flex-col group relative h-[360px] border-border bg-card">
            {/* Visual Thumbnail Area */}
            <div className="relative w-full h-[240px] overflow-hidden border-b border-border">
                {renderVisualPreview()}

                {/* Glassmorphism Interactive Overlay */}
                <div className="absolute inset-0 bg-background/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 z-20">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] tracking-widest font-bold uppercase text-accent">
                            {category}
                        </span>
                        
                        {/* Small circular trigger button */}
                        <div className="w-8 h-8 rounded-full border border-accent text-accent flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <FiArrowUpRight size={18} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-lg font-bold text-foreground">
                            {title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[9px] px-2 py-0.5 border border-border bg-card text-muted rounded-full uppercase"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Default Static Title Area (Visible when not hovered) */}
            <div className="p-5 flex-1 flex flex-col justify-center bg-card group-hover:bg-neutral-900/10 transition-all duration-300 z-10">
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">
                    {category}
                </span>
                <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                    {title}
                </h3>
            </div>
        </Card>
    );
}