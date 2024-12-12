import React from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  theme,
  toggleTheme,
  ...props
}) => {
  return (
    <button
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300"
      onClick={toggleTheme}
      {...props}
    >
      {theme === "light" ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeButton;
