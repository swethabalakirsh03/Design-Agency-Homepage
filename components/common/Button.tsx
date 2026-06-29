import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    slanted?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    slanted = false,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "px-6 py-2.5 font-semibold text-sm transition-all duration-300 inline-flex items-center justify-center cursor-pointer";

    let variantStyles = "";
    if (variant === "primary") {
        variantStyles = "bg-accent text-white hover:bg-accent-hover";
    } else if (variant === "secondary") {
        variantStyles = "bg-foreground text-background hover:bg-foreground/90";
    } else if (variant === "outline") {
        variantStyles = "border border-border text-foreground hover:bg-foreground/5";
    }

    const skewStyles = slanted ? "-skew-x-12" : "rounded-lg";
    const childSkewStyles = slanted ? "skew-x-12" : "";

    return (
        <button
            {...props}
            className={`${baseStyles} ${skewStyles} ${variantStyles} ${className}`}
        >
            <span className={childSkewStyles}>
                {children}
            </span>
        </button>
    );
}