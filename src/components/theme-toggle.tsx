import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { GlobeIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import LocaleSwitcher from "./LocaleSwitcher";

export default function ThemeToggle() {
    const {setTheme, resolvedTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) {
        return null;
    }

    return (
        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground sm:gap-3">
        <div className="flex items-center gap-2 justify-center">
            <GlobeIcon className="size-4 text-sky-300" />
            <LocaleSwitcher />
        </div>
        <Button
            size="sm"
            variant="ghost"
            onClick={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }}
        >
            {resolvedTheme === "dark" ? (
                <SunIcon className="size-4 text-orange-300" />
            ) : (
                <MoonIcon className="size-4 text-sky-300" />
                // <span className="text-sm">Dark</span>
            )}

        </Button>
        </div>
        
    )

}