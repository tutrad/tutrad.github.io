<template>
  <div class="container">
    <div class="row">
      <!-- Bloque de texto -->
      <div class="col-md-6">
        <div class="text-container p-3">
          <h1><strong>{{ welcomeText }}</strong></h1><br>
          <div v-html="description" class="description-text"></div>
          
        </div>
      </div>

      
      <!-- Bloque de imagen -->
<!-- Bloque de imagen -->
<div class="col-md-6">
        <img
          src="@/assets/interpreting.webp"
          class="img-fluid"
          style="max-width: 100%; height: auto;"
          alt="Interpreting consecutive simultaneous spanish to english german to english"
        />
      </div>

    </div>
  </div>
 
    <a href="/translation" style="display: none;">Servicios de Traducción de Español a Inglés y de Alemán a Inglés | Unsere Übersetzungs- und Dolmetscherdienste für Spanisch-Englisch und Deutsch-Englisch</a>
    <a href="/proofreading" style="display: none;">Servicios de Revisión de documentos de Español a Inglés y de Alemán a Inglés | Unsere Lektoratsdienste für Spanisch-Englisch und Deutsch-Englisch</a>
    <a href="/interpreting" style="display: none;">Servicios de Interpretación de Español a Inglés y de Alemán a Inglés | Unsere Dolmetscherdienste für Spanisch-Englisch und Deutsch-Englisch</a>
    <a href="/contact" style="display: none;">Contáctanos para más información, recibe presupuesto sin compromiso | Kontaktieren Sie uns für weitere Informationen, erhalten Sie unverbindlich ein Angebot</a>
    <a href="/join" style="display: none;">Trabaja con nosotros, ofrece tus servicios | Arbeiten Sie mit uns, bieten Sie Ihre Dienstleistungen an</a>
    <a href="/about" style="display: none;">Más información sobre nuestra empresa | Weitere Informationen über unser Unternehmen</a>
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
      es: "Servicios de interpretación ",
      de: "Dolmetscherdienste",
      en: "Interpreting services",
    };
    const descriptions = {
      es: "Mientras que la traducción se ocupa de la palabra escrita, la interpretación es un ejercicio oral. Los intérpretes escuchan conversaciones en un idioma y los interpretan para que usted pueda entenderlos. Ya sea en una reunión de negocios, una conferencia internacional de gran envergadura o en una llamada telefónica, podemos proporcionarle los servicios de interpretación que usted necesita.<br>Estos incluyen servicios de interpretación simultánea, consecutiva y telefónica, por mencionar algunos.",
      de: "Während die Übersetzung mit dem geschriebenen Wort arbeitet, ist die Dolmetschen eine mündliche Übung. Dolmetscher hören Reden in einer anderen Sprache und übersetzen sie in eine Sprache, die Sie verstehen können. Ob Sie sich an einem Geschäftstreffen, einer großen internationalen Konferenz oder einer Telefonkonferenz teilnehmen, wir können Ihnen die Dolmetscherdienste bieten, die Sie benötigen. Diese umfassen Simultan- und Konsekutivdolmetschen sowie Telefondolmetschen um nur einige zu nennen.",
      en: "While translation works with the written word, interpreting is an oral exercise. Interpreters listen to speeches in another language and interpret them into a language that you can understand. Whether at a business meeting, large international conference or on a conference call, we can provide you with the interpretation services you need. These include simultaneous, consecutive and over-the-phone services to name but a few.",
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
.description-text {
  font-size: 18px; /* Cambia este valor al tamaño de fuente que desees */
}
</style>
