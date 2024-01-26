<template>
    <div class="container">
      <div class="row">
        <!-- Bloque de texto -->
        <div class="col-md-6">
          <div class="text-container p-3">
            <h1>{{ welcomeText }}</h1><br>
            <div v-html="description"></div>
            <br><br>
             <!-- Hipervínculo para abrir el PDF -->
          <p> Anexo I <a :href="pdfLink" target="_blank">PDF</a>.</p>
          </div>
        </div>
        <!-- Bloque de imagen -->
        <div class="col-md-6 d-flex align-items-center justify-content-center">


          <img
            src="@/assets/imgsupport2.webp"
            class="img-fluid"
            style="max-width: 100%; height: auto;"
            alt="Logo JCYL"
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
    name: "support",
    data() {
    return {
      pdfLink: "/assets/Doc.pdf", // Ruta del archivo PDF
    };
  },
    setup() {
      const router = useRouter();
      const languagesStore = useLanguagesStore(); // Obtiene el store de idiomas
  
      // Define las cadenas de texto para cada idioma
      const welcomeTexts = {
        es: "Actividad subvencionada por:",
        de: "Aktivität unterstützt von:",
        en: "Activity supported by",
      };
      const descriptions = {
        es: "La Junta de Castilla y León a través de su programa de apoyo al emprendimiento del 2023 ha apoyado financieramente la creacion de esta empresa de traducción e interpretación con sede en Boecillo (Valladolid). <br><br> Nuestro objetivo principal es proporcionar servicios linguisticos de alta calidad a empresas, instituciones o particulares. <br><br> Deseamos  también ayudar a que las empresas puedan competir internacionalmente, asegurándonos que el idioma no sea una barrera. <br><br> Actualmente estamos colaborando con otras grandes empresas del sector. <br><br> Lo que nos diferencia del resto, es que podemos ofrecer algo que estas grandes empresas no pueden, que es el trato individualizado y personal. Nos enorgullecemos de ofrecer traducciones realizadas por personas con tarifas competitivas y un rápido tiempo de entrega.",
        de: "Die 'Junta de Castilla y León' hat im Rahmen ihres Unterstützungsprogramms für Unternehmertum im Jahr 2023 finanzielle Hilfe für die Gründung dieses Übersetzungs- und Dolmetschunternehmens mit Sitz in Boecillo (Valladolid) bereitgestellt. <br><br> Unser Hauptziel ist es, Unternehmen, Institutionen und Einzelpersonen hochwertige sprachliche Dienstleistungen anzubieten. <br><br> Zudem möchten wir dazu beitragen, dass Unternehmen auf internationaler Ebene konkurrenzfähig sind, indem wir sicherstellen, dass die Sprache keine Barriere darstellt. <br><br> Aktuell kooperieren wir mit anderen bedeutenden Unternehmen der Branche. <br><br> Was uns besonders auszeichnet, ist unsere Fähigkeit, etwas anzubieten, was diese größeren Unternehmen nicht können – nämlich einen persönlichen und individuellen Service. Darauf sind wir stolz: hochwertige Übersetzungen von Menschen zu einem wettbewerbsfähigen Preis und mit schneller Bearbeitungszeit anzubieten.",
        en: "The 'Junta de Castilla y León', through its 2023 entrepreneurship support program, has provided financial support to this translation and interpretation company based in Boecillo (Valladolid). <br><br> Our main goal is to provide companies, institutions and indidivuals with high-quality linguistic services. <br><br> We also aim to help businesses compete at international level by ensuring that language is not a barrier. <br><br> Currently, we are collaborating with other major companies in the sector. <br><br> What sets us apart is our ability to provide something that these larger companies cannot, which is a personalised and individualised service. We take pride in offering translations carried out by humans at competitive rates and with a rapid turnaround time.",
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
  </style>
  