<template>
  <div class="directive-container">
    <h2>👁️ Directiva v-show</h2>
    
    <div class="explanation">
      <h3>📚 ¿Qué hace?</h3>
      <p><strong>v-show</strong> siempre renderiza el elemento en el DOM, pero alterna la propiedad CSS <code>display</code>.</p>
      <p class="important">💡 <strong>Diferencia clave vs v-if:</strong> v-show es mejor para elementos que se muestran/ocultan frecuentemente porque no recrea el elemento.</p>
    </div>

    <div class="demo">
      <h3>🎮 Demo Interactivo</h3>
      <button @click="toggleMessage" class="btn-toggle">
        {{ showMessage ? '👁️ Ocultar' : '🙈 Mostrar' }} Mensaje
      </button>
      
      <div v-show="showMessage" class="message-box">
        <h4>¡Este mensaje usa v-show!</h4>
        <p>Inspecciona el elemento en tu navegador y verás que siempre está en el DOM, pero cambia su <code>display</code> CSS.</p>
        <p><strong>Contador de toggles:</strong> {{ toggleCount }}</p>
      </div>
    </div>

    <div class="comparison">
      <h3>⚖️ v-show vs v-if</h3>
      <table>
        <thead>
          <tr>
            <th>Característica</th>
            <th>v-show</th>
            <th>v-if</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Renderizado inicial</td>
            <td>✅ Siempre</td>
            <td>❌ Solo si es true</td>
          </tr>
          <tr>
            <td>Performance (toggle frecuente)</td>
            <td>✅ Mejor</td>
            <td>❌ Peor</td>
          </tr>
          <tr>
            <td>Uso de memoria</td>
            <td>❌ Más (siempre en DOM)</td>
            <td>✅ Menos (solo cuando se muestra)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="code-example">
      <h3>💻 Código Ejemplo</h3>
      <pre><code>
&lt;template&gt;
  &lt;button @click="showMessage = !showMessage"&gt;
    {{ showMessage ? 'Ocultar' : 'Mostrar' }}
  &lt;/button&gt;
  &lt;p v-show="showMessage"&gt;Mensaje visible&lt;/p&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      showMessage: true
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
  name: 'VShow',
  data() {
    return {
      showMessage: true,
      toggleCount: 0
    };
  },
  methods: {
    toggleMessage() {
      this.showMessage = !this.showMessage;
      this.toggleCount++;
    }
  }
}
</script>

<style scoped>
.btn-toggle {
  background: #3498db;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 15px 0;
}

.btn-toggle:hover {
  background: #2980b9;
}

.message-box {
  background: #e8f4fd;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
  margin: 15px 0;
}

.comparison table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.comparison th, .comparison td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

.comparison th {
  background: #f8f9fa;
  font-weight: bold;
}

.comparison tr:nth-child(even) {
  background: #f8f9fa;
}
</style>