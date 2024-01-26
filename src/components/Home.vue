<template>
  <div>
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators" :class="{ 'hide-on-mobile': isMobile }">
        
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="7000">
          <div class="row">
            <div class="col-md-6">
              <div class="text-container p-3">
                <h1><strong>{{ welcomeTexts[currentLanguage][currentSlideIndex] }}</strong></h1>
                <br />
                <h2>{{ descriptions[currentLanguage][currentSlideIndex] }}</h2>
              </div>
            </div>
            <div class="col-md-6">
              <img
                src="@/assets/logoTT.webp"
                class="d-block w-75 mx-auto"
                alt="imagen logo empresa tutraduccion"
                width="30"
                height="30"
              />
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="7000">
          <div class="row">
            <div class="col-md-6">
              <div class="text-container p-3">
                <h1><strong>
                  {{
                    welcomeTexts[currentLanguage][
                      (currentSlideIndex + 1) %
                        welcomeTexts[currentLanguage].length
                    ]
                  }}</strong>
                </h1><br>
                <h2>
                  {{
                    descriptions[currentLanguage][
                      (currentSlideIndex + 1) %
                        descriptions[currentLanguage].length
                    ]
                  }}
                </h2>
              </div>
            </div>
            <div class="col-md-6">
              <img
                src="@/assets/translating.webp"
                class="d-block w-75 mx-auto"
                alt="Translate Spanish German to English"
              />
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="7000">
          <div class="row">
            <div class="col-md-6">
              <div class="text-container p-3">
                <h1><strong>
                  {{
                    welcomeTexts[currentLanguage][
                      (currentSlideIndex + 2) %
                        welcomeTexts[currentLanguage].length
                    ]
                  }}</strong>
                </h1><br>
                <h2>
                  {{
                    descriptions[currentLanguage][
                      (currentSlideIndex + 2) %
                        descriptions[currentLanguage].length
                    ]
                  }}
                </h2>
              </div>
            </div>
            <div class="col-md-6">
              <img
                src="@/assets/proofreading.webp"
                class="d-block w-75 mx-auto"
                alt="Proofreading English"
              />
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="7000">
          <div class="row">
            <div class="col-md-6">
              <div class="text-container p-3">
                <h1><strong>
                  {{
                    welcomeTexts[currentLanguage][
                      (currentSlideIndex + 3) %
                        welcomeTexts[currentLanguage].length
                    ]
                  }}</strong>
                </h1><br>
                <h2>
                  {{
                    descriptions[currentLanguage][
                      (currentSlideIndex + 3) %
                        descriptions[currentLanguage].length
                    ]
                  }}
                </h2>
              </div>
            </div>
            <div class="col-md-6">
              
              <img
                src="@/assets/interpreting.webp"
                class="d-block w-75 mx-auto"
                alt="Interpreting consecutive simultaneous phone Spanish German English"
              />
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="7000">
          <div class="row">
            <div class="col-md-6">
              <div class="text-container p-3">
                <h1><strong>
                  {{
                    welcomeTexts[currentLanguage][
                      (currentSlideIndex + 4) %
                        welcomeTexts[currentLanguage].length
                    ]
                  }}</strong>
                </h1><br>
                <h3>
                  {{
                    descriptions[currentLanguage][
                      (currentSlideIndex + 4) %
                        descriptions[currentLanguage].length
                    ]
                  }}
                </h3>
              </div>
            </div>
            <div class="col-md-6">
              <img
                src="@/assets/logoTT.webp"
                class="d-block w-75 mx-auto"
                alt="logo de empresa translationHub"
              />
            </div>
          </div>
        </div>
       
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
        @click="previousSlide"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
        @click="nextSlide"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container">
  <div class="row mt-5">
    <div class="col-md-8">
      <p class="italic-text">
        {{ supportTexts[currentLanguage] }}
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-md-3 image-container"> 
      <a href="/#/support">
        <div class="text-overlay"></div>
        <img
          src="@/assets/imgsupport1.webp"
          alt="logo JCYL"
          style="max-width: 100%; height: auto;"
        />
      </a>
    </div>
  </div>
</div>

    <div v-if="showBanner" class="cookie-banner">
      <p>
        {{
          cookieBannerTexts[currentLanguage]
        }}
                <a class="cookie-link" href="https://www.kaspersky.com/resource-center/definitions/cookies">
          <strong>{{ privacyPolicyTexts[currentLanguage] }}</strong> (Click)
        </a>
      </p>
      <button class="cookie-button" @click="acceptCookies">
        {{ acceptButtonTexts[currentLanguage] }}
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useLanguagesStore } from "@/components/stores/languages";

export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter();
    const languagesStore = useLanguagesStore();
    const interval = ref(null);
    const showBanner = ref(!localStorage.getItem("cookiesAccepted"));
    const isMobile = ref(window.innerWidth <= 767);
    function acceptCookies() {
      localStorage.setItem("cookiesAccepted", "true");
      showBanner.value = false;
    }
    window.addEventListener("resize", () => {
      isMobile.value = window.innerWidth <= 767;
    });
    const welcomeTexts = {
      es: [
        "Tu Socio de Confianza en Traducción e Interpretación",
        "Traducción Precisa y Fiable",
        "El Toque Final para tus Escritos",
        "Soluciones de Interpretación Personalizadas",
        "¡Contáctanos!",
      ],
      de: [
        "Ihr zuverlässiger Partner für Übersetzungs- und Dolmetschdienste",
        "Präzise und Zuverlässige Übersetzungen",
        "Der letzte Schliff für deine Schriften",
        "Maßgeschneiderte Lösungen des Dolmetschen",
        "Kontakt",
      ],
      en: [
        "Your Trusted Partner in Translation and Interpretation",
        "Accurate and Reliable Translation",
        "The Finishing Touch for Your Writings",
        "Customized Interpretation Solutions",
        "Contact Us!",
      ],
    };

    const descriptions = {
      es: [
        "Estamos especializados en traducciones del español al inglés y del alemán al inglés pudiendo hacer otro tipo de combinaciones lingüísticas o interpretaciones.",
        "Ofrecemos servicios de traducción a una amplia base de clientes a nivel global. Proporcionamos traducciones realizadas por personas, tarifas competitivas y entregas rápidas.",
        "Si estás escribiendo en un idioma que no es tu lengua materna, nuestros experimentados profesionales pueden revisar tu texto para asegurarse de que esté perfecto.",
        "Ofrecemos servicios de interpretación simultánea, consecutiva y por teléfono realizados por intérpretes cualificados.",
        "Estamos a tu disposición para responder a tus preguntas y analizar cómo nuestros servicios pueden beneficiar a tu empresa. Contáctanos sin compromiso y estaremos encantados de ayudarte a explorar las soluciones que mejor se adapten a tus necesidades comerciales.",
      ],
      de: [
        "Wir sind ein Unternehmen mit Sitz in Spanien. Wir sind auf Übersetzungen vom Spanischen ins Englische und vom Deutschen ins Englische spezialisiert und können auch mit anderen Sprachkombinationen oder Arten des Dolmetschen arbeiten.",
        "Wir bieten Übersetzungsdienstleistungen für einen weltweit tätigen großen Kundenstamm an. Wir bieten menschliche Übersetzungen, wettbewerbsfähige Preise und schnelle Durchlaufzeiten.",
        "Wenn Sie in einer Sprache schreiben, die nicht Ihre Muttersprache ist, können unsere erfahrenen Korrekturleser Ihr Werk durchsehen, um sicherzustellen, dass es perfekt ist!",
        "Wir bieten Simultan- und Konsekutivdolmetschen sowie Telefondolmetschen an, das von qualifizierten Dolmetschern durchgeführt wird.",
        "Wir stehen Ihnen gerne zur Verfügung, um Ihre Fragen zu beantworten und zu analysieren, wie unsere Dienstleistungen Ihrem Unternehmen profitieren können. Nehmen Sie einfach unverbindlich Kontakt mit uns auf und gerne helfen wir Ihnen Lösungen zu sondieren, die am besten zu Ihren geschäftlichen Anforderungen passen.",
      ],
      en: [
        "We specialize in Spanish to English and German to English translations, with the ability to handle other language combinations or interpretations.",
        "We provide translation services to a large global client base. We offer human translations at a competitive rate and guarantee a fast turnaround.",
        "If you are writing in a language that is not your mother tongue, our experienced proofreaders can look over your piece to make sure that it is perfect!",
        "We offer simultaneous, consecutive and over-the-phone interpreting services performed by qualified interpreters.",
        "We're at your disposal to address your enquiries and assess how our services can benefit your company. Feel free to reach out to us without any obligation, and we'd be delighted to assist you in exploring the solutions that best meet your business needs.",
      ],
    };

    const supportTexts = {
      es: "Actividad apoyada por :",     
      en: "Activity supported by:",
      de: "Aktivität unterstützt von:",
    };

    const cookieBannerTexts = {
      es: "Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia. ",
      de: "Diese Website verwendet Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website erhalten. ",
      en: "This website uses cookies to ensure you get the best experience. ",
    };

    const privacyPolicyTexts = {
      es: "Más información",
      de: "Weitere Informationen",
      en: "Learn more",
    };

    const acceptButtonTexts = {
      es: "¡Entendido!",
      de: "Verstanden!",
      en: "Got it!",
    };

    // Observa los cambios en el idioma actual
    const currentLanguage = computed(() => languagesStore.getCurrentLanguage);

    // Observa los cambios en la ruta y actualiza el idioma actual
    watch(
      () => router.currentRoute.value.query.lang,
      (newLang) => {
        languagesStore.setCurrentLanguage(newLang || "es");
      }
    );

    const currentSlideIndex = ref(0); // Inicialmente, muestra la primera diapositiva

    const nextSlide = () => {
      const languageWelcomeTexts = welcomeTexts[currentLanguage];
      if (languageWelcomeTexts && languageWelcomeTexts.length > 0) {
        currentSlideIndex.value =
          (currentSlideIndex.value + 1) % languageWelcomeTexts.length;
      }
    };
    const previousSlide = () => {
  const languageWelcomeTexts = welcomeTexts[currentLanguage];
  if (languageWelcomeTexts && languageWelcomeTexts.length > 0) {
    currentSlideIndex.value =
      (currentSlideIndex.value - 1 + languageWelcomeTexts.length) %
      languageWelcomeTexts.length;
  }
};
   
    const startCarousel = () => {
      interval.value = setInterval(nextSlide, 4000);
    };

    
    onMounted(() => {
      startCarousel();
    });

   
    watch(
      () => router.currentRoute.value.fullPath,
      () => {
        clearInterval(interval.value);
      }
    );

    return {
      currentSlideIndex,
      currentLanguage,
      welcomeTexts,
      descriptions,
      nextSlide,
      previousSlide,
      showBanner,
      acceptCookies,
      cookieBannerTexts,
      privacyPolicyTexts,
      acceptButtonTexts,
      isMobile,
      supportTexts,
    };
  },
});
</script>

<style scoped>
.container {
    position: relative;
  }

  .image-container {
    cursor: pointer;
    transition: filter 0.3s ease-in-out;
  }

  .image-container:hover {
    filter: brightness(0.7); /* Ajusta el brillo para oscurecer al pasar el cursor */
  }

  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(44, 28, 28);
    font-weight: bold;
    opacity: 0; /* Inicialmente oculto */
    transition: opacity 0.3s ease-in-out;
  }

  .image-container:hover .text-overlay {
    opacity: 1; 
  }

  .italic-text {
    /* display: none; */
    font-style: italic;
    font-size: 10px;
  }
.carousel-inner img {
  max-width: 100%;
  height: auto;
}
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

.text-container :deep(.welcome-text),
.text-container :deep(.description) {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.text-container :deep(.description) {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: #555;
}

/* Estilos para los indicadores del carrusel */
.carousel-indicators button {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  opacity: 0.7;
}

.carousel-indicators .active {
  background-color: rgba(0, 0, 0, 0.9);
}

/* Estilos para los controles del carrusel */
.carousel-control-prev,
.carousel-control-next {
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  top: calc(50% - 20px);
  opacity: 0.7;
  transition: background-color 0.3s, opacity 0.3s;
}

.carousel-control-next:hover {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
}

.carousel-control-next-icon {
  font-size: 30px;
  color: #fff;
}

/* Estilos para el carrusel */
.carousel {
  transition: opacity 0.5s;
}

.carousel:hover {
  opacity: 1;
}

/* Estilos para el banner de cookies */
/* Estilos para el banner de cookies */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff; /* Cambia el fondo a blanco */
  padding: 10px;
  text-align: center;
  border: 2px solid #000; /* Borde sólido exterior */
  border-radius: 8px; /* Bordes redondeados */
  margin: 5px; /* Espacio entre el borde exterior e interior */
}

.cookie-banner p {
  margin: 0;
}
.cookie-banner a {
  color: #17007c;
  text-decoration: none;
}

.hide-on-mobile {
  display: none;
}

/* Media query para dispositivos móviles (ancho máximo de 767px) */
@media (max-width: 767px) {
  .hide-on-mobile {
    display: none;
  }
  .text-container {
    margin-top: 8px;
    height: 460px;
  }
}
</style>
