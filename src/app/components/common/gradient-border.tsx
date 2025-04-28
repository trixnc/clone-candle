import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function GradientBorder({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className="relative rounded-lg bg-gradient-to-r from-[#4572D2] via-[#263C60] to-[#003F96]">
            <div className={cn("rounded-lg bg-gray-900 text-white", className)}>
                {children}
            </div>
        </div>
    );
}