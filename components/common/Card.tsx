import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: Props) {
    return (
        <div className={`rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 ${className}`}>
            {children}
        </div>
    );
}