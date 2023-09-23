<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="text-container p-3">
          <h1><strong>{{ welcomeText }}</strong></h1><br><br>
          <div v-html="description" class="description"></div>
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="@/assets/logoTT.webp"
          class="img-fluid"
          style="max-width: 100%; height: auto;"
          alt="Contacto logo tutraduccion.es"
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
      es: "Contáctanos",
      de: "Kontaktieren Sie uns",
      en: "Contact us",
    };
    const descriptions = {
      es: "Tel: +34 684 300 165<br><br> E-mail: <a href='mailto:translationhub.es@gmail.com'>translationhub.es@gmail.com</a>",
      de: "Tel: +34 684 300 165<br><br> E-mail: <a href='mailto:translationhub.es@gmail.com'>translationhub.es@gmail.com</a>",
      en: "Tel: +34 684 300 165<br><br> E-mail: <a href='mailto:translationhub.es@gmail.com'>translationhub.es@gmail.com</a>",
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

.description {
  font-size: larger; /* Tamaño de fuente aumentado */
}

</style>
