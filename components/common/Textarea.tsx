import React from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextareaElement> {
    error?: string;
}

export default function Textarea({ error, className = "", ...props }: Props) {
    return (
        <div className="w-full">
            <textarea
                {...props}
                className={`w-full rounded-lg border bg-card text-foreground p-3 outline-none transition-all duration-300 resize-none min-h-[120px] focus:ring-2 focus:ring-accent focus:border-accent ${
                    error ? "border-red-500" : "border-border"
                } ${className}`}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}
