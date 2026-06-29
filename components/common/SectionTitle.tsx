interface Props {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({
    title,
    subtitle,
}: Props) {
    return (
        <div className="text-center mb-16 flex flex-col items-center">
            {/* Top accent badge */}
            <div className="w-8 h-1 bg-accent mb-4 rounded-full" />
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-4 text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}