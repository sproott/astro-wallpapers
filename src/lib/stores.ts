import { writable } from "svelte/store";
import { themes } from "./constants";

const getTheme = () => localStorage.getItem("theme") ?? "nord";
const setTheme = (theme: string) => {
  themes.forEach((t) => {
    if (t === theme) {
      document.body.classList.add(t);
    } else {
      document.body.classList.remove(t);
    }
  });
  localStorage.setItem("theme", theme);
};

const createCurrentThemeStore = () => {
  const theme = getTheme();
  const store = writable<string>(theme);

  const set = (theme: string) => {
    store.set(theme);
    setTheme(theme);
  };

  return {
    subscribe: store.subscribe,
    set,
  };
};

export const currentTheme = createCurrentThemeStore();

export const currentPage = writable<string>("index");

export const themePickerOpen = writable<boolean>(false);
