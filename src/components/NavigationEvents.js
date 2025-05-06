"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const NavigationEvents = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [formattedPath, setFormattedPath] = useState("");

    useEffect(() => {
        const segments = pathname.split("/").filter(Boolean); // Get URL segments
        const lastSegment = segments[segments.length - 1] || ""; // Get last segment

        // Format: Replace hyphens with spaces & capitalize each word
        const formatted = lastSegment
            .replace(/-/g, " ") // Replace hyphens with spaces
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize words

        setFormattedPath(formatted);
    }, [pathname, searchParams]);

    return <h2 className="text-4xl">{formattedPath || "Home"}</h2>;
};

export default NavigationEvents;
