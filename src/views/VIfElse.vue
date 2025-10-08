<template>
  <div class="directive-container">
    <h2>🔄 Directiva v-if / v-else-if / v-else</h2>
    
    <div class="explanation">
      <h3>📚 ¿Qué hace?</h3>
      <p><strong>v-if</strong> renderiza condicionalmente un bloque. El bloque solo se muestra si la expresión es verdadera.</p>
      <p><strong>v-else-if</strong> y <strong>v-else</strong> permiten crear cadenas condicionales.</p>
      <p class="important">💡 <strong>Diferencia clave:</strong> v-if NO renderiza el elemento en el DOM si es falso.</p>
    </div>

    <div class="demo">
      <h3>🎮 Demo Interactivo</h3>
      <div class="controls">
        <button @click="status = 'activo'" class="btn">Activo</button>
        <button @click="status = 'pendiente'" class="btn">Pendiente</button>
        <button @click="status = 'inactivo'" class="btn">Inactivo</button>
      </div>
      
      <div class="result">
        <p v-if="status === 'activo'" class="status active">✅ Estado: ACTIVO - Usuario conectado y operativo</p>
        <p v-else-if="status === 'pendiente'" class="status pending">⏳ Estado: PENDIENTE - Esperando confirmación</p>
        <p v-else class="status inactive">❌ Estado: INACTIVO - Usuario desconectado</p>
      </div>
    </div>

    <div class="code-example">
      <h3>💻 Código Ejemplo</h3>
      <pre><code>
&lt;template&gt;
  &lt;p v-if="status === 'activo'"&gt;Activo&lt;/p&gt;
  &lt;p v-else-if="status === 'pendiente'"&gt;Pendiente&lt;/p&gt;
  &lt;p v-else&gt;Inactivo&lt;/p&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      status: 'activo'
    }
  }
}
&lt;/script&gt;
      </code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VIfElse',
  data() {
    return {
      status: 'activo'
    };
  }
}
</script>

<style scoped>
.directive-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.explanation {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.important {
  background: #fff3cd;
  padding: 10px;
  border-radius: 4px;
  border-left: 4px solid #ffc107;
}

.controls {
  margin: 20px 0;
}

.btn {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #42b983;
  color: white;
  font-weight: bold;
}

.btn:hover {
  background: #369870;
}

.status {
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
}

.active { background: #d4edda; color: #155724; }
.pending { background: #fff3cd; color: #856404; }
.inactive { background: #f8d7da; color: #721c24; }

.code-example {
  background: #2d3748;
  color: #e2e8f0;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
}

pre {
  margin: 0;
}
</style>