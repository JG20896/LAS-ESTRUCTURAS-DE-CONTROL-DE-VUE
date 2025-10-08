<template>
  <div class="directive-container">
    <h2>📋 Directiva v-for</h2>
    
    <div class="explanation">
      <h3>📚 ¿Qué hace v-for?</h3>
      <p><strong>v-for</strong> permite iterar sobre arrays u objetos para renderizar listas dinámicas.</p>
    </div>

    <div class="demo-section">
      <h3>🎮 Demo Básico - Lista de Frutas</h3>
      
      <ul class="fruit-list">
        <li v-for="(fruit, index) in fruits" :key="index" class="fruit-item">
          🍎 {{ index + 1 }}. {{ fruit }}
        </li>
      </ul>
    </div>

    <div class="demo-section">
      <h3>🛠️ Demo Avanzado - Lista de Usuarios</h3>
      
      <div class="user-list">
        <div v-for="user in users" :key="user.id" class="user-card">
          <strong>👤 {{ user.name }}</strong><br>
          <span>📧 {{ user.email }}</span><br>
          <span>🎂 {{ user.age }} años</span>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>🔢 Usando índices</h3>
      <p>Puedes acceder al índice con <code>(item, index) in items</code></p>
      
      <div class="index-list">
        <div v-for="(number, index) in numbers" :key="index" class="number-item">
          Índice {{ index }}: {{ number }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VFor',
  data() {
    return {
      fruits: ['Manzana', 'Banana', 'Naranja', 'Uva', 'Fresa'],
      users: [
        { id: 1, name: 'Ana García', email: 'ana@ejemplo.com', age: 28 },
        { id: 2, name: 'Carlos López', email: 'carlos@ejemplo.com', age: 32 },
        { id: 3, name: 'María Rodríguez', email: 'maria@ejemplo.com', age: 25 }
      ],
      numbers: [10, 20, 30, 40, 50]
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

.demo-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.fruit-list {
  list-style: none;
  padding: 0;
}

.fruit-item {
  padding: 10px;
  margin: 5px 0;
  background: white;
  border-radius: 5px;
  border-left: 4px solid #42b883;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user-card {
  background: #e8f4fd;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.index-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}

.number-item {
  background: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

code {
  background: #f4f4f4;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
</style>