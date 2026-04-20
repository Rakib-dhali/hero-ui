"use client";

import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

export default function SwitchButton() {
  const icons = {
    darkMode: {
      dark: Moon,
      light: Sun,
      selectedControlClass: "",
    },
  };

   const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-3">
      {Object.entries(icons).map(([key, value]) => (
        <Switch onChange={(value) => setTheme(value ? "dark" : "light")}  key={key} defaultSelected size="lg">
          {({ isSelected }) => (
            <>
              <Switch.Control
                className={isSelected ? value.selectedControlClass : ""}
              >
                <Switch.Thumb>
                  <Switch.Icon>
                    {isSelected ? (
                      <value.light className="size-3 text-inherit opacity-100" />
                    ) : (
                      <value.dark className="size-3 text-inherit opacity-70" />
                    )}
                  </Switch.Icon>
                </Switch.Thumb>
              </Switch.Control>
            </>
          )}
        </Switch>
      ))}
    </div>
  );
}
