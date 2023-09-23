<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="text-container p-3">
          <h1><strong>{{ welcomeText }}</strong></h1>
          <div v-html="description" class="description-text"></div>
          
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="@/assets/about.webp"
          class="img-fluid"
          style="max-width: 100%; height: auto;"
          alt="Imágen Sobre nosotros"
        />
      </div>
    </div>
  </div><br>
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
      es: "Sobre Nosotros",
      de: "Über uns",
      en: "About us",
    };
    const descriptions = {
      es: "Somos una empresa de traducción e interpretación con sede en España. Desde que abrimos nuestras puertas, nuestro principal enfoque ha sido proporcionar a empresas de cualquier tamaño e instituciones públicas servicios lingüísticos de alta calidad a precios competitivos. Aunque puede haber muchas empresas de traducción más grandes en el mercado, nosotros podemos ofrecer a nuestros clientes algo que estas otras empresas no pueden: el trato personal. Esto es especialmente importante para nuestros clientes porque significa una comunicación más cercana, directa y efectiva. Nos enorgullecemos de ofrecer traducciones realizadas por personas, tarifas competitivas y un rápido tiempo de entrega. <br><br>Simplemente envíenos un correo electrónico para todas sus necesidades de traducción, interpretación, corrección y postedición.",
      de: "Wir sind ein dynamisches Übersetzungs- und Dolmetscherunternehmen mit Sitz in Spanien. Unser Hauptaugenmerk liegt seit unserer Eröffnung darin, einem breiten Spektrum von Unternehmen und öffentlichen Einrichtungen hochwertige Sprachdienstleistungen zu wettbewerbsfähigen Preisen anzubieten.<br><br>Obwohl es viele größere Übersetzungsunternehmen gibt, können wir unseren Kunden etwas bieten, was diese anderen Unternehmen nicht bieten können - die persönliche Note. Dies ist besonders wichtig für unsere Kunden, da es eine direktere und effektivere Kommunikation ermöglicht. Wir sind stolz darauf, menschliche Übersetzungen anzubieten, wettbewerbsfähige Preise zu berechnen und eine schnelle Bearbeitungszeit zu gewährleisten.<br><br>Senden Sie uns einfach eine E-Mail für all Ihre Übersetzungs-, Dolmetsch-, Korrekturlesen- und Nachbearbeitungsbedürfnisse jetzt.",
      en: "We are a dynamic translation and interpreting company based in Spain. Our main focus, since opening our doors, has been to provide a wide range of companies and public institutions with high-quality language services at competitive prices. While there may be many larger translation companies out there, we can offer clients something that these other companies cannot – the personal touch. This is particularly important to clients because it means more direct and effective communication. We pride ourselves in providing human translations, a competitive rate and having a fast turnaround.\<br><br>Just send us an email for all your translation, interpreting, proofreading and post-editing needs now.",
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
