<script setup>
// defineProps(["title", "id", "body", "coloText"]);
defineProps({
  title: String,
  id: Number,
  body: {
    typeof: String,
    default: "Sin descripcion",
  },
});

const emit = defineEmits(["cambiarFavoritoNombre"]);
</script>

<template>
  <div class="card">
    <card-body>
      <h5 class="card-title" :class="`text-${coloText}`">
        {{ id }} - {{ title }}
      </h5>
      <p>{{ body }}</p>
      <button
        @click="emit('cambiarFavoritoNombre', title)"
        class="btn btn-outline-primary"
      >
        Favorito
      </button>
    </card-body>
  </div>
</template>
