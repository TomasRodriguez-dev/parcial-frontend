import { defineStore } from "pinia";
import type { ThemeState } from "@/models/ThemeState";

export const useThemeStore = defineStore({
    id: 'theme',
    state: () : ThemeState => ({
        isdark: false,
        mode: 'LightMode'
    }),
    actions: {
        toggleTheme() {
            this.isdark = !this.isdark;
            this.mode = this.isdark ? 'DarkMode' : 'LightMode';
        }
    }
})