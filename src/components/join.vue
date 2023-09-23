<template>
  <div class="container">
    <div class="row">
      <!-- Bloque de texto -->
      <div class="col-md-6">
        <div class="text-container p-3">
          <h1><strong>{{ welcomeText }}</strong></h1><br><br>
          <div v-html="description" class="description"></div>
        </div>
      </div>

      <!-- Bloque de imagen -->
      <!-- Bloque de imagen -->
      <div class="col-md-6">
        <img
          src="@/assets/join.webp"
          class="img-fluid"
          style="max-width: 100%; height: auto;"
          alt="Interpreter tutraduccion"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useLanguagesStore } from "@/components/stores/languages";

export default defineComponent({
  name: "Join",
  setup() {
    const router = useRouter();
    const languagesStore = useLanguagesStore(); // Obtiene el store de idiomas

    // Define las cadenas de texto para cada idioma
    const welcomeTexts = {
      es: "¡Únete a nuestro equipo!",
      de: "Schließen Sie sich unserem Team an",
      en: "Join our team",
    };
    const descriptions = {
      es: "Siempre estamos en busca de nuevos traductores cualificados.<br><br> Por favor, envía tu CV a <a href='mailto:translationhub.es@gmail.com'>translationhub.es@gmail.com</a>",
      de: "Wir sind immer auf der Suche nach qualifizierten Übersetzern.<br><br>Bitte senden Sie uns Ihren Lebenslauf an <a href='mailto:translationhub.es@gmail.com'>translationhub.es@gmail.com</a>",
      en: "We are always on the lookout for qualified translators.<br><br>Please email your CV to <a href='mailto:translationhub.es@gmail.com'>translationhub.es@gmail.com</a>",
    };

    // Observa los cambios en el idioma actual
    const currentLanguage = computed(() => languagesStore.getCurrentLanguage);

    // Propiedad computada para obtener el texto de bienvenida según el idioma actual
    const welcomeText = computed(() => welcomeTexts[currentLanguage.value]);
    const description = computed(() => descriptions[currentLanguage.value]);

    // Observa los cambios en la ruta y actualiza el idioma actual
    watch(() => router.currentRoute.value.query.lang, (newLang) => {
      languagesStore.setCurrentLanguage(newLang || "es"); // Actualiza el idioma en el store
    });

    return {
      currentLanguage,
      welcomeText,
      description,
    };
  },
});
</script>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* Estilos para el enlace de correo electrónico */
.text-container a {
  font-size: 18px; /* Ajusta el tamaño del texto del enlace */
  text-decoration: underline; /* Subraya el enlace para que sea más visible */
}

.text-container description {
  font-size: 50px; /* Ajusta el tamaño de fuente de la descripción */
}

.description {
  font-size: larger; /* Tamaño de fuente aumentado */
}

</style>
