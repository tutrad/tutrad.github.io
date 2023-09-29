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
      <div class="col-md-6">
        <img
          src="@/assets/translating.webp"
          class="img-fluid mx-auto"
          style="max-width: 100%; height: auto;"
          alt="translating traduccion"
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
      es: "Servicios de traducción",
      de: "Übersetzungsdienste",
      en: "Translation Services",
    };
    const descriptions = {
      es: "Nuestro equipo de traductores son nativos del idioma al que traducen. Esto garantiza que tienen un conocimiento perfecto de la terminología y del contexto. También son lingüistas cualificados y experimentados que llevan a cabo proyectos en sus campos específicos de especialidad. En el mundo globalizado de hoy en día, las empresas necesitan estar enfocadas al exterior y una forma de lograrlo es traduciendo el contenido de su sitio web a diferentes idiomas. Contáctenos ahora para descubrir cómo podemos ayudarle a traducir su sitio web para que pueda atraer aún más clientes.<br><br> Actualmente estamos especializados en traducir del alemán y del español al inglés, sin embargo, tenemos contactos que trabajan en y desde otros idiomas. Contáctenos para averiguar si su combinación está disponible.",
      de: "Unser Team von Übersetzern übersetzen nur in ihrer Muttersprache. Dies gewährleistet, dass sie ein perfektes Verständnis für präzise Terminologie und angemessenen Kontext haben. <br><br>Sie sind auch qualifizierte und erfahrene Linguisten, die Projekte in ihren spezifischen Fachgebieten durchführen. In der globalisierten Welt von heute müssen Unternehmen international sein, und eine Möglichkeit, dies zu erreichen, besteht darin, den Inhalt ihrer Website in verschiedene Sprachen zu übersetzen. Nehmen Sie jetzt Kontakt auf, um herauszufinden, wie wir Ihnen bei der Übersetzung Ihrer Website helfen können, damit Sie noch mehr Kunden gewinnen können.<br><br>Derzeit haben wir uns auf Übersetzungen vom Deutschen und Spanischen ins Englische spezialisiert, aber wir haben Kontakte, die in andere Sprachen übersetzen können. Nehmen Sie jetzt Kontakt auf, um herauszufinden, ob Ihre Sprachkombination verfügbar ist.",
      en: "Our team of translators are native speakers of the language they translate into. This ensures that they have a perfect grasp of precise terminology and appropriate context. They are also qualified and experienced linguists who carry out projects in their specific fields of expertise. In today’s globalised world, companies need to be international and one way of doing this is by translating website content into a range of different languages. Contact us now to find out how we can help you translate your website so that you can win even more clients.<br><br>We currently specialise in translating from German, Spanish into English, however we have contacts who work into and from other languages. Contact us to find out if your language combination is available. ",
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
