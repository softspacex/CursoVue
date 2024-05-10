<script setup>
import { ref, computed, onMounted } from "vue";

import BlogPost from "./components/BlogPost.vue";
// import ButtonCounter from "./components/ButtonCounter.vue";
import PaginatePost from "./components/PaginatePost.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";

const posts = ref([]);
const postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);
const loading = ref(true);

const favorito = ref("");

const cambiarFavorito = (title) => {
  favorito.value = title;
};

const next = () => {
  inicio.value = inicio.value + postXpage;
  fin.value = fin.value + postXpage;
};

const prev = () => {
  inicio.value = inicio.value - postXpage;
  fin.value = fin.value - postXpage;
};

// onMounted(async () => {
//   // loading.value = true;
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     posts.value = await res.json();
//   } catch (error) {
//     console.log(error);
//   } finally {
//     loading.value = false;
//   }
// });

//  fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       posts.value = data;
//     })
//     .finally(() => (loading.value = false));

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts.value = await res.json();
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

fetchData();

const maxLenght = computed(() => posts.value.length);
</script>

<template>
  <loading-spinner v-if="loading"></loading-spinner>
  <div class="container" v-else>
    <h1>APP</h1>
    <h2>Mis Post Favorito: {{ favorito }}</h2>
    <!-- <ButtonCounter></ButtonCounter> -->
    <!-- <button-counter></button-counter> -->
    <!-- <blog-post
      title="Post 1"
      id="1"
      body="descripcion 1"
      coloText="primary"
    ></blog-post>
    <blog-post
      title="Post 2"
      id="2"
      body="descripcion 2"
      coloText="secondary"
    ></blog-post>
    <blog-post
      title="Post 3"
      id="3"
      body=" descripcion 3"
      coloText="success"
    ></blog-post>
    <blog-post
      title="Post 4"
      id="4"
      body="descripcion 4"
      coloText="primary"
    ></blog-post> -->
    <!-- <button @click="next">Next provisorio</button>
    <button @click="prev">Prev provisorio</button> -->
    <paginate-post
      @next="next"
      @prev="prev"
      :inicio="inicio"
      :fin="fin"
      class="mb-2"
      :maxLenght="maxLenght"
    ></paginate-post>
    <blog-post
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @cambiarFavoritoNombre="cambiarFavorito"
      class="mb-2"
    ></blog-post>
  </div>
</template>
