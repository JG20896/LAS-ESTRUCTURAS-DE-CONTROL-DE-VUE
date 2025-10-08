<template>
  <nav class="navbar">
    <div class="nav-brand">
      <img src="../assets/vue-logo.png" alt="Vue" class="nav-logo">
      <span class="nav-title">Vue Directives</span>
    </div>
    <div class="nav-links">
      <router-link 
        v-for="route in routes" 
        :key="route.path"
        :to="route.path" 
        class="nav-link"
        :class="{ active: $route.path === route.path }"
      >
        <span class="nav-icon">{{ route.icon }}</span>
        {{ route.name }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      routes: [
        { path: '/v-if', name: 'v-if/else', icon: '🔄' },
        { path: '/v-show', name: 'v-show', icon: '👁️' },
        { path: '/v-for', name: 'v-for', icon: '📋' },
        { path: '/v-bind-key', name: ':key', icon: '🔑' }
      ]
    }
  }
}
</script>

<style scoped>
:root {
  --primary: #42b883;
  --accent: #35495e;
  --gray-200: #e5e7eb;
  --gray-600: #4b5563;
  --white: #fff;
  --radius: 8px;
  --transition: all 0.2s ease;
  --shadow: 0 2px 8px rgba(66, 184, 131, 0.15);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--gray-200);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-logo {
  width: 32px;
  height: 32px;
}

.nav-title {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--gray-600);
  font-weight: 500;
  border-radius: var(--radius);
  transition: var(--transition);
  position: relative;
}

.nav-link:hover {
  color: var(--primary);
  background: rgba(66, 184, 131, 0.1);
}

.nav-link.active {
  color: var(--white);
  background: var(--primary);
  box-shadow: var(--shadow);
}

.nav-icon {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-title {
    font-size: 1.1rem;
  }
}
</style>