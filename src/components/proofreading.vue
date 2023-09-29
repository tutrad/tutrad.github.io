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

     <div class="col-md-6">
        <img
          src="@/assets/proofreading.webp"
          class="img-fluid"
          style="max-width: 100%; height: auto;"
          alt="Proofreading english"
        />
      </div>
    </div>
  </div>
  
    <a href="/#/translation" style="display: none;">Servicios de Traducción de Español a Inglés y de Alemán a Inglés | Unsere Übersetzungs- und Dolmetscherdienste für Spanisch-Englisch und Deutsch-Englisch</a>
    <a href="/#/proofreading" style="display: none;">Servicios de Revisión de documentos de Español a Inglés y de Alemán a Inglés | Unsere Lektoratsdienste für Spanisch-Englisch und Deutsch-Englisch</a>
    <a href="/#/interpreting" style="display: none;">Servicios de Interpretación de Español a Inglés y de Alemán a Inglés | Unsere Dolmetscherdienste für Spanisch-Englisch und Deutsch-Englisch</a>
    <a href="/#/contact" style="display: none;">Contáctanos para más información, recibe presupuesto sin compromiso | Kontaktieren Sie uns für weitere Informationen, erhalten Sie unverbindlich ein Angebot</a>
    <a href="/#/join" style="display: none;">Trabaja con nosotros, ofrece tus servicios | Arbeiten Sie mit uns, bieten Sie Ihre Dienstleistungen an</a>
    <a href="/#/about" style="display: none;">Más información sobre nuestra empresa | Weitere Informationen über unser Unternehmen</a>
</template>

<script>
import { defineComponent, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useLanguagesStore } from "@/components/stores/languages";

export default defineComponent({
  name: "About",
  setup() {
    const router = useRouter();
    const languagesStore = useLanguagesStore(); // Obtiene el store de idiomas

    // Define las cadenas de texto para cada idioma
    const welcomeTexts = {
      es: "Edición ",
      de: "Korrekturlesen",
      en: "Proofreading",
    };
    const descriptions = {
      es: "Si tienes un buen dominio de un idioma extranjero pero deseas asegurarte de que tu texto se lea de manera fluida y tenga el tono adecuado, nuestros profesionales pueden revisar tu escrito para garantizar que este sea perfecto.",
      de: "Wenn Sie gute Kenntnisse einer Fremdsprache besitzen, aber sicherstellen möchten, dass Ihr Text angenehm zu lesen ist und den richtigen Ton hat, können unsere Korrekturleser Ihr Schriftstück drübergucken, um sicherzustellen, dass es perfekt ist.",
      en: "If you have a good grasp of a foreign language but want to ensure that your text reads comfortably and has the right tone, our proofreaders can look over your piece to make sure that it is perfect.",
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
  font-size: 25px; /* Tamaño de fuente aumentado */
}

</style>
