import { For, Setter } from "solid-js";

interface ThemeSelectorProps {
  setTheme: Setter<string>;
}

export default function ThemeSelector({ setTheme }: ThemeSelectorProps) {
  const themes: string[] = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  return (
    <div class="absolute bottom-2 right-2">
      <select class="select w-full max-w-xs" onChange={(e) => setTheme(e.currentTarget.value)}>
        <option disabled selected>
          Select Theme
        </option>
        <For each={themes}>{(t) => <option>{t}</option>}</For>
      </select>
    </div>
  );
}
