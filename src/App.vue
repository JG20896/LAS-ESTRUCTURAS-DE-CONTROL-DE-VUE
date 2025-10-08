<template>
  <div id="app">
    <header class="app-header">
      <div class="header-content">
        <div class="logo-section">
          <img src="./assets/vue-logo.png" alt="Vue.js Logo" class="vue-logo">
          <h1 class="app-title">ESTRUCTURAS DE CONTROL DE VUE</h1>
        </div>
        <nav class="main-nav">
          <router-link to="/v-if" class="nav-link">v-if</router-link>
          <router-link to="/v-show" class="nav-link">v-show</router-link>
          <router-link to="/v-For" class="nav-link">v-for</router-link>
          <router-link to="/v-Bind-key" class="nav-link">:key</router-link>
        </nav>
      </div>
    </header>

    <main class="app-main" style="background: linear-gradient(135deg, #e8f5e9 0%, #a5d6a7 100%);">
      <div class="container" style="background: rgba(66,184,131,0.07); border-radius: 16px; box-shadow: 0 2px 12px rgba(66,184,131,0.08);">
      <router-view />
      </div>
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <p>&copy; 2024 Vue Directives Master - Aprende Vue.js como un profesional</p>
        <p class="developers">Desarrollado por:</p>
        <p class="developers">Ivan Alexander Perez Ichin </p>
         <p class="developers">NO. de control: 23270672 </p>
        <p class="developers">Jose Gabriel Hernandez Perez </p>
         <p class="developers">NO. de control: 23270690 </p>
        <p class="developers">Ricardo Jordan Escobar Ovando </p>
        <p class="developers">NO. de control: 23271437 </p>
        <p class="developers">Diego Martinez Gomez </p>
        <p class="developers"> NO. de control: 23271428 </p>
        <div class="tech-stack">
          <span class="tech-badge">Vue 3</span>
          <span class="tech-badge">Vite</span>
          <span class="tech-badge">Vue Router</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #42b883;
  --primary-dark: #369870;
  --secondary-color: #34495e;
  --accent-color: #3498db;
  --text-dark: #2c3e50;
  --text-light: #7f8c8d;
  --bg-light: #f8f9fa;
  --white: #ffffff;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --border-radius: 12px;
  --transition: all 0.3s ease;
}

body {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: var(--text-dark);
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.vue-logo {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.app-title {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.main-nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(66, 184, 131, 0.1), transparent);
  transition: var(--transition);
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  color: var(--primary-color);
  background: rgba(66, 184, 131, 0.1);
}

.nav-link.router-link-active {
  color: var(--white);
  background: var(--primary-color);
  box-shadow: 0 2px 8px rgba(66, 184, 131, 0.3);
}
.app-header .developers {
  font-size: 1rem;
  color: var(--text-light);
  margin-top: 0.25rem;
  opacity: 0.85;
  text-align: left;
  font-style: italic;
}
.app-main {
  flex: 1;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.app-footer {
  background: var(--secondary-color);
  color: var(--white);
  padding: 2rem 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.tech-stack {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .app-title {
    font-size: 1.25rem;
  }

  .container {
    padding: 0 1rem;
  }
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}
</style>