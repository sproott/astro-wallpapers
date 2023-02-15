import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { presetWind, presetIcons, presetWebFonts } from "unocss";

// https://astro.build/config
import svelte from "@astrojs/svelte";
import presetTheme from "unocss-preset-theme";
import vercel from "@astrojs/vercel/serverless";
const nord = {
  polarNight: {
    100: "#2e3440",
    200: "#3b4252",
    300: "#434c5e",
    400: "#4c566a",
  },
  snowStorm: {
    100: "#d8dee9",
    200: "#e5e9f0",
    300: "#eceff4",
  },
  frost: {
    100: "#8fbcbb",
    200: "#88c0d0",
    300: "#81a1c1",
    400: "#5e81ac",
  },
  red: "#bf616a",
  orange: "#d08770",
  yellow: "#ebcb8b",
  green: "#a3be8c",
  purple: "#b48ead",
};
const catppuccinMacchiato = {
  rosewater: "#f4dbd6",
  flamingo: "#f0c6c6",
  pink: "#f5bde6",
  mauve: "#c6a0f6",
  red: "#ed8796",
  maroon: "#ee99a0",
  peach: "#f5a97f",
  yellow: "#eed49f",
  green: "#a6da95",
  teal: "#8bd5ca",
  sky: "#91d7e3",
  sapphire: "#7dc4e4",
  blue: "#8aadf4",
  lavender: "#b7bdf8",
  text: "#cad3f5",
  subtext1: "#b8c0e0",
  subtext0: "#a5adcb",
  overlay2: "#939ab7",
  overlay1: "#8087a2",
  overlay0: "#6e738d",
  surface2: "#5b6078",
  surface1: "#494d64",
  surface0: "#363a4f",
  base: "#24273a",
  mantle: "#1e2030",
  crust: "#181926",
};

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    UnoCSS({
      presets: [
        presetTheme({
          theme: {
            nord: {
              colors: {
                bg: {
                  darkGray: nord.polarNight[100],
                  light: nord.polarNight[400],
                },
                fg: {
                  dark: nord.polarNight[200],
                  light: nord.snowStorm[300],
                },
                accent: {
                  red: nord.red,
                  green: nord.green,
                  blue: nord.frost[400],
                  yellow: nord.yellow,
                },
                button: {
                  bg: nord.frost[400],
                  fg: nord.snowStorm[300],
                },
              },
            },
            catppuccinMacchiato: {
              colors: {
                bg: {
                  darkGray: catppuccinMacchiato.base,
                  light: catppuccinMacchiato.overlay0,
                },
                fg: {
                  dark: catppuccinMacchiato.surface1,
                  light: catppuccinMacchiato.text,
                },
                accent: {
                  red: catppuccinMacchiato.red,
                  green: catppuccinMacchiato.green,
                  blue: catppuccinMacchiato.blue,
                  yellow: catppuccinMacchiato.yellow,
                },
                button: {
                  bg: catppuccinMacchiato.blue,
                  fg: catppuccinMacchiato.crust,
                },
              },
            },
          },
        }),
        presetWind(),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
        }),
        presetWebFonts({
          provider: "bunny",
          fonts: {
            mono: ["JetBrains Mono"],
          },
        }),
      ],
    }),
    svelte(),
  ],
});
