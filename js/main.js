import { router } from './router.js';

const app = document.getElementById('app');

window.addEventListener("hashchange", () => router(app));
window.addEventListener("load", () => router(app));

//main.js создается после начала использования зависимостей import/export 