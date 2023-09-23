<script>
import { useLanguagesStore } from '@/components/stores/languages';
import { computed } from 'vue';

export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  setup() {
    const languagesStore = useLanguagesStore(); // Obtiene el store de idiomas

    // Define las cadenas de texto para cada idioma
    const mensajes = {
      es: "Todos los derechos reservados",
      de: "Alle Rechte vorbehalten",
      en: "All rights reserved",
    };
    
    // Obtiene el idioma actual del store
    const currentLanguage = computed(() => languagesStore.getCurrentLanguage);

    // Obtiene el mensaje correspondiente al idioma actual
    const mensaje = computed(() => mensajes[currentLanguage.value]);

    return {
      mensaje,
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="text-center">
        {{ mensaje }} &copy; {{ currentYear }} tutraduccion.es
      </p>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 1rem;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}
</style>
