import { writable } from "svelte/store";

export const currentPage = writable<string>("index");

export const currentTheme = writable<string>("nord");

export const themePickerOpen = writable<boolean>(false);
