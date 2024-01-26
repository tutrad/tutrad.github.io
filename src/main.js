import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia';
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import { createRouter, createWebHashHistory } from "vue-router"; // Cambia a createWebHashHistory
import Home from "./components/Home.vue";
import Translation from "./components/translation.vue";
import About from "./components/about.vue";
import Contact from "./components/contact.vue";
import Interpreting from "./components/interpreting.vue";
import Join from "./components/join.vue";
import Proofreading from "./components/proofreading.vue";
import Support from "./components/support.vue";

const routes = [
  { path: "/", component: Home, name: "home", props: true },
  { path: "/translation", component: Translation, name: "translation" },
  { path: "/about", component: About, name: "about" },
  { path: "/contact", component: Contact, name: "contact" },
  { path: "/interpreting", component: Interpreting, name: "interpreting" },
  { path: "/join", component: Join, name: "join" },
  { path: "/proofreading", component: Proofreading, name: "proofreading" },
  { path: "/support", component: Support, name: "support" },
];

const router = createRouter({
  history: createWebHashHistory(), // Cambia a createWebHashHistory
  routes,
});

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
// app.use(bootstrap);

app.mount("#app");
