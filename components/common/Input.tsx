interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

export default function Input({ error, className = "", ...props }: Props) {
    return (
        <div className="w-full">
            <input
                {...props}
                className={`w-full rounded-lg border bg-card text-foreground p-3 outline-none transition-all duration-300 focus:ring-2 focus:ring-accent focus:border-accent ${
                    error ? "border-red-500" : "border-border"
                } ${className}`}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}