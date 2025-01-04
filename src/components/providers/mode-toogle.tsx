import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import clsx from "clsx";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={clsx(
        {
          "light-mode": theme === "light",
          "dark-mode": theme === "dark",
        },
        "transition-all duration-300"
      )}
    >
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        {theme === "dark" ? (
          <Moon className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
        )}
      </Button>
    </div>
  );
}
