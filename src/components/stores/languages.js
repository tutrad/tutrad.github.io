// store/languages.js
import { defineStore } from 'pinia';

export const useLanguagesStore = defineStore('languages', {
  state: () => ({
    currentLanguage: 'es', // Establece el idioma predeterminado
  }),

  getters: {
    getCurrentLanguage() {
      return this.currentLanguage;
    },
  },

  actions: {
    setCurrentLanguage(language) {
      this.currentLanguage = language;
    },
  },
});
