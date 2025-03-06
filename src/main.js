import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "@fontsource/poppins"; // Default weight (400)
import "@fontsource/poppins/700.css"; // Specific weight (700)
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const app = createApp(App);
app.use(Toast);
app.mount("#app");