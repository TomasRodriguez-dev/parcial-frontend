import { defineStore } from "pinia";
import type { ThemeModel } from "@/models/ThemeModel";

export const useThemeStore = defineStore({
    id: 'theme',
    state: () : ThemeModel => ({
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