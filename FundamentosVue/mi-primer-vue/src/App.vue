<script setup>
import { ref, computed } from "vue";
const name = "Vue dinamico";
// const styleColor = "color: blue";
// const arrayColores = ["blue", "red", "peru"];
// const activo = null;
// const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
// const arrayFrutas = [
//   {
//     name: "Manzana",
//     price: "$1.00",
//     description: "Una manzana",
//   },
//   {
//     name: "Pera",
//     price: "$2.00",
//     description: "Una pera",
//   },
//   {
//     name: "Naranja",
//     price: "$3.00",
//     description: "Una naranja",
//   },
// ];

// const objetoFruta = {
//   name: "Naranja",
//   price: "$3.00",
//   description: "Una naranja",
// };
// const arrayFrutas = [
//   {
//     name: "Manzana",
//     price: "$1.00",
//     description: "Una manzana",
//     stock: 0,
//   },
//   {
//     name: "Pera",
//     price: "$2.00",
//     description: "Una pera",
//     stock: 10,
//   },
//   {
//     name: "Naranja",
//     price: "$3.00",
//     description: "Una naranja",
//     stock: 20,
//   },
// ];

//Metodo
// const handleClick = (mensaje) => {
//   console.log(mensaje);
// };

const counter = ref(0);
const arrayFavoritos = ref([]);

const increment = () => {
  counter.value++;
};

const disminuir = () => {
  counter.value--;
};

const resetear = () => {
  counter.value = 0;
};

const bloquearBtnAdd = computed(() => {
  const numSearc = arrayFavoritos.value.find((num) => num === counter.value);
  console.log(numSearc);
  // if (numSearc === 0) return true;
  // return numSearc ? true : false;
  return numSearc || numSearc === 0;
});

const classCounter = computed(() => {
  if (counter.value === 0) {
    return "zero";
  }
  if (counter.value > 0) {
    return "positive";
  }
  if (counter.value < 0) {
    return "negative";
  }
});

const add = () => {
  arrayFavoritos.value.push(counter.value);
};
</script>

<template>
  <div class="container text-center mt-3">
    <h1>Hola {{ name.toUpperCase() }}</h1>
    <!-- <h2>{{ arrayColores }}</h2> -->
    <!-- <h2 :style="`color:${arrayColores[1]}`">Soy azul</h2> -->
    <!-- <h2 v-if="activo === true">
    {{ activo ? "Estoy activo" : "Estoy inactivo" }}
    Estoy activo
  </h2> -->
    <!-- <p v-else-if="activo === false">Estoy inactivo</p>
  <p v-else>Estoy indeciso</p> -->
    <!-- <ul> -->
    <!-- <li v-for="(fruta, index) in arrayFrutas" :key="index">
      {{ index }} - {{ fruta }}
    </li> -->
    <!-- <li v-for="fruta in arrayFrutas" :key="fruta.name">
      {{ fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
    </li> -->
    <!-- <li v-for="(value, propiedad) in objetoFruta" :key="value">
      {{ propiedad }} : {{ value }}
    </li> -->
    <!-- <template v-for="item in arrayFrutas" :key="item.name">
      <li v-if="item.stock">{{ item.name }} - {{ item.price }}</li>
    </template> -->
    <!-- </ul> -->

    <!-- <button v-on:click.right="handleClick('Texto 1 Right')">
    Activame right
  </button>
  <button @click="handleClick('Texo 2 Left')">Activame left</button>
  <button @click.middle="handleClick('Texo 3 Middle')">Activame middle</button> -->

    <h2 :class="classCounter">{{ counter }}</h2>
    <div class="btn-group">
      <button @click="increment()" class="btn btn-success">Aumentar</button>
      <button @click="disminuir()" class="btn btn-danger">Disminuir</button>
      <button @click="resetear()" class="btn btn-secondary">Resetear</button>
      <button @click="add" :disabled="bloquearBtnAdd" class="btn btn-primary">
        Add
      </button>
    </div>

    <ul class="list-group mt-4">
      <li
        class="list-group-item"
        v-for="(num, index) in arrayFavoritos"
        :key="index"
      >
        {{ num }}
      </li>
    </ul>
  </div>
</template>

<style>
h1 {
  color: red;
}
.positive {
  color: green;
}
.negative {
  color: red;
}
.zero {
  color: peru;
}
</style>
