import { Card } from "@/components/ui/card";
import clsx from "clsx";

type FeatureCardProps = {
    badge: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
    imageSection: React.ReactNode;
    className?: string;
    contentClassName?: string;
};

const cardClass =
    "overflow-hidden pb-0 border-0 shadow-xl shadow-slate-200/50 rounded-[32px] bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1";

export const FeatureCard: React.FC<FeatureCardProps> = ({
    badge,
    title,
    description,
    imageSection,
    className = "",
    contentClassName = "",
}) => (
    <Card className={clsx(cardClass, className)}>
        <div className={clsx("px-8 lg:px-14 pt-2 text-center flex flex-col items-center", contentClassName)}>
            {badge}
            {title}
            {description}
        </div>
        {imageSection}
    </Card>
);