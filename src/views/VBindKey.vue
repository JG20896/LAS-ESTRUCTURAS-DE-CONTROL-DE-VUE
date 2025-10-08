<template>
  <div class="directive-container">
    <h2>🔑 Directiva v-bind:key</h2>
    
    <div class="explanation">
      <h3>📚 ¿Qué hace :key?</h3>
      <p><strong>:key</strong> ayuda a Vue a identificar cada nodo en las listas para una actualización eficiente del DOM.</p>
      <div class="important-note">
        💡 <strong>Importante:</strong> Siempre usa :key con valores únicos (como IDs) para evitar problemas de renderizado.
      </div>
    </div>

    <div class="demo-section">
      <h3>🎮 Demo Interactivo</h3>
      
      <div class="controls">
        <button @click="addUser" class="btn btn-primary">➕ Agregar Usuario</button>
        <button @click="shuffleUsers" class="btn btn-secondary">🔀 Mezclar Lista</button>
      </div>
      
      <div class="user-list">
        <div v-for="user in users" :key="user.id" class="user-card">
          <div class="user-info">
            <strong>ID: {{ user.id }}</strong><br>
            <span>👤 {{ user.name }}</span><br>
            <span>🎂 {{ user.age }} años</span>
          </div>
          <button @click="removeUser(user.id)" class="btn-remove">🗑️ Eliminar</button>
        </div>
      </div>
    </div>

    <div class="comparison-section">
      <h3>⚖️ ¿Por qué usar :key?</h3>
      <div class="comparison-grid">
        <div class="comparison-good">
          <h4>✅ CON :key (Recomendado)</h4>
          <ul>
            <li>Vue puede rastrear cada elemento</li>
            <li>Mejor performance</li>
            <li>Animaciones funcionan correctamente</li>
            <li>Estado se mantiene al reordenar</li>
          </ul>
        </div>
        <div class="comparison-bad">
          <h4>❌ SIN :key (Problemas)</h4>
          <ul>
            <li>Vue puede reutilizar elementos incorrectamente</li>
            <li>Estados de componentes se mezclan</li>
            <li>Problemas con formularios y animaciones</li>
            <li>Performance reducida</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="best-practices">
      <h3>🏆 Mejores Prácticas</h3>
      <div class="practices-list">
        <div class="practice-item good">
          <strong>✅ Usar IDs únicos:</strong> :key="item.id"
        </div>
        <div class="practice-item good">
          <strong>✅ Combinaciones únicas:</strong> :key="item.name + item.category"
        </div>
        <div class="practice-item bad">
          <strong>❌ Evitar índices:</strong> :key="index" (solo si la lista no cambia)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VBindKey',
  data() {
    return {
      users: [
        { id: 1, name: 'Ana García', age: 28 },
        { id: 2, name: 'Carlos López', age: 32 },
        { id: 3, name: 'María Rodríguez', age: 25 }
      ],
      nextId: 4
    }
  },
  methods: {
    addUser() {
      this.users.push({
        id: this.nextId++,
        name: `Usuario ${this.nextId - 1}`,
        age: Math.floor(Math.random() * 30) + 20
      });
    },
    removeUser(id) {
      this.users = this.users.filter(user => user.id !== id);
    },
    shuffleUsers() {
      // Mezclar array aleatoriamente
      for (let i = this.users.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.users[i], this.users[j]] = [this.users[j], this.users[i]];
      }
    }
  }
}
</script>

<style scoped>
.directive-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.explanation {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.important-note {
  background: #fff3cd;
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
  border-left: 4px solid #ffc107;
}

.demo-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
}

.btn-secondary {
  background: #9b59b6;
  color: white;
}

.btn-secondary:hover {
  background: #8e44ad;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.user-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transform: translateY(-1px);
}

.user-info {
  flex: 1;
}

.btn-remove {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-remove:hover {
  background: #c0392b;
}

.comparison-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 15px;
}

.comparison-good {
  background: #d4edda;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #28a745;
}

.comparison-bad {
  background: #f8d7da;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #dc3545;
}

.comparison-good ul,
.comparison-bad ul {
  margin: 10px 0 0 0;
  padding-left: 20px;
}

.best-practices {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.practices-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.practice-item {
  padding: 12px;
  border-radius: 6px;
}

.practice-item.good {
  background: #d4edda;
  border-left: 4px solid #28a745;
}

.practice-item.bad {
  background: #f8d7da;
  border-left: 4px solid #dc3545;
}

h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

h4 {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
  
  .controls {
    flex-direction: column;
  }
  
  .user-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>