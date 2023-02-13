import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { presetIcons, presetWind } from "unocss";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      presets: [
        presetWind(),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
        }),
      ],
      theme: {
        colors: {
          nord: {
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
          },
        },
      },
    }),
  ],
});
