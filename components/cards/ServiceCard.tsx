import Card from "../common/Card";
import { IconType } from "react-icons";

interface Props {
    icon: IconType;
    title: string;
    description: string;
}

export default function ServiceCard({
    icon: Icon,
    title,
    description,
}: Props) {
    return (
        <Card className="flex flex-col h-full">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                <Icon className="text-2xl text-accent" />
            </div>

            <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">
                {title}
            </h3>

            <p className="text-muted text-sm leading-relaxed flex-grow">
                {description}
            </p>
        </Card>
    );
}