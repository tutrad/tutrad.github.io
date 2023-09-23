<template>
  <nav class="navbar navbar-expand-lg bd-navbar sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/logoTT.webp"
          alt="tutraduccion.es"
          width="60"
          height="60"
        />
      </router-link>
      
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        :class="{ show: navbarOpen }"
        id="navbarSupportedContent"
      >

        <!-- Opciones de la barra de navegación -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              v-if="currentLanguage === 'es'"
              class="nav-link active"
              aria-current="page"
              to="/"
              exact-active-class="active"
              :style="spanishStyle"
              @click="closeNavbarOnMobile"
            >
              Inicio
            </router-link>
            <router-link
              v-else-if="currentLanguage === 'de'"
              class="nav-link active"
              aria-current="page"
              to="/"
              exact-active-class="active"
              :style="defaultStyle"
              @click="closeNavbarOnMobile"
            >
              Startseite
            </router-link>
            <router-link
              v-else
              class="nav-link active"
              aria-current="page"
              to="/"
              exact-active-class="active"
              :style="defaultStyle"
              @click="closeNavbarOnMobile"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              style="
                font-weight: bold;
                color: #000;
                font-family: 'Roboto', sans-serif;
              "
            >
              {{
                currentLanguage === "es"
                  ? "Servicios"
                  : currentLanguage === "de"
                  ? "Dienstleistungen"
                  : "Services"
              }}
            </a>
            <ul class="dropdown-menu" :class="{ show: dropdownOpen }">
              <li>
                <router-link
                  v-if="currentLanguage === 'es'"
                  class="dropdown-item"
                  to="/translation"
                  :style="spanishStyle"
                  @click="closeNavbarOnMobile"
                >
                  Traducción
                </router-link>
                <router-link
                  v-else-if="currentLanguage === 'de'"
                  class="dropdown-item"
                  to="/translation"
                  :style="defaultStyle"
                  @click="closeNavbarOnMobile"
                >
                  Übersetzung
                </router-link>
                <router-link
                  v-else
                  class="dropdown-item"
                  to="/translation"
                  :style="defaultStyle"
                  @click="closeNavbarOnMobile"
                >
                  Translation
                </router-link>
              </li>
              <li>
                <router-link
                  v-if="currentLanguage === 'es'"
                  class="dropdown-item"
                  to="/interpreting"
                  :style="spanishStyle"
                  @click="closeNavbarOnMobile"
                >
                  Interpretación
                </router-link>
                <router-link
                  v-else-if="currentLanguage === 'de'"
                  class="dropdown-item"
                  to="/interpreting"
                  :style="defaultStyle"
                  @click="closeNavbarOnMobile"
                >
                  Dolmetschen
                </router-link>
                <router-link
                  v-else
                  class="dropdown-item"
                  to="/interpreting"
                  :style="defaultStyle"
                  @click="closeNavbarOnMobile"
                >
                  Interpreting
                </router-link>
              </li>
              <li>
                <router-link
                  v-if="currentLanguage === 'es'"
                  class="dropdown-item"
                  to="/proofreading"
                  :style="spanishStyle"
                  @click="closeNavbarOnMobile"
                >
                  Edición
                </router-link>
                <router-link
                  v-else-if="currentLanguage === 'de'"
                  class="dropdown-item"
                  to="/proofreading"
                  :style="defaultStyle"
                  @click="closeNavbarOnMobile"
                >
                  Korrekturlesen
                </router-link>
                <router-link
                  v-else
                  class="dropdown-item"
                  to="/proofreading"
                  :style="defaultStyle"
                  @click="closeNavbarOnMobile"
                >
                  Proofreading
                </router-link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link
              v-if="currentLanguage === 'es'"
              class="nav-link active"
              aria-current="page"
              to="/contact"
              exact-active-class="active"
              :style="spanishStyle"
              @click="closeNavbarOnMobile"
            >
              Contacto
            </router-link>
            <router-link
              v-else-if="currentLanguage === 'de'"
              class="nav-link active"
              aria-current="page"
              to="/contact"
              exact-active-class="active"
              :style="defaultStyle"
              @click="closeNavbarOnMobile"
            >
              Kontakt
            </router-link>
            <router-link
              v-else
              class="nav-link active"
              aria-current="page"
              to="/contact"
              exact-active-class="active"
              :style="defaultStyle"
              @click="closeNavbarOnMobile"
            >
              Contact
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              v-if="currentLanguage === 'es'"
              class="nav-link active"
              aria-current="page"
              to="/join"
              exact-active-class="active"
              :style="spanishStyle"
              @click="closeNavbarOnMobile"
            >
              Únete
            </router-link>
            <router-link
              v-else-if="currentLanguage === 'de'"
              class="nav-link active"
              aria-current="page"
              to="/join"
              exact-active-class="active"
              :style="defaultStyle"
              @click="closeNavbarOnMobile"
            >
              Beitreten
            </router-link>
            <router-link
              v-else
              class="nav-link active"
              aria-current="page"
              to="/join"
              exact-active-class="active"
              :style="defaultStyle"
              @click="closeNavbarOnMobile"
            >
              Join
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              v-if="currentLanguage === 'es'"
              class="nav-link active"
              aria-current="page"
              to="/about"
              exact-active-class="active"
              :style="spanishStyle"
              @click="closeNavbarOnMobile"
            >
              Sobre nosotros
            </router-link>
            <router-link
              v-else-if="currentLanguage === 'de'"
              class="nav-link active"
              aria-current="page"
              to="/about"
              exact-active-class="active"
              :style="defaultStyle"
              @click="closeNavbarOnMobile"
            >
              Über uns
            </router-link>
            <router-link
              v-else
              class="nav-link active"
              aria-current="page"
              to="/about"
              exact-active-class="active"
              :style="defaultStyle"
              @click="closeNavbarOnMobile"
            >
              About us
            </router-link>
          </li>
        </ul>
      </div>
      <!-- Agregar las banderas a la derecha -->
      <div class="flags ml-auto">
        <img
          src="../assets/spanish.webp"
          alt="Spanish"
          @click="changeLanguage('es')"
          class="flag"
          :class="{ active: currentLanguage === 'es' }"
        />
        <img
          src="../assets/german.webp"
          alt="German"
          @click="changeLanguage('de')"
          class="flag"
          :class="{ active: currentLanguage === 'de' }"
        />
        <img
          src="../assets/english.webp"
          alt="English"
          @click="changeLanguage('en')"
          class="flag"
          :class="{ active: currentLanguage === 'en' }"         
        />
      </div>
    </div>
  </nav>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useLanguagesStore } from "@/components/stores/languages";

export default defineComponent({
  name: "Navbar",
  setup() {
    const router = useRouter();
    const currentLanguage = ref("es");
    const languagesStore = useLanguagesStore();

    const navbarOpen = ref(false);
    const dropdownOpen = ref(false);
    const spanishStyle = {};
    const defaultStyle = {};

    watch(currentLanguage, (newValue) => {});

    const toggleNavbar = () => {
      navbarOpen.value = !navbarOpen.value;
    };

    const changeLanguage = (language) => {
      currentLanguage.value = language;
      closeNavbar();
      router.push({ query: { lang: language } });
      languagesStore.setCurrentLanguage(language);
    };

    const closeNavbar = () => {
      navbarOpen.value = false;
    };

    const closeNavbarOnMobile = () => {
      if (window.innerWidth < 992) {
        closeNavbar();
      }
    };

    // Cerrar la barra de navegación cuando se cambia el tamaño de la ventana
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        closeNavbar();
      }
    });

    return {
      currentLanguage,
      changeLanguage,
      navbarOpen,
      dropdownOpen,
      spanishStyle,
      defaultStyle,
      closeNavbar,
      toggleNavbar,
      closeNavbarOnMobile,
    };
  },
});
</script>

<style scoped>
nav {
  background: linear-gradient(
    to right,
    #ffffff,
    #ffffff,
    #f0b6ff,
    #ffffff,
    #f6ffa6,
    #ffffff,
    #7fdffc
  );
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.nav-link,
a {
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin-right: 1rem;
}

.navbar-brand img {
  margin-top: -0.5vw;
}

.navbar-toggler {
  border: none;
  background: transparent;
  color: #fff;
}

.dropdown-menu {
  background-color: #ffffff;
}

.dropdown-item {
  color: #030000;
}

.dropdown-divider {
  background-color: #fff;
}

.dropdown-toggle {
  cursor: pointer;
}

.flags {
  display: flex;
  gap: 10px;
}

.flag {
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.flag.active {
  border: 2px solid #000;
}
</style>

